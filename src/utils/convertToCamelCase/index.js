const convertToCamelCase = string => {
  return string.split(' ').reduce((prevString, currString, index) => {
    if (index === 0) {
      return currString.toLowerCase();
    }

    return [prevString, currString.charAt(0).toUpperCase() + currString.slice(1)].join('');
  }, '');
};

export default convertToCamelCase;
