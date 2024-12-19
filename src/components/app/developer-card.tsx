import { LinkIcon, Rss } from 'lucide-react';
import { SiDiscord, SiGithub, SiX } from '@icons-pack/react-simple-icons';
import Link from 'next/link';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

type Props = Readonly<{
  name: string;
  nickname: string;
  avatar: string;
  department: string;
  links: {
    label: string;
    url: string;
  }[];
  job: string;
}>;

const Icons = {
  GitHub: <SiGithub size={24} />,
  X: <SiX size={24} />,
  Discord: <SiDiscord size={24} />,
  部落格: <Rss size={24} />,
} as Record<string, React.ReactNode>;

export function DeveloperCard({ name, nickname, avatar, department, links, job }: Props) {
  return (
    <Card className="relative mt-16">
      <CardHeader className="flex flex-col items-center">
        <div className={`
          absolute -top-14 rounded-full border-t border-border bg-card p-2
        `}
        >
          <Avatar className="size-24">
            <AvatarImage src={avatar} />
            <AvatarFallback>{name.slice(0, 1)}</AvatarFallback>
          </Avatar>
        </div>
        <CardTitle className="pt-10 text-xl">{name}</CardTitle>
        <CardDescription className="flex flex-col items-center">
          <div>{nickname}</div>
          <div>{department}</div>
          <div>{job}</div>
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-2 text-muted-foreground">
          {links.map((link) => (
            <Link key={link.label} href={link.url} target="_blank">
              {Icons[link.label] ?? <LinkIcon />}
            </Link>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
