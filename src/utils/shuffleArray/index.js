const shuffleArray = arr => {
  return arr
    .map(el => ({ sort: Math.random(), value: el }))
    .sort((prev, next) => prev.sort - next.sort)
    .map(el => el.value);
};

export default shuffleArray;
