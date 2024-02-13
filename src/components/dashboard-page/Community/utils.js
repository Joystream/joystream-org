/* eslint-disable max-len */

import barrysilbertAvatar from '../../../assets/images/dashboard/followers/barrysilbert.png';
import melt_demAvatar from '../../../assets/images/dashboard/followers/melt_dem.png';
import fehrsamAvatar from '../../../assets/images/dashboard/followers/fehrsam.png';
import joonianAvatar from '../../../assets/images/dashboard/followers/joonian.png';

import specificEventPicture from '../../../assets/images/dashboard/specific-event-picture.png';
import genericEventPicture from '../../../assets/images/dashboard/generic-event-picture.png';

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
    link: 'https://discord.com',
    picture: specificEventPicture,
    name: 'DAO Daily Standup',
    date: new Date(),
    description:
      'Experience our daily standups, where our vibrant community comes together to share updates, network, and stay informed about the latest happenings in our DAO.',
    discordVoice: 'Discord - voice_2',
  },
  {
    link: 'https://discord.com',
    picture: genericEventPicture,
    name: '23rd Council Mid-term Meeting',
    date: new Date(new Date().getTime() + msInDay),
    description:
      'Join us in the 23rd Council Mid-term Meeting, as we discuss and shape the future of our community. This event will primarily focus on the Council and WG plans, while also providing an avenue to evaluate our progress on OKRs & Roadmap, and address any outstanding issues within our DAO.',
    discordVoice: 'Discord - voice_2',
  },
  {
    link: 'https://discord.com',
    name: 'DAO Daily Standup',
    picture: specificEventPicture,
    date: new Date(new Date(new Date().getTime() + msInDay)),
    description:
      'Experience our daily standups, where our vibrant community comes together to share updates, network, and stay informed about the latest happenings in our DAO.',
    discordVoice: 'Discord - voice_2',
  },
  {
    link: 'https://discord.com',
    picture: genericEventPicture,
    name: '23rd Council Mid-term Meeting',
    date: new Date(new Date().getTime() + msInDay * 2),
    description:
      'Join us in the 23rd Council Mid-term Meeting, as we discuss and shape the future of our community. This event will primarily focus on the Council and WG plans, while also providing an avenue to evaluate our progress on OKRs & Roadmap, and address any outstanding issues within our DAO.',
    discordVoice: 'Discord - voice_2',
  },
];

export const parseSocialMediaMemberCount = (data, key) => {
  const socialMediaMemberCount = data[key];
  if (!socialMediaMemberCount) {
    return '';
  }

  const socialMediaMemberCountInThousands = socialMediaMemberCount / 1000;

  return `${socialMediaMemberCountInThousands.toFixed(1)}K`;
};

export const parseSocialMediaMemberCountMonthlyChange = (data, key) => {
  const socialMediaMemberCountMonthlyChange = data[key];
  if (!socialMediaMemberCountMonthlyChange) {
    return '';
  }

  const roundedSocialMediaMemberCountMonthlyChange = Math.round(socialMediaMemberCountMonthlyChange);
  const socialMediaMemberCountMonthlyChangeWithSign =
    roundedSocialMediaMemberCountMonthlyChange > 0
      ? `+${roundedSocialMediaMemberCountMonthlyChange}%`
      : `${roundedSocialMediaMemberCountMonthlyChange}%`;

  return `${socialMediaMemberCountMonthlyChangeWithSign} Last month`;
};

export const parseTweetscoutScore = data => Math.round(data.tweetscoutScore) || '';

export const parseTweetscoutLevel = data => `Level ${data.tweetscoutLevel}` ?? '';

export const parseFollowers = (followers = []) =>
  followers.map(follower => ({
    avatar: follower.avatar,
    name: follower.name,
    username: follower.screenName,
    followersQuantity: `${Math.round(follower.followersCount / 1000)} K`,
  }));

const defaultEventLink = 'https://discord.gg/NaNzysB5YZ';

export const parseDiscrordEvents = (events = []) =>
  events
    .filter(e => new Date(e.scheduledStartTime).getTime() >= new Date().getTime())
    .map(e => ({
      link: defaultEventLink,
      date: new Date(e.scheduledStartTime),
      name: e.name,
      description: e.description,
      picture: e.image || genericEventPicture,
      discordVoice: `Discord - ${e.location}`,
    }))
    .sort((eventA, eventB) => eventA.date - eventB.date);
