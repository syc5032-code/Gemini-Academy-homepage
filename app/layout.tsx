import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gemini Academy | JA Korea",
  description: "Gemini Academy - AI 교육을 위한 젬미니 아카데미",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <meta name="viewport" content="width=1280" />
      </head>
      <body>{children}</body>
    </html>
  );
}
