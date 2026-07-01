import { notFound } from "next/navigation";
import ArticleCard from "@/components/ArticleCard";
import { articles, getArticle } from "@/lib/content";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }) {
  const article = getArticle(params.slug);
  return { title: article ? article.title : "文章" };
}

export default function ArticlePage({ params }) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  const related = articles.filter((item) => item.slug !== article.slug).slice(0, 3);

  return (
    <main className="article-page">
      <div className="article-shell">
        <p className="eyebrow dark">{article.category}</p>
        <h1 className="article-title">{article.title}</h1>
        <div className="article-meta">
          <span>作者：{article.author}</span>
          <span>發布日期：{article.date}</span>
          <span>分類：{article.category}</span>
          <span>預估閱讀時間：{article.readingTime}</span>
        </div>
        <div className="placeholder" data-label="Article hero image placeholder" />
        <article className="article-content">
          {article.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <div className="share-row">
            <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}`} target="_blank" rel="noreferrer">分享至 X</a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">分享至 Facebook</a>
            <span>複製連結</span>
          </div>
          <h2>相關文章</h2>
          <div className="related-grid">
            {related.map((item) => <ArticleCard key={item.slug} article={item} />)}
          </div>
        </article>
      </div>
    </main>
  );
}
