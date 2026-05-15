import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://gemini-academy.vercel.app"),
  title: "제미나이 아카데미 | JA Korea",
  description: "AI 교육을 위한 제미나이 아카데미",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "제미나이 아카데미 | JA Korea",
    description: "AI 교육을 위한 제미나이 아카데미",
    url: "/",
    siteName: "제미나이 아카데미 | JA Korea",
    images: [
      {
        url: "/og-ja-korea.png",
        width: 1200,
        height: 630,
        alt: "JA Korea",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "제미나이 아카데미 | JA Korea",
    description: "AI 교육을 위한 제미나이 아카데미",
    images: ["/og-ja-korea.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
