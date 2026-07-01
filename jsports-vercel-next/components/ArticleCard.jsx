import Link from "next/link";

export default function ArticleCard({ article, featured = false }) {
  return (
    <Link className={`article-card ${featured ? "featured" : ""}`} href={`/articles/${article.slug}`}>
      <div className="card-image" data-label="Article cover placeholder" />
      <div className="card-body">
        <div className="meta-line">
          <span className="category-pill">{article.category}</span>
          <span>{article.date}</span>
        </div>
        <h3>{article.title}</h3>
        <p>{article.excerpt}</p>
        <span className="read-more">閱讀文章</span>
      </div>
    </Link>
  );
}
