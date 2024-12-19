import { clsx } from 'clsx';
import moment from 'moment';
import { twMerge } from 'tailwind-merge';

import type { ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const yyyyMMdd = (time: moment.MomentInput) => moment(time).format('yyyy/MM/DD');
export const HHmmss = (time: moment.MomentInput) => moment(time).format('HH:ss:ss');
