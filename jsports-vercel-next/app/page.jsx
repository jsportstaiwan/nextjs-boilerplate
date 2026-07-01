import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import Newsletter from "@/components/Newsletter";
import { categoryMap, getFeaturedArticles, getLatestArticles } from "@/lib/content";

export default function HomePage() {
  const featured = getFeaturedArticles();
  const latest = getLatestArticles().slice(0, 6);

  return (
    <main>
      <section className="hero">
        <div className="hero-inner">
          <div>
            <p className="eyebrow">North American Basketball Media</p>
            <h1>聚焦北美籃球，探索比賽背後的故事。</h1>
            <p className="hero-copy">
              J Sports 由 JNC Basketball 與 J Hoop Analytics 共同創立，致力於提供高品質的 NBA、NCAA、NBA Draft、球探報告與深度專題。
            </p>
            <div className="hero-actions">
              <Link className="button" href="#featured">閱讀精選文章</Link>
              <Link className="button ghost" href="#newsletter">訂閱 Newsletter</Link>
            </div>
          </div>
          <div className="hero-panel">
            <div className="image-placeholder" data-label="Hero image placeholder" />
            <div className="stat-strip">
              <div className="stat"><strong>NBA</strong><span>新聞與分析</span></div>
              <div className="stat"><strong>NCAA</strong><span>球員發展</span></div>
              <div className="stat"><strong>Draft</strong><span>球探與排行</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="featured">
        <div className="section-inner">
          <div className="section-head">
            <div>
              <p className="eyebrow dark">Featured Articles</p>
              <h2 className="section-title">精選深度文章</h2>
            </div>
            <p className="section-note">以職業媒體標準整理球員、球隊、數據與影像脈絡，讓讀者快速理解每個故事真正重要的地方。</p>
          </div>
          <div className="article-grid">
            {featured.map((article, index) => (
              <ArticleCard key={article.slug} article={article} featured={index === 0} />
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="section-inner latest-layout">
          <div>
            <div className="section-head">
              <div>
                <p className="eyebrow dark">Latest News</p>
                <h2 className="section-title">最新內容</h2>
              </div>
            </div>
            <div className="news-list">
              {latest.map((article) => (
                <Link className="news-item" key={article.slug} href={`/articles/${article.slug}`}>
                  <div className="thumb" />
                  <div>
                    <div className="meta-line"><span className="category-pill">{article.category}</span><span>{article.readingTime}</span></div>
                    <h3>{article.title}</h3>
                    <p>{article.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <aside className="sidebar-card">
            <h3>本週觀察清單</h3>
            <ul className="trend-list">
              <li>NBA Draft：大側翼創造力與防守彈性</li>
              <li>NCAA：高使用率後衛的失誤品質</li>
              <li>NBA：年輕球隊的 spacing discipline</li>
              <li>分析：投籃選擇與陣容結構</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-head">
            <div>
              <p className="eyebrow dark">Categories</p>
              <h2 className="section-title">核心內容分類</h2>
            </div>
          </div>
          <div className="category-grid">
            {Object.entries(categoryMap).map(([slug, category]) => (
              <Link className="category-card" href={`/category/${slug}`} key={slug}>
                <div className="category-icon">🏀</div>
                <h3>{category.title}</h3>
                <p>{category.intro}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </main>
  );
}
