function set(name, value, days, doc = document) {
  let expires;
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = `; expires=${date.toGMTString()}`;
  } else {
    expires = '';
  }
  doc.cookie = `${name}=${value}${expires}; path=/`;
}

function get(name, doc = document) {
  const nameEQ = `${name}=`;
  const ca = doc.cookie.split(';');
  for (let i = 0; i < ca.length; i += 1) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function remove(name, doc = document) {
  set(name, '', -1, doc);
}

export default {
  set,
  get,
  remove,
};
