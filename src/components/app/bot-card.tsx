import { Glow } from '@codaworks/react-glow';
import Link from 'next/link';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

import type { DiscordBotData } from '@/app/api/_lib/apitypes';

type Props = Readonly<{
  bot: DiscordBotData;
}>;

export default function BotCard({ bot }: Props) {
  return (
    <Link href={`/bots/${bot.id}`}>
      <Card
        className={`
          group flex h-full flex-col border-2
          transition-[border_background-color_transform]
          dark:hover:bg-primary/[.16]
          glow:border-primary glow:bg-primary/[.08]
          hover:border-primary/40 hover:bg-primary/[.08]
        `}
      >
        <CardHeader>
          <CardTitle className="flex items-center gap-4">
            <Avatar className="size-12">
              <AvatarImage src={bot.avatarURL} />
              <AvatarFallback>
                {bot.title.slice(0, 2)}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <div className="text-lg">
                {bot.title}
              </div>
              <div className="text-sm font-normal text-muted-foreground">
                {bot.category}
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1">
          {bot.shortDescription}
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {bot.tags.map((tag) => (
              <Glow key={tag}>
                <Badge
                  variant="outline"
                  className={`
                    glow:border-primary glow:bg-primary/[.08]
                    group-hover:border-muted-foreground/40
                  `}
                >
                  {tag}
                </Badge>
              </Glow>
            ))}
          </div>
          <Button onClick={() => window.open(bot.inviteURL, '_blank')}>
            邀請
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
