import { join, resolve } from 'path';
import { readFileSync, readdirSync } from 'fs';

import type { DiscordBotData } from '../_lib/apitypes';

let cache: DiscordBotData[] = [];
let lastFetchTime = 0;

export function GET() {
  const now = Date.now();

  if ((now - lastFetchTime) < 600_000 && cache.length) {
    return Response.json(cache);
  }

  const path = resolve(process.cwd(), 'src', 'data');
  const data: DiscordBotData[] = [];
  for (const name of readdirSync(path)) {
    const content = readFileSync(join(path, name), 'utf8');
    data.push(JSON.parse(content) as DiscordBotData);
  }
  cache = data;
  lastFetchTime = now;
  return Response.json(data);
}
