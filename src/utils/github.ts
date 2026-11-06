// Live GitHub data for the site: profile totals plus own repos, newest push first.
import { PORTFOLIO_DATA } from "../data/portfolio";

export interface Repo {
  name: string;
  fullName: string;
  url: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  pushedAt: string;
}

export interface GitHubSnapshot {
  login: string;
  followers: number;
  publicRepos: number;
  stars: number;
  forks: number;
  languages: { name: string; share: number }[];
  /** Own, non-fork, non-archived repos sorted by most recent push. */
  repos: Repo[];
  /** Same repos keyed by lowercase "owner/name". */
  byFullName: Record<string, Repo>;
}

const STORE_KEY = "goopros:github:v1";
const MAX_AGE_MS = 5 * 60 * 1000;

export const githubLogin = (): string =>
  PORTFOLIO_DATA.developer.github.match(/github\.com\/([\w-]+)/i)?.[1] ?? PORTFOLIO_DATA.developer.handle;

export function timeAgo(iso: string): string {
  const days = Math.floor((Date.now() - Date.parse(iso)) / 86_400_000);
  if (days <= 0) return "today";
  if (days === 1) return "yesterday";
  if (days < 30) return `${days} days ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months} month${months === 1 ? "" : "s"} ago`;
  const years = Math.floor(months / 12);
  return `${years} year${years === 1 ? "" : "s"} ago`;
}

function readStore(login: string): GitHubSnapshot | null {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return null;
    const { at, data } = JSON.parse(raw) as { at: number; data: GitHubSnapshot };
    return Date.now() - at < MAX_AGE_MS && data.login === login ? data : null;
  } catch {
    return null;
  }
}

function writeStore(data: GitHubSnapshot) {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify({ at: Date.now(), data }));
  } catch {}
}

let inflight: Promise<GitHubSnapshot | null> | null = null;

/** Fetches (or reuses) the snapshot. Resolves to null when GitHub is unreachable or rate-limited. */
export function loadGitHub(): Promise<GitHubSnapshot | null> {
  const login = githubLogin();
  const cached = typeof window !== "undefined" ? readStore(login) : null;
  if (cached) return Promise.resolve(cached);
  inflight ??= (async () => {
    try {
      const [userRes, reposRes] = await Promise.all([
        fetch(`https://api.github.com/users/${login}`),
        fetch(`https://api.github.com/users/${login}/repos?per_page=100&sort=pushed`),
      ]);
      if (!userRes.ok || !reposRes.ok) return null;
      const user = await userRes.json();
      const raw: any[] = await reposRes.json();

      const repos: Repo[] = raw
        .filter((r) => !r.fork && !r.archived && r.name.toLowerCase() !== login.toLowerCase())
        .map((r) => ({
          name: r.name,
          fullName: r.full_name,
          url: r.html_url,
          description: r.description ?? "",
          language: r.language ?? "",
          stars: r.stargazers_count ?? 0,
          forks: r.forks_count ?? 0,
          pushedAt: r.pushed_at ?? r.updated_at,
        }))
        .sort((a, b) => Date.parse(b.pushedAt) - Date.parse(a.pushedAt));

      const tally = new Map<string, number>();
      repos.forEach((r) => r.language && tally.set(r.language, (tally.get(r.language) ?? 0) + 1));
      const counted = [...tally.values()].reduce((a, b) => a + b, 0) || 1;

      const data: GitHubSnapshot = {
        login,
        followers: user.followers ?? 0,
        publicRepos: user.public_repos ?? repos.length,
        stars: repos.reduce((sum, r) => sum + r.stars, 0),
        forks: repos.reduce((sum, r) => sum + r.forks, 0),
        languages: [...tally.entries()]
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(([name, n]) => ({ name, share: Math.round((n / counted) * 100) })),
        repos,
        byFullName: Object.fromEntries(repos.map((r) => [r.fullName.toLowerCase(), r])),
      };
      writeStore(data);
      return data;
    } catch {
      return null;
    } finally {
      inflight = null;
    }
  })();
  return inflight;
}
