export const categoryMap = {
  nba: {
    title: "NBA 新聞",
    nav: "NBA",
    category: "NBA",
    eyebrow: "NBA Coverage",
    intro: "從即時新聞到深度脈絡，追蹤聯盟交易、自由市場、比賽分析、獎項討論與球隊排名。",
    topics: ["Breaking News", "Trades", "Free Agency", "Game Analysis", "Awards", "Power Rankings"]
  },
  ncaa: {
    title: "NCAA",
    nav: "NCAA",
    category: "NCAA",
    eyebrow: "College Basketball",
    intro: "追蹤大學籃球、招募動態、Top Prospects、錦標賽與球員發展，理解年輕球員如何準備進入下一個層級。",
    topics: ["College basketball", "Recruiting", "Top Prospects", "Tournament", "Player Development"]
  },
  draft: {
    title: "NBA Draft",
    nav: "NBA Draft",
    category: "NBA Draft",
    eyebrow: "Prospect Scouting",
    intro: "用球探報告、Big Board、Mock Draft 與排名更新，追蹤每位新秀的優勢、風險與 NBA 角色想像。",
    topics: ["Scouting Reports", "Mock Drafts", "Big Boards", "Prospect Rankings", "Draft News", "International Prospects"]
  },
  analysis: {
    title: "專業分析",
    nav: "專業分析",
    category: "專業分析",
    eyebrow: "Deep Analysis",
    intro: "用影像、數據、戰術與歷史脈絡，拆解比賽表面之外真正影響勝負與球員發展的細節。",
    topics: ["Film Breakdown", "Advanced Statistics", "Tactical Analysis", "Opinion Columns", "Historical Analysis", "Player Development"]
  }
};

export const articles = [
  {
    slug: "draft-big-board-2026",
    title: "2026 NBA Draft 初版 Big Board：創造力與防守位置感",
    category: "NBA Draft",
    categorySlug: "draft",
    author: "J Sports Staff",
    date: "2026-07-01",
    readingTime: "8 分鐘",
    excerpt: "從持球創造、外線投射、換防彈性與角色轉譯，建立第一版選秀觀察框架。",
    featured: true,
    body: [
      "這是第一篇示範文章。你可以之後把這段內容換成真正的 scouting report、mock draft、big board 更新或深度分析。",
      "J Sports 的文章版型以閱讀體驗為核心：標題清楚、資訊層級明確、段落留白充足，讓手機讀者也能舒服閱讀長文。",
      "選秀分析不只看 highlight，也要理解球員在不同強度、不同任務下是否能維持效率。"
    ]
  },
  {
    slug: "ncaa-guard-pnr",
    title: "NCAA 後衛如何用擋拆閱讀提升選秀價值",
    category: "NCAA",
    categorySlug: "ncaa",
    author: "J Hoop Analytics",
    date: "2026-07-01",
    readingTime: "6 分鐘",
    excerpt: "觀察傳球窗口、節奏控制與弱側判斷，理解數據之外的比賽掌控力。",
    featured: true,
    body: [
      "NCAA 後衛的選秀價值，往往不只來自得分數字，而是他能不能穩定讀懂第二層防守。",
      "擋拆中的節奏、傳球角度、弱側掃描與失誤品質，都會影響球隊如何想像他在 NBA 的角色。"
    ]
  },
  {
    slug: "young-core-development-context",
    title: "年輕核心的養成環境：空間、角色與決策品質",
    category: "NBA",
    categorySlug: "nba",
    author: "J Sports Staff",
    date: "2026-07-01",
    readingTime: "5 分鐘",
    excerpt: "球員發展不只看天賦，也要看球隊如何設計犯錯空間。",
    featured: true,
    body: [
      "年輕球員的成長曲線，常常取決於球隊提供的 spacing、球權責任與容錯空間。",
      "當角色設計清楚，球員更容易把技能轉成穩定決策，而不是只在零散回合裡展現天賦。"
    ]
  },
  {
    slug: "weak-side-rotation-defense",
    title: "弱側輪轉如何改變一支球隊的防守上限",
    category: "專業分析",
    categorySlug: "analysis",
    author: "J Hoop Analytics",
    date: "2026-07-01",
    readingTime: "7 分鐘",
    excerpt: "從 film breakdown 到進階數據，拆解團隊防守的細節與風險。",
    featured: false,
    body: [
      "防守不是只有單防能力。弱側輪轉、提前站位、tag roller 與 closeout 選擇，才是決定團隊防守穩定度的核心。",
      "好的防守系統會讓球員知道該冒什麼風險，也知道什麼時候該保守。"
    ]
  }
];

export function getFeaturedArticles() {
  return articles.filter((article) => article.featured).slice(0, 3);
}

export function getLatestArticles() {
  return [...articles].sort((a, b) => b.date.localeCompare(a.date));
}

export function getArticle(slug) {
  return articles.find((article) => article.slug === slug);
}

export function getArticlesByCategory(categorySlug) {
  return articles.filter((article) => article.categorySlug === categorySlug);
}
