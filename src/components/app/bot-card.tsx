import { Bot, Sparkles } from 'lucide-react';
import Link from 'next/link';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CategoryIcons } from '@/lib/constants';

import type { DiscordBotData } from '@/app/api/_lib/apitypes';

type Props = Readonly<{
  bot: DiscordBotData;
  premium?: boolean;
}>;

export default function BotCard({ bot, premium = false }: Props) {
  const Icon = CategoryIcons[bot.category] ?? Bot;

  return (
    <Link href={`/bots/${bot.id}`}>
      <Card
        className={`
          group flex h-full flex-col border-2
          transition-[border_background-color_transform] data-premium
          dark:hover:bg-primary/[.16]
          dark:data-[premium]:hover:bg-emerald-600/[.20]
          data-[premium]:border-emerald-600 data-[premium]:bg-emerald-600/[.16]
          data-[premium]:hover:border-emerald-600
          data-[premium]:hover:bg-emerald-600/[.20]
          hover:border-primary hover:bg-primary/[.08]
        `}
        data-premium={premium ? '' : null}
      >
        <CardHeader>
          <CardTitle className="flex items-center gap-4">
            <Avatar className="size-12">
              <AvatarImage src={bot.avatarURL} />
              <AvatarFallback>
                {bot.title.slice(0, 2)}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-1 flex-col gap-0.5">
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
            {premium && (
              <Badge
                variant="premium-outline"
                className="flex items-center gap-1"
              >
                <Sparkles size={12} />
                <span>精選</span>
              </Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1">
          {bot.shortDescription}
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {bot.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className={`
                  group-data-[premium]:border-emerald-600/20
                  group-data-[premium]:group-hover:border-emerald-600/60
                  group-hover:border-primary/60
                `}
              >
                {tag}
              </Badge>
            ))}
          </div>
          <Button
            variant={premium ? 'premium' : 'default'}
            onClick={() => window.open(bot.inviteURL, '_blank')}
          >
            邀請
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
