/* eslint-disable max-len */

import barrysilbertAvatar from '../../../assets/images/dashboard/followers/barrysilbert.png';
import melt_demAvatar from '../../../assets/images/dashboard/followers/melt_dem.png';
import fehrsamAvatar from '../../../assets/images/dashboard/followers/fehrsam.png';
import joonianAvatar from '../../../assets/images/dashboard/followers/joonian.png';

export const followers = [
  {
    avatar: barrysilbertAvatar,
    name: 'Barry silbert',
    username: 'barrysilbert',
    followersQuantity: '1,6 M',
  },
  {
    avatar: melt_demAvatar,
    name: 'Meltem demirors',
    username: 'melt_dem',
    followersQuantity: '250 K',
  },
  {
    avatar: fehrsamAvatar,
    name: 'Fred Ehrsam',
    username: 'fehrsam',
    followersQuantity: '1,4 K',
  },
  {
    avatar: joonianAvatar,
    name: 'Woong Joon ian',
    username: 'joonian',
    followersQuantity: '25 K',
  },
  {
    avatar: joonianAvatar,
    name: 'Woong Joon ian',
    username: 'joonian',
    followersQuantity: '25 K',
  },
];

export const msInDay = 24 * 60 * 60 * 1000;
export const eventsDateTimeFormat = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Europe/Berlin', // IANA time zone identifier for CEST
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
});

export const eventsShortDateTimeFormat = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Europe/Berlin', // IANA time zone identifier for CEST
  year: 'numeric',
  month: 'short',
  day: 'numeric',
});

export const isToday = date => new Date().toDateString() === new Date(date).toDateString();

export const isTomorrow = date =>
  new Date(new Date().getTime() + msInDay).toDateString() === new Date(date).toDateString();

export const isSameDate = (date, anotherDate) => new Date(date).toDateString() === new Date(anotherDate).toDateString();

export const openEvents = [
  {
    name: 'DAO Daily Standup',
    date: new Date(),
    description:
      'Experience our daily standups, where our vibrant community comes together to share updates, network, and stay informed about the latest happenings in our DAO.',
    discordVoice: 'Discord - voice_2',
  },
  {
    name: '23rd Council Mid-term Meeting',
    date: new Date(new Date().getTime() + msInDay),
    description:
      'Join us in the 23rd Council Mid-term Meeting, as we discuss and shape the future of our community. This event will primarily focus on the Council and WG plans, while also providing an avenue to evaluate our progress on OKRs & Roadmap, and address any outstanding issues within our DAO.',
    discordVoice: 'Discord - voice_2',
  },
  {
    name: 'DAO Daily Standup',
    date: new Date(new Date(new Date().getTime() + msInDay)),
    description:
      'Experience our daily standups, where our vibrant community comes together to share updates, network, and stay informed about the latest happenings in our DAO.',
    discordVoice: 'Discord - voice_2',
  },
  {
    name: '23rd Council Mid-term Meeting',
    date: new Date(new Date().getTime() + msInDay * 2),
    description:
      'Join us in the 23rd Council Mid-term Meeting, as we discuss and shape the future of our community. This event will primarily focus on the Council and WG plans, while also providing an avenue to evaluate our progress on OKRs & Roadmap, and address any outstanding issues within our DAO.',
    discordVoice: 'Discord - voice_2',
  },
];
