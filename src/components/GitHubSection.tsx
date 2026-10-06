import React, { useEffect, useState } from 'react';
import { SITE_CONFIG } from '../config/site';
import { fetchGitHubRepos } from '../services/github';
import type { GitHubRepo } from '../services/github';
import { Star, GitFork, ExternalLink, RefreshCw, AlertCircle, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { motion } from 'framer-motion';

export const GitHubSection: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isFallback, setIsFallback] = useState<boolean>(false);
  const [errorNotice, setErrorNotice] = useState<string | null>(null);

  const loadRepos = async () => {
    setLoading(true);
    setErrorNotice(null);
    const result = await fetchGitHubRepos(SITE_CONFIG.GITHUB_USERNAME);
    setRepos(result.repos);
    setIsFallback(result.isFallback);
    if (result.error) {
      setErrorNotice(result.error);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadRepos();
  }, []);

  // Compute language distribution
  const languages: { [key: string]: number } = {};
  repos.forEach((r) => {
    if (r.language) {
      languages[r.language] = (languages[r.language] || 0) + 1;
    }
  });

  const totalLangCount = Object.values(languages).reduce((a, b) => a + b, 0);

  const getLanguageColor = (lang: string | null) => {
    switch (lang?.toLowerCase()) {
      case 'python':
        return '#38bdf8';
      case 'typescript':
        return '#818cf8';
      case 'javascript':
        return '#facc15';
      case 'html':
        return '#f97316';
      case 'c':
        return '#94a3b8';
      case 'java':
        return '#f87171';
      default:
        return '#64748b';
    }
  };

  return (
    <section id="github" className="py-28 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      
      {/* Top Editorial Label */}
      <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-slate-400 mb-16">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>[OPEN SOURCE &amp; REPOSITORIES]</span>
        </span>
        <span>GITHUB SYNC</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.05]">
            Public Repositories &amp; Code
          </h2>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            Live synchronization with handle{' '}
            <a
              href={`https://github.com/${SITE_CONFIG.GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 font-mono underline hover:text-cyan-300"
            >
              @{SITE_CONFIG.GITHUB_USERNAME}
            </a>
            .
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={loadRepos}
            disabled={loading}
            className="p-3 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-300 hover:text-white transition-colors disabled:opacity-50 cursor-pointer"
            title="Refresh repositories"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </button>

          <a
            href={`https://github.com/${SITE_CONFIG.GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-slate-200 transition-all cursor-pointer shadow-md"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>View Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Fallback Notice if active */}
      {isFallback && (
        <div className="mb-10 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex items-start gap-3 text-xs font-mono text-slate-300">
          <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-white">Repository Overview: </span>
            {errorNotice ? `${errorNotice}. ` : 'Curated projects displayed from verified resume credentials. '}
            Live sync active for GitHub username in{' '}
            <code className="text-cyan-300 bg-white/[0.05] px-1.5 py-0.5 rounded">src/config/site.ts</code>.
          </div>
        </div>
      )}

      {/* Minimalist Stacked Language Meter */}
      {totalLangCount > 0 && (
        <div className="mb-12 p-6 rounded-2xl bg-[#0a0c14] border border-white/[0.08]">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
            <span>Language Composition</span>
            <span>{repos.length} Repositories Indexed</span>
          </div>

          <div className="h-2 w-full rounded-full bg-white/[0.05] overflow-hidden flex mb-3">
            {Object.entries(languages).map(([lang, count]) => {
              const pct = (count / totalLangCount) * 100;
              return (
                <div
                  key={lang}
                  style={{
                    width: `${pct}%`,
                    backgroundColor: getLanguageColor(lang),
                  }}
                  title={`${lang}: ${count} repo (${pct.toFixed(0)}%)`}
                  className="h-full transition-all"
                />
              );
            })}
          </div>

          <div className="flex flex-wrap gap-4 text-xs font-mono">
            {Object.entries(languages).map(([lang, count]) => (
              <div key={lang} className="flex items-center gap-1.5 text-slate-300">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: getLanguageColor(lang) }}
                />
                <span>{lang}</span>
                <span className="text-slate-400">({count})</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Clean Grid of Repository Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo, idx) => (
          <motion.article
            key={repo.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: idx * 0.05 }}
            className="p-7 rounded-2xl bg-[#0a0c14] border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <GithubIcon className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                  <span className="text-[11px] font-mono text-slate-400">
                    repo / 0{idx + 1}
                  </span>
                </div>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label={`Open ${repo.name}`}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <h3 className="text-base font-display font-bold text-white group-hover:text-cyan-300 transition-colors mb-2 tracking-tight break-all">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a>
              </h3>

              <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 mb-6">
                {repo.description || 'Public repository source code.'}
              </p>
            </div>

            <div>
              {repo.topics && repo.topics.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-4">
                  {repo.topics.slice(0, 3).map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] text-slate-300 border border-white/[0.06]"
                    >
                      #{topic}
                    </span>
                  ))}
                </div>
              )}

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  {repo.language && (
                    <>
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: getLanguageColor(repo.language) }}
                      />
                      <span className="text-slate-300">{repo.language}</span>
                    </>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-400" />
                    <span>{repo.stargazers_count}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5 text-slate-400" />
                    <span>{repo.forks_count}</span>
                  </span>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

    </section>
  );
};
