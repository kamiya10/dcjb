import { existsSync, readFileSync } from 'fs';
import { resolve } from 'path';

import type { DiscordBotData } from '../../_lib/apitypes';

type Params = Readonly<{
  params: Promise<{ id: string }>;
}>;

const lastFetchTime = new Map<string, number>();
const cache = new Map<string, DiscordBotData>();

export async function GET(_req: Request, { params }: Params) {
  const id = (await params).id;
  const now = Date.now();

  if ((now - (lastFetchTime.get(id) ?? 0)) < 600_000 && cache.get(id)) {
    return Response.json(cache.get(id));
  }

  const path = resolve(process.cwd(), 'src', 'data', `${id}.json`);

  if (!existsSync(path)) {
    return new Response('Not Found', { status: 404 });
  }

  const data = JSON.parse(readFileSync(path, 'utf-8')) as DiscordBotData;

  lastFetchTime.set(id, now);
  cache.set(id, data);

  return Response.json(data);
}
