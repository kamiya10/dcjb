'use client';

import { Glow, GlowCapture } from '@codaworks/react-glow';
import { Info, Music2, Wrench } from 'lucide-react';
import { useEffect, useState } from 'react';

import BotCard from '@/components/app/bot-card';
import { Input } from '@/components/ui/input';
import { RadioGroup } from '@/components/ui/radio-group';
import { RadioTile } from '@/components/ui/radio-tile';
import { Skeleton } from '@/components/ui/skeleton';
import { useBotStore } from '@/store/bots';

import type { MouseEvent } from 'react';

const Icons = {
  工具: <Wrench size={18} />,
  資訊: <Info size={18} />,
  音樂: <Music2 size={18} />,
} as Record<string, React.ReactNode>;

export default function Home() {
  const botStore = useBotStore();
  const [category, setCategory] = useState('');
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    void (async () => {
      try {
        await botStore.fetch();
      }
      catch (error) {
        if (error instanceof Error) {
          setError(error);
        }
      }
      finally {
        setLoading(false);
      }
    })();
  }, []);

  const selectCategory = (ev: MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (category == ev.currentTarget.value) {
      setCategory('');
    }
    else {
      setCategory(ev.currentTarget.value);
    }
  };

  const filtered = botStore.bots.filter((v) => !category || v.category == category);

  return (
    <GlowCapture size={256}>
      <div className="flex flex-col items-center">
        <main className={`
          container flex gap-4
          md:grid md:grid-cols-[1fr_4fr]
        `}
        >
          <div className="flex flex-col gap-8 pt-4">
            <div className="flex flex-col gap-2">
              <div>搜尋</div>
              <Input placeholder="關鍵字" />
            </div>
            <RadioGroup className="flex flex-col gap-2" value={category}>
              <div>類別</div>
              {botStore.bots
                .map((v) => v.category)
                .filter((v, i, a) => a.indexOf(v) == i)
                .map((v) => (
                  <RadioTile
                    key={v}
                    value={v}
                    id={`category-${v}`}
                    onClick={selectCategory}
                    hidden
                  >
                    {Icons[v]}
                    <span>{v}</span>
                  </RadioTile>
                ))}

            </RadioGroup>
          </div>
          <div className="flex flex-1 flex-col">
            <div className="p-4">
              {isLoading && (
                <div className="flex flex-col gap-4">
                  <Skeleton className="h-6 w-[12rem] rounded-full" />
                  <div className={`
                    flex flex-col gap-4
                    md:grid md:grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))]
                  `}
                  >

                    {Array.from(Array(6).keys()).map((i) => (
                      <Skeleton className="h-48 w-full rounded-xl" key={`loading-${i}`} />
                    ))}
                  </div>
                </div>
              )}
              {!isLoading && !error && (
                <div className="flex flex-col gap-4">
                  <div className="text-lg">
                    共有
                    {' '}
                    <strong>{filtered.length}</strong>
                    {' '}
                    個符合條件的機器人
                  </div>
                  <div className={`
                    flex flex-col gap-4
                    md:grid md:grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))]
                  `}
                  >
                    {
                      filtered.map((bot) => (
                        <Glow
                          key={bot.id}
                          className={`
                            peer transition-[transform]
                            hover:scale-[1.01]
                            peer-hover:scale-[1.01]
                          `}
                        >
                          <BotCard bot={bot} />
                        </Glow>
                      ))
                    }
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </GlowCapture>
  );
}