'use client';

import { Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';

type Props = Readonly<{
  url: string;
}>;

export default function InviteButton({ url }: Props) {
  return (
    <Button
      className="flex gap-2"
      onClick={() => {
        'use client';
        window.open(url, '_blank');
      }}
    >
      <Plus />
      <span>邀請</span>
    </Button>
  );
}
