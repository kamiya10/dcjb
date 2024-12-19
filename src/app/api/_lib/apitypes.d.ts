export interface AnnouncementData {
  time: number;
  title: string;
  content: string;
}

export interface DiscordBotData {
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
  link: string[];
  announcements: AnnouncementData[];
}
