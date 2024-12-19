'use client';

import { Computer, Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

export default function AppFooter() {
  const { setTheme, theme, themes } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <footer className={`
      mt-12 flex w-full flex-col items-center justify-between border-t
      bg-muted/40 px-4 py-4 text-muted-foreground
      lg:px-16
      md:flex-row md:px-8 md:py-8
      xl:px-32
    `}
    >
      <div className={`
        flex flex-col items-center gap-6
        md:flex-row
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
            <Button variant="outline" size="icon">
              {
                {
                  dark: <Moon />,
                  light: <Sun />,
                  system: <Computer />,
                }[theme ?? 'system']
              }
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {...themes.map((t) => (
              <DropdownMenuItem
                key={t}
                onClick={() => setTheme(t)}
              >
                {t}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </footer>
  );
}
