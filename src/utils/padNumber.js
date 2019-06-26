const pad = (num, size = 2) => {
  const s = '0' + num;
  return s.substr(s.length - size);
};

export default pad;
