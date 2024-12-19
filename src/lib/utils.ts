import { SiDiscord, SiGithub, SiKofi, SiPatreon, SiX, SiYoutube } from '@icons-pack/react-simple-icons';
import { Link } from 'lucide-react';
import { clsx } from 'clsx';
import moment from 'moment';
import { twMerge } from 'tailwind-merge';

import type { ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const yyyyMMdd = (time: moment.MomentInput) => moment(time).format('yyyy/MM/DD');

export const HHmmss = (time: moment.MomentInput) => moment(time).format('HH:ss:ss');

export const parseUrl = (url: string) => {
  let icon = Link;
  let name = 'external';

  if (url.includes('https://github.com')) {
    icon = SiGithub;
    name = 'GitHub';
  }
  else if (url.includes('https://youtube.com')) {
    icon = SiYoutube;
    name = 'YouTube';
  }
  else if (url.includes('https://x.com')) {
    icon = SiX;
    name = '𝕏';
  }
  else if (url.includes('https://discord.com')) {
    icon = SiDiscord;
    name = 'Discord';
  }
  else if (url.includes('https://ko-fi.com')) {
    icon = SiKofi;
    name = 'Ko-fi';
  }
  else if (url.includes('https://patreon.com')) {
    icon = SiPatreon;
    name = 'Patreon';
  }

  return {
    icon,
    name,
  };
};
