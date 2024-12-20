'use client';

import { Computer, Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

const ThemeIcons = {
  dark: <Moon />,
  light: <Sun />,
  system: <Computer />,
} as Record<string, React.ReactNode>;

const ThemeNames = {
  dark: '深色',
  light: '淺色',
  system: '系統',
} as Record<string, string>;

export default function AppFooter() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <footer className={`
      mt-12 flex w-full flex-col items-center justify-between gap-2 border-t
      bg-muted/40 px-4 py-6 text-muted-foreground
      lg:px-16
      md:flex-row md:px-8 md:py-8
      xl:px-32
    `}
    >
      <div className={`
        flex flex-col items-center gap-3
        md:flex-row md:gap-8
      `}
      >
        <span>狄西機霸 &copy; 2024</span>
        <div className="flex items-center gap-3">
          <Link href="/about">關於</Link>
          <Link href="/terms">服務條款</Link>
          <Link href="/privacy">隱私權聲明</Link>
        </div>
      </div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              {ThemeIcons[theme ?? 'system']}
              {ThemeNames[theme ?? 'system']}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setTheme('light')}>
              <Sun />
              <span>淺色</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('dark')}>
              <Moon />
              <span>深色</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('system')}>
              <Computer />
              <span>系統</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </footer>
  );
}
