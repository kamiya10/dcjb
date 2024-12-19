'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Bot } from 'lucide-react';

import BotCard from '@/components/app/bot-card';
import { CategoryIcons } from '@/lib/constants';
import { Input } from '@/components/ui/input';
import { RadioGroup } from '@/components/ui/radio-group';
import { RadioTile } from '@/components/ui/radio-tile';
import { Skeleton } from '@/components/ui/skeleton';
import { useBotStore } from '@/store/bots';

import type { MouseEvent } from 'react';

export default function Home() {
  const botStore = useBotStore();
  const [keyword, setKeyword] = useState('');
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

  const selectCategory = (ev: MouseEvent<HTMLButtonElement>) => {
    if (category == ev.currentTarget.value) {
      setCategory('');
    }
    else {
      setCategory(ev.currentTarget.value);
    }
  };

  const inputKeyword = (ev: MouseEvent<HTMLInputElement>) => {
    setKeyword(ev.currentTarget.value);
  };

  const filtered = botStore.bots
    .filter((v) => !category || v.category == category)
    .filter((v) => {
      const kw = keyword.toLowerCase();
      return v.title.toLowerCase().includes(kw)
        || v.id.toLowerCase().includes(kw);
    });

  return (
    <div className="flex flex-col items-center">
      <main className={`
        container flex flex-col gap-4
        md:grid md:grid-cols-[1fr_4fr] md:flex-row
      `}
      >
        <div className="flex flex-col gap-8 pt-4">
          <div className="flex flex-col gap-2">
            <div>搜尋</div>
            <Input value={keyword} onInput={inputKeyword} placeholder="關鍵字" />
          </div>
          <RadioGroup className="flex flex-col gap-2" value={category}>
            <div>類別</div>
            {botStore.bots
              .map((v) => v.category)
              .filter((v, i, a) => a.indexOf(v) == i)
              .map((v) => {
                const Icon = CategoryIcons[v] ?? Bot;

                return (
                  <RadioTile
                    key={v}
                    value={v}
                    id={`category-${v}`}
                    onClick={selectCategory}
                    hidden
                  >
                    <Icon size={18} />
                    <span>{v}</span>
                  </RadioTile>
                );
              })}
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
                <div
                  className={`
                    flex flex-col gap-4
                    md:grid md:grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))]
                  `}
                >
                  <AnimatePresence mode="popLayout">
                    {
                      filtered.map((bot) => (
                        <motion.div
                          key={bot.id}
                          layout
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          whileHover={{ scale: 1.01 }}
                          exit={{ opacity: 0 }}
                          transition={{ ease: 'easeInOut', duration: 0.2 }}
                        >
                          <BotCard bot={bot} />
                        </motion.div>
                      ))
                    }
                  </AnimatePresence>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
