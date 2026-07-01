import Link from "next/link";
import { notFound } from "next/navigation";
import { categoryMap, getArticlesByCategory } from "@/lib/content";

export function generateStaticParams() {
  return Object.keys(categoryMap).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const category = categoryMap[params.slug];
  return { title: category ? category.title : "分類" };
}

export default function CategoryPage({ params }) {
  const category = categoryMap[params.slug];
  if (!category) notFound();

  const articles = getArticlesByCategory(params.slug);

  return (
    <main>
      <section className="page-hero">
        <div className="page-hero-inner">
          <p className="eyebrow">{category.eyebrow}</p>
          <h1>{category.title}</h1>
          <p>{category.intro}</p>
        </div>
      </section>

      <section className="section alt">
        <div className="section-inner topic-layout">
          <aside className="topic-nav">
            <h2>{category.title} Topics</h2>
            {category.topics.map((topic, index) => (
              <a href={`#topic-${index}`} key={topic}>{topic}</a>
            ))}
          </aside>
          <div>
            <div className="topic-content">
              {category.topics.map((topic, index) => (
                <article className="topic-block" id={`topic-${index}`} key={topic}>
                  <h2>{topic}</h2>
                  <p>這裡會收錄 J Sports 關於 {topic} 的新聞、球探觀察、深度專題與分析文章。</p>
                </article>
              ))}
            </div>
            <div className="category-feed news-list">
              {articles.length ? (
                articles.map((article) => (
                  <Link className="news-item" key={article.slug} href={`/articles/${article.slug}`}>
                    <div className="thumb" />
                    <div>
                      <div className="meta-line"><span className="category-pill">{article.category}</span><span>{article.readingTime}</span></div>
                      <h3>{article.title}</h3>
                      <p>{article.excerpt}</p>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="sidebar-card"><h3>尚無文章</h3><p>之後新增 {category.title} 分類文章後，會自動出現在這裡。</p></div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
