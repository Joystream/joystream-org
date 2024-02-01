const parseDate = dateString => {
  if (!dateString) {
    return null;
  }

  const date = new Date(dateString);
  const parsedDate = `${date.toLocaleString('default', { month: 'short' })}. ${date.getDate()} ${date.getFullYear()}`;

  return parsedDate;
};

export default parseDate;
