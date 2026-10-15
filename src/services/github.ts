export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
}

export interface GitHubStats {
  totalRepos: number;
  languages: { [key: string]: number };
  totalStars: number;
  totalForks: number;
}

// Fallback repositories derived directly from resume projects in case rate limits or offline mode
export const FALLBACK_REPOS: GitHubRepo[] = [
  {
    id: 101,
    name: 'colpali-ocr-free-retrieval',
    description: 'OCR-free multimodal document retrieval system using Qwen2-VL, FAISS, FastAPI, and React.js.',
    html_url: 'https://github.com/rajavarun/colpali-ocr-free-retrieval',
    homepage: null,
    language: 'Python',
    stargazers_count: 5,
    forks_count: 2,
    updated_at: '2026-06-15T00:00:00Z',
    topics: ['qwen2-vl', 'multimodal-ai', 'faiss', 'fastapi', 'react']
  },
  {
    id: 102,
    name: 'plant-disease-detection',
    description: 'Deep learning plant disease classification system with TensorFlow/Keras and multilingual Streamlit app.',
    html_url: 'https://github.com/rajavarun/plant-disease-detection',
    homepage: null,
    language: 'Python',
    stargazers_count: 8,
    forks_count: 3,
    updated_at: '2025-02-20T00:00:00Z',
    topics: ['tensorflow', 'opencv', 'computer-vision', 'streamlit', 'deep-learning']
  },
  {
    id: 103,
    name: 'gesture-system-control',
    description: 'Real-time hand gesture recognition system for touchless Windows OS control using OpenCV and MediaPipe.',
    html_url: 'https://github.com/rajavarun/gesture-based-system-control',
    homepage: null,
    language: 'Python',
    stargazers_count: 6,
    forks_count: 1,
    updated_at: '2025-06-10T00:00:00Z',
    topics: ['mediapipe', 'opencv', 'gesture-recognition', 'pyautogui', 'pycaw']
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
