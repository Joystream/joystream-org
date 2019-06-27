const pluralString = (word, conditionLength) => {
  return conditionLength > 1 ? `${word}s` : word;
};

export default pluralString;
