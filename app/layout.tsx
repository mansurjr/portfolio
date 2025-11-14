  import "./styles/globals.css";
  import type { Metadata } from "next";
  import { Inter } from "next/font/google";
  import incognito from "./font/font";
  import Navbar from "./components/global/Navbar";
  import Footer from "./components/global/Footer";
  import { Providers } from "./providers";
  import { Analytics } from '@vercel/analytics/react';

  const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--inter",
  });

  const options = {
    title: "Mansurbek Atayev | Fullstack Developer",
    description: "Mansurbek Atayev is a Fullstack Developer who is passionate about building cool services and contributing open source communities",
    url: "https://atayev.uz",
    ogImage: "https://raw.githubusercontent.com/diyorbekrustamjonov/xattab.uz/main/public/images/illustrations/home.png",
  };

  export const metadata: Metadata = {
    title: options.title,
    metadataBase: new URL(options.url),
    description: options.description,
    openGraph: {
      title: options.title,
      url: options.url,
      siteName: "atayev.uz",
      locale: "en-US",
      type: "website",
      description: options.description,
      images: options.ogImage,
    },
    alternates: {
      canonical: options.url,
    },
    themeColor: "#33E092",
  };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${incognito.variable} ${inter.className} dark:bg-zinc-900 bg-white dark:text-white text-zinc-700 min-h-screen flex flex-col`}
      >
        <Providers>
          <Navbar />

          {/* Content grows and pushes footer down */}
          <main className="flex-1">
            {children}
          </main>

          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
