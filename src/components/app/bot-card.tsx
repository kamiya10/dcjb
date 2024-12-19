import { Bot } from 'lucide-react';
import Link from 'next/link';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CategoryIcons } from '@/lib/constants';

import type { DiscordBotData } from '@/app/api/_lib/apitypes';

type Props = Readonly<{
  bot: DiscordBotData;
}>;

export default function BotCard({ bot }: Props) {
  const Icon = CategoryIcons[bot.category] ?? Bot;

  return (
    <Link href={`/bots/${bot.id}`}>
      <Card
        className={`
          group flex h-full flex-col border-2
          transition-[border_background-color_transform]
          dark:hover:bg-primary/[.16]
          hover:border-primary hover:bg-primary/[.08]
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
            <div className="flex flex-col gap-0.5">
              <div className="text-lg font-bold">
                {bot.title}
              </div>
              <div className={`
                flex items-center gap-1 text-sm font-normal
                text-muted-foreground
              `}
              >
                <Icon size={16} />
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
              <Badge
                variant="outline"
                className="group-hover:border-primary/60"
              >
                {tag}
              </Badge>
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
