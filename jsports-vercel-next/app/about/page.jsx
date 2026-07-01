export const metadata = {
  title: "關於我們"
};

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="page-hero-inner">
          <p className="eyebrow">About J Sports</p>
          <h1>我們想打造最值得信任的中文北美籃球媒體之一。</h1>
          <p>J Sports 是由台灣兩個籃球 Instagram 社群 JNC Basketball 與 J Hoop Analytics 共同創立的媒體平台。</p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner about-grid">
          <div className="about-panel">
            <p className="eyebrow dark">Who We Are</p>
            <h2>不是個人部落格，而是以專業內容為核心的籃球出版品牌。</h2>
            <p>
              我們關注 NBA、NCAA Basketball、NBA Draft、職業籃球分析、prospect scouting 與深度專題。
              目標是把北美籃球複雜的球員、球隊與聯盟脈絡，用清楚、可信、現代的中文內容呈現。
            </p>
          </div>
          <div className="image-placeholder" data-label="Team image placeholder" />
        </div>
      </section>

      <section className="section alt">
        <div className="section-inner">
          <div className="section-head">
            <div>
              <p className="eyebrow dark">Our Story</p>
              <h2 className="section-title">從兩個 IG 社群，延伸成一個完整媒體平台。</h2>
            </div>
            <p className="section-note">
              JNC Basketball 帶來 prospect scouting 與球員觀察；J Hoop Analytics 帶來數據、戰術與 NBA/NCAA 脈絡。
              J Sports 讓兩條內容線整合在同一個品牌底下。
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner value-grid">
          <article className="value-card"><h3>Mission</h3><p>提供高品質、可信且有觀點的中文北美籃球內容。</p></article>
          <article className="value-card"><h3>Vision</h3><p>成為華語圈討論 NBA、NCAA 與 NBA Draft 時的重要參考來源。</p></article>
          <article className="value-card"><h3>Values</h3><p>尊重比賽脈絡、重視證據、避免空泛結論，並持續提升分析品質。</p></article>
        </div>
      </section>

      <section className="section alt">
        <div className="section-inner">
          <div className="section-head">
            <div>
              <p className="eyebrow dark">Future Team</p>
              <h2 className="section-title">未來團隊成員區</h2>
            </div>
          </div>
          <div className="team-grid">
            <article className="team-slot"><h3>JNC Basketball</h3><p>High school prospects、grassroots scouting、球員發展。</p></article>
            <article className="team-slot"><h3>J Hoop Analytics</h3><p>NCAA、NBA、Draft translation、film + numbers。</p></article>
            <article className="team-slot"><h3>未來作者</h3><p>這裡可以放新增作者、攝影、Podcast 主持或資料庫編輯。</p></article>
          </div>
        </div>
      </section>
    </main>
  );
}
