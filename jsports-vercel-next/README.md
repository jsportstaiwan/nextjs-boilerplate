# J Sports Vercel / Next.js 專案

這個資料夾是給 Vercel 用的正式版本。

## 你在 Vercel 要選什麼

- 登入方式：Continue with GitHub
- Framework Preset：Next.js
- Root Directory：這個專案資料夾，也就是 `jsports-vercel-next`
- Build Command：不用改，Vercel 會自動用 `next build`
- Output Directory：不用填

## 本機測試

如果你要在電腦上預覽：

```powershell
npm install
npm run dev
```

然後打開：

```text
http://localhost:3000
```

## 修改文章

文章資料目前在：

```text
lib/content.js
```

之後你可以叫 Codex 幫你：

- 新增文章
- 改標題
- 改分類
- 換封面圖 placeholder
- 增加作者頁
- 接正式 CMS 後台

## 網域

你想要的主網域是：

```text
jsports.com
```

上 Vercel 後，到 Project Settings -> Domains 加入網域。你需要先透過網域商買到這個網域，或使用以 `jsports` 開頭的替代網域。
