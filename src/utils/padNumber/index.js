const padNumber = (num, size = 2) => {
  const s = '0' + num;
  return s.substr(s.length - size);
};

export default padNumber;
