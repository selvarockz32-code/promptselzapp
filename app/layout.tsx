import type { Metadata } from "next";
import "./globals.css";

const description =
  "Discover ready-made AI prompts for creativity, productivity, and learning. Copy, share, and save prompts for offline use with PromptSelz on Android.";

export const metadata: Metadata = {
  applicationName: "PromptSelz",
  title: {
    default: "PromptSelz – AI Prompt",
    template: "%s | PromptSelz",
  },
  description,
  keywords: [
    "PromptSelz",
    "AI prompts",
    "Android prompt app",
    "creative prompts",
    "productivity prompts",
  ],
  openGraph: {
    title: "PromptSelz – AI Prompt",
    description,
    siteName: "PromptSelz",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "PromptSelz – AI Prompt",
    description,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/promptselz-icon.jpg", type: "image/jpeg", sizes: "480x480" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
