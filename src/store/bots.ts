import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { DiscordBotData } from '@/app/api/_lib/apitypes';

interface BotStoreState {
  bots: DiscordBotData[];
  fetch(): Promise<void>;
}

export const useBotStore = create(
  persist<BotStoreState>(
    (set) => ({
      bots: [],
      async fetch() {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bot`);

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}: ${await response.text()}`);
        }

        const bots = await response.json() as DiscordBotData[];

        set({ bots });
      },
    }),
    {
      name: 'bots',
    },
  ),
);
