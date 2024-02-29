/* eslint-disable max-len */

import genericEventPicture from '../../../assets/images/dashboard/generic-event-picture.png';

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

export const parseSocialMediaMemberCount = (data, key) => {
  const socialMediaMemberCount = data[key];
  if (!socialMediaMemberCount) {
    return '0K';
  }

  const socialMediaMemberCountInThousands = socialMediaMemberCount / 1000;

  return `${socialMediaMemberCountInThousands.toFixed(1)}K`;
};

export const parseSocialMediaMemberCountMonthlyChange = (data, key) => {
  const socialMediaMemberCountMonthlyChange = data[key];
  if (!socialMediaMemberCountMonthlyChange) {
    return '0% Last month';
  }

  const roundedSocialMediaMemberCountMonthlyChange = Math.round(socialMediaMemberCountMonthlyChange);
  const socialMediaMemberCountMonthlyChangeWithSign =
    roundedSocialMediaMemberCountMonthlyChange > 0
      ? `+${roundedSocialMediaMemberCountMonthlyChange}%`
      : `${roundedSocialMediaMemberCountMonthlyChange}%`;

  return `${socialMediaMemberCountMonthlyChangeWithSign} Last month`;
};

export const parseTweetscoutScore = data => Math.round(data.tweetscoutScore) || 0;

export const parseTweetscoutLevel = data => `Level ${data.tweetscoutLevel || 0}`;

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
      discordVoice: !!e.location ? `Discord - ${e.location}` : 'Discord',
    }))
    .sort((eventA, eventB) => eventA.date - eventB.date);
