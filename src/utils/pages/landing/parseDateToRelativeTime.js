const parseDateToRelativeTime = (dateString, locale = 'en') => {
  const formatter = new Intl.RelativeTimeFormat(locale);
  const timeDifferenceInMilliseconds = new Date() - new Date(dateString);
  const timeDifferenceInHours = Math.floor(timeDifferenceInMilliseconds / (1000 * 60 * 60));

  if (timeDifferenceInHours < 24) {
    return formatter.format(-timeDifferenceInHours, 'hours');
  }

  const timeDifferenceInDays = Math.floor(timeDifferenceInHours / 24);
  return formatter.format(-timeDifferenceInDays, 'days');
};

// Temporary function
const getDateHoursAgo = hours => {
  let date = new Date();

  date.setHours(date.getHours() - hours);

  return date.toLocaleString('en-US', { timeZone: 'Europe/Oslo' });
};

export { parseDateToRelativeTime, getDateHoursAgo };
