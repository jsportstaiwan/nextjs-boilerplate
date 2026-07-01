"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { articles, categoryMap } from "@/lib/content";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) return [];
    return articles.filter((article) =>
      `${article.title} ${article.category} ${article.excerpt}`.toLowerCase().includes(value)
    );
  }, [query]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="logo" href="/">
          <span className="logo-mark">JS</span>
          <span>J Sports</span>
        </Link>

        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="主選單">
          <Link href="/">首頁</Link>
          <Link href="/category/nba">{categoryMap.nba.nav}</Link>
          <Link href="/category/ncaa">{categoryMap.ncaa.nav}</Link>
          <Link href="/category/draft">{categoryMap.draft.nav}</Link>
          <Link href="/category/analysis">{categoryMap.analysis.nav}</Link>
          <Link href="/about">關於我們</Link>
          <Link href="/#newsletter">Newsletter</Link>
        </nav>

        <div className={`header-actions ${menuOpen ? "is-open" : ""}`}>
          <div className="search-box">
            <input
              className="search-input"
              type="search"
              placeholder="搜尋文章"
              aria-label="搜尋文章"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            {query && (
              <div className="search-results is-open">
                {results.length ? (
                  results.map((article) => (
                    <Link key={article.slug} href={`/articles/${article.slug}`}>
                      <strong>{article.category}</strong>
                      <br />
                      {article.title}
                    </Link>
                  ))
                ) : (
                  <span className="search-empty">找不到相關文章</span>
                )}
              </div>
            )}
          </div>
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-label="開啟選單"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
