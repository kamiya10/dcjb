import { Manrope, Noto_Sans_TC } from 'next/font/google';
import { SessionProvider } from 'next-auth/react';

import AppFooter from '@/components/app/footer';
import AppHeader from '@/components/app/header';
import Snowfall from '@/components/render/snowfall';
import { ThemeProvider } from '@/components/provider/theme-provider';

import type { Metadata } from 'next';

import '@/app/globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
});

const noto = Noto_Sans_TC({
  preload: false,
  display: 'swap',
});

export const metadata: Metadata = {
  title: '狄西機霸',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-hant" suppressHydrationWarning>
      <body
        className={`
          ${noto.className}
          ${manrope.className}
          select-none antialiased
        `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SessionProvider>
            <div className="flex w-svw flex-col items-center">
              <div className="container flex min-h-svh flex-col px-4">
                <AppHeader />
                {children}
              </div>
              <AppFooter />
              <Snowfall />
            </div>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
