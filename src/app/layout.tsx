import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SideNav } from "@/components/side-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SUPREME LAUNCH // AI Token Platform",
  description: "Decentralized AI agent token launcher",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-[#0a0a0a] text-[#00ff41]`}>
        <div className="flex">
          <SideNav />
          <main className="flex-1 min-h-screen scanlines">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
