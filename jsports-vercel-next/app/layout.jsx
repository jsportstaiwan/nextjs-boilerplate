import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    default: "J Sports | 聚焦北美籃球的中文媒體",
    template: "%s | J Sports"
  },
  description: "J Sports 是聚焦 NBA、NCAA、NBA Draft、球探報告與專業分析的繁體中文籃球媒體。",
  metadataBase: new URL("https://jsports.com")
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
