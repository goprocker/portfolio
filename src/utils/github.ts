// GitHub REST API Integration & Stats Aggregator
import { PORTFOLIO_DATA } from "../data/portfolio";

export interface GitHubStats {
  username: string;
  name: string;
  avatarUrl: string;
  bio: string;
  publicRepos: number;
  followers: number;
  following: number;
  totalStars: number;
  totalForks: number;
  topLanguages: Array<{ name: string; count: number; percentage: number }>;
  featuredRepos: Array<{
    name: string;
    description: string;
    stars: number;
    forks: number;
    language: string;
    url: string;
    updatedAt: string;
    pushedAt: string;
  }>;
  // Every own repo keyed by lowercase "owner/name", for live badges elsewhere.
  repoIndex: Record<string, { stars: number; pushedAt: string; description: string; language: string }>;
}

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

function extractUsername(): string {
  const raw = (PORTFOLIO_DATA.developer.github || "").trim().replace(/^@/, "");
  if (!raw) return "goprocker";

  // Extract owner username from github.com/username or github.com/username/repo
  const match = raw.match(/github\.com\/([a-zA-Z0-9_-]+)/i);
  if (match && match[1]) {
    return match[1];
  }

  // If user entered just their username directly (e.g. "goprocker")
  return raw.replace(/\/$/, "");
}

const CACHE_KEY = "tui_github_stats_cache_v5";
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

function formatRepository(repo: any, username: string) {
  const owner = repo.owner?.login || username;

  return {
    name: owner.toLowerCase() === username.toLowerCase() ? repo.name : repo.full_name,
    description: repo.description || "No description provided",
    stars: repo.stargazers_count || 0,
    forks: repo.forks_count || 0,
    language: repo.language || "Plain Text",
    url: repo.html_url,
    updatedAt: new Date(repo.pushed_at || repo.updated_at).toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" }),
    pushedAt: repo.pushed_at || repo.updated_at,
  };
}

export async function fetchGitHubStats(): Promise<GitHubStats | null> {
  const username = extractUsername();

  // 1. Check LocalStorage Cache
  if (typeof window !== "undefined") {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const { data, timestamp } = JSON.parse(cached);
        if (Date.now() - timestamp < CACHE_TTL_MS && data.username === username) {
          return data;
        }
      }
    } catch {}
  }

  try {
    // 2. Fetch User Profile
    const userRes = await fetch(`https://api.github.com/users/${username}`);
    if (!userRes.ok) return null;
    const userData = await userRes.json();

    // 3. Fetch Repositories
    const reposRes = await fetch(
      `https://api.github.com/users/${username}/repos?sort=pushed&per_page=100`
    );
    if (!reposRes.ok) return null;
    const reposData = await reposRes.json();

    let totalStars = 0;
    let totalForks = 0;
    const langCounts: Record<string, number> = {};

    reposData
      .filter((repo: any) => !repo.fork)
      .forEach((repo: any) => {
        totalStars += repo.stargazers_count || 0;
        totalForks += repo.forks_count || 0;

        if (repo.language) {
          langCounts[repo.language] = (langCounts[repo.language] || 0) + 1;
        }
      });

    const repositoriesByName = new Map(
      reposData.map((repo: any) => [String(repo.full_name).toLowerCase(), repo]),
    );
    const pinnedRepositories = PORTFOLIO_DATA.developer.pinnedRepositories;
    const missingPinnedRepositories = pinnedRepositories.filter(
      (fullName) => !repositoriesByName.has(fullName.toLowerCase()),
    );

    const fetchedPinnedRepositories = await Promise.all(
      missingPinnedRepositories.map(async (fullName) => {
        const response = await fetch(`https://api.github.com/repos/${fullName}`);
        return response.ok ? response.json() : null;
      }),
    );

    fetchedPinnedRepositories.forEach((repo) => {
      if (repo?.full_name) {
        repositoriesByName.set(String(repo.full_name).toLowerCase(), repo);
      }
    });

    // Show what's actually being worked on: the most recently pushed own repos,
    // skipping forks and the profile README repo.
    const recentRepos = reposData
      .filter((repo: any) => !repo.fork && !repo.archived && repo.name.toLowerCase() !== username.toLowerCase())
      .sort((a: any, b: any) => Date.parse(b.pushed_at) - Date.parse(a.pushed_at))
      .slice(0, 12)
      .map((repo: any) => formatRepository(repo, username));
    const featuredRepos = recentRepos.length
      ? recentRepos
      : pinnedRepositories.flatMap((fullName) => {
          const repo = repositoriesByName.get(fullName.toLowerCase());
          return repo ? [formatRepository(repo, username)] : [];
        });

    // Calculate language percentages
    const totalLangs = Object.values(langCounts).reduce((a, b) => a + b, 0);
    const topLanguages = Object.entries(langCounts)
      .map(([name, count]) => ({
        name,
        count,
        percentage: Math.round((count / totalLangs) * 100),
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);

    const stats: GitHubStats = {
      username,
      name: userData.name || username,
      avatarUrl: userData.avatar_url || "",
      bio: userData.bio || "",
      publicRepos: userData.public_repos || reposData.length,
      followers: userData.followers || 0,
      following: userData.following || 0,
      totalStars,
      totalForks,
      topLanguages,
      featuredRepos,
      repoIndex: Object.fromEntries(
        reposData.map((repo: any) => [
          String(repo.full_name).toLowerCase(),
          { stars: repo.stargazers_count || 0, pushedAt: repo.pushed_at || repo.updated_at, description: repo.description || "", language: repo.language || "" },
        ]),
      ),
    };

    // Save to Cache
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({ data: stats, timestamp: Date.now() })
        );
      } catch {}
    }

    return stats;
  } catch {
    return null;
  }
}

