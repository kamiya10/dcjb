import Image from 'next/image';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import InviteButton from '@/components/app/invite-button';
import Markdown from '@/components/render/markdown';

import type { DiscordBotData } from '@/app/api/_lib/apitypes';

type Props = Readonly<{
  params: Promise<{ id: string }>;
}>;

export default async function Page({ params }: Props) {
  const id = (await params).id;
  const response = await fetch(`http://localhost:3000/api/bot/${id}`);

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}: ${await response.text()}`);
  }

  const data = await response.json() as DiscordBotData;

  return (
    <div className="mt-20 flex flex-col gap-8">
      <Image
        src={data.bannerURL ?? data.avatarURL}
        className={`
          absolute left-0 top-0 -z-10 h-96 w-svw
          data-[type=avatar]:-translate-y-1/2
          data-[type=banner]:-translate-y-16
          md:h-auto
        `}
        width={data.bannerURL ? 1545 : 1024}
        height={data.bannerURL ? 545 : 1024}
        data-type={data.bannerURL ? 'banner' : 'avatar'}
        style={{
          maskImage: 'linear-gradient(to bottom, hsl(0 0 100 / 75%) 0%, hsl(0 0 100 / 24%) 60%, transparent 90%)',
          filter: `url('#blur')`,
        }}
        alt=""
      />
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center gap-6">
          <Avatar className="size-24 drop-shadow">
            <AvatarImage src={data.avatarURL} />
            <AvatarFallback>{data.title.slice(0, 2)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1 drop-shadow">
            <h2 className="text-2xl font-bold">{data.title}</h2>
            <h3 className="text-muted-foreground">{data.category}</h3>
          </div>
        </div>
        <div>
          <InviteButton url={data.inviteURL} />
        </div>
      </div>
      <div className={`
        flex flex-col gap-8
        md:grid md:grid-cols-[4fr_1fr]
      `}
      >
        <div>
          <Tabs defaultValue="description">
            <TabsList>
              <TabsTrigger value="description">詳細</TabsTrigger>
              <TabsTrigger value="announcement">公告</TabsTrigger>
              <TabsTrigger value="comment">留言</TabsTrigger>
            </TabsList>

            <TabsContent value="description" asChild>
              <div className="group/md">
                <Markdown>{data.description}</Markdown>
              </div>
            </TabsContent>

            <TabsContent value="announcement" asChild>
            </TabsContent>

            <TabsContent value="comment" asChild>
            </TabsContent>
          </Tabs>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="text-xl font-bold">作者</div>
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src={data.owner.avatarURL} />
                <AvatarFallback>{data.owner.name.slice(0, 2)}</AvatarFallback>
              </Avatar>
              <div>{data.owner.name}</div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="text-xl font-bold">標籤</div>
            <div className="flex flex-wrap items-center gap-2">
              {data.tags.map((tag) => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
          </div>

        </div>
      </div>
      <svg className="absolute size-0">
        <filter id="blur">
          <feGaussianBlur stdDeviation="16" />
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 9 0"
          />
          <feComposite
            in2="SourceGraphic"
            operator="in"
          />
        </filter>
      </svg>
    </div>
  );
}