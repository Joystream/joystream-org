import getRandomInt from '../../../utils/getRandomInt';

import attemkaAvatar from '../../../assets/images/dashboard/contributors/Attemka.png';
import bedehoAvatar from '../../../assets/images/dashboard/contributors/bedeho.png';
import bwhmAvatar from '../../../assets/images/dashboard/contributors/bwhm.png';
import chrlschwbAvatar from '../../../assets/images/dashboard/contributors/chrlschwb.png';
import dzhideXAvatar from '../../../assets/images/dashboard/contributors/DzhideX.png';
import freakstaticAvatar from '../../../assets/images/dashboard/contributors/freakstatic.png';
import ignazioBovoAvatar from '../../../assets/images/dashboard/contributors/ignazio-bovo.png';
import kdemblerAvatar from '../../../assets/images/dashboard/contributors/kdembler.png';
import kubaMikolajczykAvatar from '../../../assets/images/dashboard/contributors/KubaMikolajczyk.png';
import mnaamaniAvatar from '../../../assets/images/dashboard/contributors/mnaamani.png';
import polikosiAvatar from '../../../assets/images/dashboard/contributors/Polikosi.png';
import rchrdcstroAvatar from '../../../assets/images/dashboard/contributors/rchrdcstro.png';
import thesanAvatar from '../../../assets/images/dashboard/contributors/thesan.png';
import traumschuleAvatar from '../../../assets/images/dashboard/contributors/traumschule.png';
import wRadoslawAvatar from '../../../assets/images/dashboard/contributors/WRadoslaw.png';
import zeeshanakram3Avatar from '../../../assets/images/dashboard/contributors/zeeshanakram3.png';

export const githubStats = [
  {
    metrics: 'Stars',
    value: '325',
  },
  {
    metrics: 'Commits',
    value: '10K',
  },
  {
    metrics: 'Commits this week',
    value: '250',
  },
  {
    metrics: 'Open PRs',
    value: '325',
  },
  {
    metrics: 'Open issues',
    value: '255',
  },
  {
    metrics: 'Repositories',
    value: '12',
  },
];

export const generateChartMockData = () => {
  const mockData = [];
  // Dates generated from 1 Oct to 5 Nov
  for (let i = 0; i < 37; i += 1) {
    mockData.push({
      // 35 subsequent days after 1 Oct
      date: new Date(new Date(2023, 9, 1).getTime() + i * 24 * 60 * 60 * 1000),
      // vals from 0 to 10
      contributions: getRandomInt(0, 10),
    });
  }
  return mockData;
};

export const contributors = [
  {
    avatar: attemkaAvatar,
    name: 'Attemka',
  },
  {
    avatar: bedehoAvatar,
    name: 'Bedeho Mender',
    username: 'bedeho',
  },
  {
    avatar: bwhmAvatar,
    name: 'Martin',
    username: 'bwhm',
  },
  {
    avatar: chrlschwbAvatar,
    name: 'Chaos77',
    username: 'chrlschwb',
  },
  {
    avatar: chrlschwbAvatar,
    name: 'Dmity Meltsov',
    username: 'dmtrjsg',
  },
  {
    avatar: dzhideXAvatar,
    name: 'DzhideX',
  },
  {
    avatar: freakstaticAvatar,
    name: 'Ricardo Maltez',
    username: 'freakstatic',
  },
  {
    avatar: ignazioBovoAvatar,
    name: 'Ignazio Bovo',
    username: 'ignazio-bovo',
  },
  {
    avatar: kdemblerAvatar,
    name: 'Klaudiusz Dembler',
    username: 'kdembler',
  },
  {
    avatar: kubaMikolajczykAvatar,
    name: 'Kuba Mikołajczyk',
    username: 'KubaMikolajczyk',
  },
  {
    avatar: mnaamaniAvatar,
    name: 'Mokhtar Naamani',
    username: 'mnaamani',
  },
  {
    avatar: polikosiAvatar,
    name: 'Polikosi',
  },
  {
    avatar: rchrdcstroAvatar,
    name: 'R I C H A R D',
    username: 'rchrdcstro',
  },
  {
    avatar: thesanAvatar,
    name: 'Theophile Sandoz',
    username: 'thesan',
  },
  {
    avatar: traumschuleAvatar,
    name: 'l1.media',
    username: 'traumschule',
  },
  {
    avatar: wRadoslawAvatar,
    name: 'WRadoslaw',
  },
  {
    avatar: zeeshanakram3Avatar,
    name: 'Zeeshan Akram',
    username: 'zeeshanakram3',
  },
];
