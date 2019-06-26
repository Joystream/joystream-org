const pad = (num, size = 2) => {
  var s = '0' + num;
  return s.substr(s.length - size);
};

export default pad;
