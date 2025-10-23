import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "LogLense – AI-Powered Log Analysis Tool",
  description:
    "LogLense helps developers debug smarter using AI. Analyze, summarize, and visualize logs with ease.",
  keywords: [
    "AI log analyzer",
    "log visualization",
    "debugging tools",
    "Next.js AI project",
    "developer tools",
  ],

  openGraph: {
    title: "LogLense – AI-Powered Log Analysis Tool",
    description:
      "Analyze and visualize logs intelligently with AI using LogLense.",
    url: "https://yourwebsite.com",
    siteName: "LogLense",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LogLense Dashboard Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "LogLense – AI-Powered Log Analysis Tool",
    description:
      "Analyze, summarize, and visualize logs with AI using LogLense.",
    creator: "@yourhandle",
    images: ["https://yourwebsite.com/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#F8FAFC] antialiased`}
      >
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
