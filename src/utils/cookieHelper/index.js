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
  const joystreamCookiePrefix = `${name}=`;
  const cookies = doc.cookie.split(';');

  for (const cookie of cookies) {
    const trimmedCookie = cookie.trimLeft();

    if(trimmedCookie.indexOf(joystreamCookiePrefix) == 0) {
      return trimmedCookie.substring(joystreamCookiePrefix.length);
    }
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
