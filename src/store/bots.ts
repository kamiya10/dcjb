import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Bot {
  title: string;
  id: string;
  category: string;
  avatarURL: string;
  bannerURL: string;
  inviteURL: string;
  owner: {
    name: string;
    avatarURL: string;
  };
  tags: string[];
  shortDescription: string;
  description: string;
}

interface BotStoreState {
  bots: Bot[];
  fetch(): Promise<void>;
}

export const useBotStore = create(
  persist<BotStoreState>(
    (set) => ({
      bots: [],
      async fetch() {
        const response = await fetch('/api/bot');

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}: ${await response.text()}`);
        }

        const bots = await response.json() as Bot[];

        set({ bots });
      },
    }),
    {
      name: 'bots',
    },
  ),
);
