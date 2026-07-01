import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div>
            <h3>J Sports</h3>
            <p>聚焦北美籃球的繁體中文媒體，提供新聞、球探、分析與長篇專題。</p>
          </div>
          <div>
            <h3>About</h3>
            <Link href="/about">關於我們</Link>
            <Link href="/#newsletter">Newsletter</Link>
          </div>
          <div>
            <h3>Categories</h3>
            <Link href="/category/nba">NBA</Link>
            <Link href="/category/ncaa">NCAA</Link>
            <Link href="/category/draft">NBA Draft</Link>
            <Link href="/category/analysis">專業分析</Link>
          </div>
          <div>
            <h3>Instagram</h3>
            <a href="https://www.instagram.com/jnc_bball/" target="_blank" rel="noreferrer">JNC Basketball</a>
            <a href="https://www.instagram.com/j_hoopsanalytics/" target="_blank" rel="noreferrer">J Hoop Analytics</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 J Sports. All rights reserved.</span>
          <span>Preferred domain: jsports.com</span>
        </div>
      </div>
    </footer>
  );
}
