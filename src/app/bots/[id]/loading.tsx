import { Plus } from 'lucide-react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="mt-20 flex flex-col gap-8">
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center gap-6">
          <Skeleton className="size-24 rounded-full" />
          <div className="flex flex-col gap-2">
            <Skeleton className="h-8 w-48 rounded-full" />
            <Skeleton className="h-4 w-20 rounded-full" />
          </div>
        </div>
        <div>
          <Button className="flex gap-2" disabled>
            <Plus />
            <span>邀請</span>
          </Button>
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
              <div className="flex flex-col gap-4">
                <Skeleton className="h-12 w-[24rem] rounded-full" />
                <Skeleton className="my-4 h-8 w-[20rem] rounded-full" />
                <Skeleton className="h-6 w-[6rem] rounded-full" />
                <Skeleton className="h-6 w-[28rem] rounded-full" />
                <Skeleton className="h-6 w-[18rem] rounded-full" />
                <Skeleton className="h-6 w-[16rem] rounded-full" />
                <Skeleton className="my-4 h-8 w-[12rem] rounded-full" />
                <Skeleton className="h-6 w-[14rem] rounded-full" />
                <Skeleton className="h-6 w-[8rem] rounded-full" />
                <Skeleton className="aspect-video h-16 rounded-lg" />
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
              <Skeleton className="size-10 rounded-full" />
              <Skeleton className="h-4 w-12 rounded-full" />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="text-xl font-bold">標籤</div>
            <div className="flex flex-wrap items-center gap-2">
              <Skeleton className="h-4 w-16 rounded-full" />
              <Skeleton className="h-4 w-10 rounded-full" />
              <Skeleton className="h-4 w-12 rounded-full" />
              <Skeleton className="h-4 w-8 rounded-full" />
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
