import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { LuFile } from "react-icons/lu";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mo Alaa | Portfolio",
  description:
    "Personal portfolio showcasing work, case studies, and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#050509] text-neutral-50 antialiased min-h-screen">
        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
            <a href="#hero" className="flex items-center rotate-y-180">
              <Image
                src="/MA.png"
                alt="Mo Alaa logo"
                width={32}
                height={32}
                className="h-8 w-8"
                priority
              />
            </a>
            <nav className="flex items-center gap-6 text-sm text-neutral-300">
              <a href="#hero" className="transition-colors hover:text-white">
                Home
              </a>
              <a href="#about" className="transition-colors hover:text-white">
                About
              </a>
              <a href="#work" className="transition-colors hover:text-white">
                Work
              </a>
              <a href="#connect" className="transition-colors hover:text-white">
                Connect
              </a>
              <a
                href="https://drive.google.com/file/d/1qc8k0zn85WEjzv04cXFRrAI_Y3xYRI1a/view?usp=sharing"
                target="_blank"
                className="transition-colors text-black hover:bg-gray-800 hover:text-emerald-300 bg-white rounded-3xl px-4 py-2 flex items-center gap-1"
              >
                <p>
                  <LuFile className="size-5" />
                </p>
                <p>Resume</p>
              </a>
            </nav>
          </div>
        </header>

        <main className="mx-auto pb-16">{children}</main>

        <footer className="border-t border-white/10">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6 text-xs text-neutral-500">
            <span>© 2026 Mo Alaa. All rights reserved.</span>
            <span className="hidden sm:inline">
              Crafted with Next.js &amp; Tailwind CSS
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
