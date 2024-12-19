'use client';

import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import ChristmasHat from '@/assets/christmas.png';
import { Skeleton } from '@/components/ui/skeleton';

function Branding() {
  return (
    <Link href="/" className="relative">
      <h1 className="text-xl font-bold">狄西機霸</h1>
      <Image
        src={ChristmasHat}
        alt="聖誕帽"
        height={32}
        width={32}
        className="absolute -right-4 -top-3 rotate-12"
        draggable={false}
      />
    </Link>
  );
}

function LoginButton() {
  const login = () => void signIn('discord');

  return <Button variant="outline" onClick={login}>登入</Button>;
}

export default function AppHeader() {
  const session = useSession();

  return (
    <header className={`
      container flex w-full items-center justify-between self-center py-4
    `}
    >
      <div className="flex gap-4">
        <Branding />
      </div>
      <div className="flex gap-2">
        <div className="grid min-h-10 min-w-10 items-center justify-center">

          {session.status == 'unauthenticated' && <LoginButton />}
          {session.status == 'authenticated' && (
            <Link href="/dashboard">
              <span className="flex items-center gap-2">
                <Avatar className="size-8">
                  <AvatarImage src={session.data.user!.image!} />
                  <AvatarFallback>{session.data.user?.name?.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <span>{session.data.user?.name}</span>
              </span>
            </Link>
          )}
          {session.status == 'loading' && (
            <span className="flex items-center gap-2">
              <Skeleton className="size-8 rounded-full" />
              <Skeleton className="h-5 w-16 rounded-lg" />
            </span>
          )}
        </div>
      </div>
    </header>
  );
}
