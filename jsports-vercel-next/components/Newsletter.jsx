"use client";

import { useState } from "react";

export default function Newsletter() {
  const [message, setMessage] = useState("");

  return (
    <section className="section" id="newsletter">
      <div className="section-inner newsletter">
        <div className="newsletter-grid">
          <div>
            <p className="eyebrow">Newsletter</p>
            <h2>每週獲得最新 NBA、NCAA 與 NBA Draft 精選內容。</h2>
            <p>用一封乾淨、重點明確的信，整理最值得看的文章、球員與比賽脈絡。</p>
          </div>
          <form
            className="newsletter-form"
            onSubmit={(event) => {
              event.preventDefault();
              event.currentTarget.reset();
              setMessage("已收到，之後可串接正式 Newsletter 服務。");
            }}
          >
            <input type="email" placeholder="Email Address" aria-label="Email Address" required />
            <button className="button" type="submit">訂閱 Newsletter</button>
            <div className="form-message">{message}</div>
          </form>
        </div>
      </div>
    </section>
  );
}
