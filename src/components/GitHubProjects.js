import React, { useState, useEffect } from 'react';
import './GitHubProjects.css';

const USERNAME = 'Sarathkumarcm1104';
// Repos to never show on the portfolio itself — avoids self-reference.
const EXCLUDED_REPOS = new Set(['my-portfolio', 'Sarathkumarcm1104']);
// Cache the API response for 1 hour so we don't hit GitHub's 60 req/hr limit
// on every page load / scroll-back.
const CACHE_KEY = `gh-repos:${USERNAME}`;
const CACHE_TTL_MS = 60 * 60 * 1000;

// Per-language color used for the small dot on each card. Falls back to gray
// for anything not in this map.
const LANG_COLORS = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  HTML: '#e34c26',
  CSS: '#563d7c',
  PHP: '#4F5D95',
  Java: '#b07219',
  Shell: '#89e051',
  Vue: '#41b883',
  SCSS: '#c6538c',
};

function formatRelativeTime(isoDate) {
  if (!isoDate) return '';
  const then = new Date(isoDate).getTime();
  const now = Date.now();
  const diffDays = Math.floor((now - then) / (1000 * 60 * 60 * 24));
  if (diffDays < 1) return 'today';
  if (diffDays === 1) return 'yesterday';
  if (diffDays < 30) return `${diffDays} days ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
  return `${Math.floor(diffDays / 365)} years ago`;
}

const GitHubProjects = () => {
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState('loading'); // loading | ok | error
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    let cancelled = false;

    async function loadRepos() {
      // Try cache first.
      try {
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const parsed = JSON.parse(cached);
          if (parsed.expiresAt > Date.now() && Array.isArray(parsed.data)) {
            if (!cancelled) {
              setRepos(parsed.data);
              setStatus('ok');
            }
            return;
          }
        }
      } catch {
        // localStorage might be disabled — ignore and fall through to fetch.
      }

      try {
        const res = await fetch(
          `https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`
        );
        if (!res.ok) {
          throw new Error(`GitHub API responded ${res.status}`);
        }
        const data = await res.json();

        const filtered = data
          .filter((r) => !r.fork && !EXCLUDED_REPOS.has(r.name))
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
          .map((r) => ({
            id: r.id,
            name: r.name,
            description: r.description,
            html_url: r.html_url,
            homepage: r.homepage,
            language: r.language,
            stargazers_count: r.stargazers_count,
            forks_count: r.forks_count,
            updated_at: r.updated_at,
          }));

        if (cancelled) return;
        setRepos(filtered);
        setStatus('ok');

        // Cache for next visit.
        try {
          localStorage.setItem(
            CACHE_KEY,
            JSON.stringify({ expiresAt: Date.now() + CACHE_TTL_MS, data: filtered })
          );
        } catch {
          // Storage full / disabled — fine to ignore.
        }
      } catch (err) {
        if (cancelled) return;
        setStatus('error');
        setErrorMsg(
          err.message ||
            "Couldn't load GitHub repos right now. Check back in a minute — the API may be rate-limited."
        );
      }
    }

    loadRepos();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="github" className="github-section">
      <div className="container">
        <div className="section-title-wrap">
          <h2 className="section-title">More on GitHub</h2>
          <p className="section-subtitle">
            Live feed from my GitHub — fetched in real-time via the public REST API.
          </p>
        </div>

        {status === 'loading' && (
          <div className="github-state github-state-loading">
            <div className="github-spinner" aria-hidden="true"></div>
            <span>Loading repositories…</span>
          </div>
        )}

        {status === 'error' && (
          <div className="github-state github-state-error">
            <i className="fa-solid fa-triangle-exclamation" aria-hidden="true"></i>
            <p>{errorMsg}</p>
            <a
              className="github-retry"
              href={`https://github.com/${USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View profile on GitHub <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
            </a>
          </div>
        )}

        {status === 'ok' && (
          <>
            <div className="github-grid">
              {repos.map((repo) => (
                <a
                  key={repo.id}
                  className="github-card"
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="github-card-header">
                    <i className="fa-solid fa-folder-open" aria-hidden="true"></i>
                    <span className="github-card-name">{repo.name}</span>
                  </div>
                  <p className="github-card-desc">
                    {repo.description || 'No description provided.'}
                  </p>
                  <div className="github-card-footer">
                    {repo.language && (
                      <span className="github-card-meta">
                        <span
                          className="github-lang-dot"
                          style={{
                            backgroundColor:
                              LANG_COLORS[repo.language] || '#94a3b8',
                          }}
                          aria-hidden="true"
                        ></span>
                        {repo.language}
                      </span>
                    )}
                    <span className="github-card-meta">
                      <i className="fa-solid fa-star" aria-hidden="true"></i>
                      {repo.stargazers_count}
                    </span>
                    <span className="github-card-meta">
                      <i className="fa-solid fa-code-fork" aria-hidden="true"></i>
                      {repo.forks_count}
                    </span>
                    <span className="github-card-meta github-card-updated">
                      Updated {formatRelativeTime(repo.updated_at)}
                    </span>
                  </div>
                </a>
              ))}
            </div>
            <div className="github-footer">
              <a
                className="github-profile-link"
                href={`https://github.com/${USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github" aria-hidden="true"></i>
                See all on GitHub
                <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default GitHubProjects;