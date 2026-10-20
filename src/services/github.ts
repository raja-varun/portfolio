export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number | null;
  forks_count: number | null;
  updated_at: string | null;
  topics: string[];
}

export interface GitHubStats {
  totalRepos: number;
  languages: { [key: string]: number };
  totalStars: number;
  totalForks: number;
}

// Curated public-repository fallback used only when the GitHub API is unavailable.
// Counts and update timestamps are intentionally null: they are live metadata and
// must not be invented or allowed to become stale portfolio claims.
export const FALLBACK_REPOS: GitHubRepo[] = [
  {
    id: 101,
    name: 'OCR-Free-Multimodal-RAG',
    description: 'OCR-free multimodal document retrieval and question answering using FastAPI, Qwen2-VL, FAISS, and React.',
    html_url: 'https://github.com/raja-varun/OCR-Free-Multimodal-RAG',
    homepage: null,
    language: 'Python',
    stargazers_count: null,
    forks_count: null,
    updated_at: null,
    topics: []
  },
  {
    id: 102,
    name: 'plant-disease-detection',
    description: 'Streamlit plant-leaf classification demo with a bundled TensorFlow/Keras model and multilingual recommendations.',
    html_url: 'https://github.com/raja-varun/plant-disease-detection',
    homepage: null,
    language: 'Python',
    stargazers_count: null,
    forks_count: null,
    updated_at: null,
    topics: []
  },
  {
    id: 103,
    name: 'gesture-based-system-control',
    description: 'Windows computer-vision prototype for hand-gesture volume, brightness, and scrolling controls.',
    html_url: 'https://github.com/raja-varun/gesture-based-system-control',
    homepage: null,
    language: 'Python',
    stargazers_count: null,
    forks_count: null,
    updated_at: null,
    topics: []
  }
];

type GitHubFetchResult = {
  repos: GitHubRepo[];
  isFallback: boolean;
  error?: string;
};

type CachedResult = {
  result: GitHubFetchResult;
  expiresAt: number;
};

const CACHE_TTL_MS = 5 * 60 * 1000;
const resultCache = new Map<string, CachedResult>();
const inFlightRequests = new Map<string, Promise<GitHubFetchResult>>();

export async function fetchGitHubRepos(
  username: string,
  options: { force?: boolean } = {},
): Promise<GitHubFetchResult> {
  if (!username) {
    return { repos: FALLBACK_REPOS, isFallback: true };
  }

  const cached = resultCache.get(username);
  if (!options.force && cached && cached.expiresAt > Date.now()) {
    return cached.result;
  }

  const existingRequest = inFlightRequests.get(username);
  if (existingRequest) return existingRequest;

  const request = (async (): Promise<GitHubFetchResult> => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);

    try {
      const res = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=12`, {
        signal: controller.signal,
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
      });

      if (!res.ok) {
        return {
          repos: FALLBACK_REPOS,
          isFallback: true,
          error: `GitHub API responded with status ${res.status} (Showing featured repositories fallback)`
        };
      }

      const data: GitHubRepo[] = await res.json();
      if (!Array.isArray(data) || data.length === 0) {
        return { repos: FALLBACK_REPOS, isFallback: true };
      }

      return { repos: data, isFallback: false };
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Network error';
      return {
        repos: FALLBACK_REPOS,
        isFallback: true,
        error: `Could not reach GitHub API: ${message} (Showing featured repositories fallback)`
      };
    } finally {
      clearTimeout(timeoutId);
    }
  })();

  inFlightRequests.set(username, request);

  try {
    const result = await request;
    resultCache.set(username, {
      result,
      expiresAt: Date.now() + CACHE_TTL_MS,
    });
    return result;
  } finally {
    inFlightRequests.delete(username);
  }
}
