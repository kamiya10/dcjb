import { DeveloperCard } from '@/components/app/developer-card';
import { Heading2 } from '@/components/ui/typography';

const developers = [{
  name: '許育祁',
  nickname: 'Archie',
  department: '資工二A',
  avatar: 'https://cdn.discordapp.com/avatars/873116401429250078/134640c3e602d583884bb464ff8e25d0.png?size=512',
  links: [
    {
      label: '部落格',
      url: 'https://www1.pu.edu.tw/~s1121148/hw3',
    },
    {
      label: 'GitHub',
      url: 'https://github.com/archie0732',
    },
    {
      label: 'Discord',
      url: 'https://discord.com/users/873116401429250078',
    },
  ],
  job: '前端工程師',
},
{

  name: '林意文',
  nickname: 'Kamiya',
  department: '資工二A',
  avatar: 'https://cdn.discordapp.com/avatars/437158166019702805/cabe35951275ba72618925fec44bffce.png?size=512',
  links: [
    {
      label: '部落格',
      url: 'https://www1.pu.edu.tw/~s1121170/hw3',
    },
    {
      label: 'GitHub',
      url: 'https://github.com/kamiya10',
    },
    {
      label: 'X',
      url: 'https://x.com/kamiya4047',
    },
    {
      label: 'Discord',
      url: 'https://discord.com/users/437158166019702805',
    },
  ],
  job: '前端工程師',
},
{
  name: '潘群方',
  nickname: '呵欠',
  department: '資工二A',
  avatar: 'https://cdn.discordapp.com/avatars/763690576209903627/16e2c5e6eb6ff9623b758fadea28137c.png?size=512',
  links: [
    {
      label: '部落格',
      url: 'https://www1.pu.edu.tw/~s1120058/hw6',
    },
    {
      label: 'Discord',
      url: 'https://discord.com/users/763690576209903627',
    },
  ],
  job: '馬戲團小丑主演',
},
{
  name: '温胤呈',
  nickname: 'YinCheng',
  department: '資工二B',
  avatar: 'https://cdn.discordapp.com/avatars/464303066628227072/a_785230aab3e6432f623d5bda9d9e3aaf.gif?size=512',
  links: [
    {
      label: '部落格',
      url: 'https://yincheng0106.github.io/',
    },
    {
      label: 'GitHub',
      url: 'https://github.com/YinCheng0106',
    },
    {
      label: 'X',
      url: 'https://x.com/Yin_Cheng0106',
    },
    {
      label: 'Discord',
      url: 'https://discord.com/users/464303066628227072',
    },
  ],
  job: '資料研究員',
},
];

export default function Page() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <main className="container flex flex-col">
        <div className="mt-8">
          <Heading2 className="border-none text-center">開發人員</Heading2>
        </div>
        <div className={`
          flex flex-col gap-8 p-8
          md:grid md:grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))]
        `}
        >
          {
            developers.map((dev) => <DeveloperCard {...dev} key={dev.name} />)
          }
        </div>
      </main>
    </div>
  );
}
