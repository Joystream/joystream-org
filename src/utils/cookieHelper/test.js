import Cookie from './index';

const jsdom = require('jsdom');

const DOM = new jsdom.JSDOM();
const window = DOM.window;
const document = window.document;

const cookieName = 'joyCookie';

describe('cookieHelper', () => {
  beforeEach(() => {
    const documentCookie = document.cookie;
    const cookies = documentCookie.split(';');
    cookies.forEach((cookie, i) => {
      const key = cookies[i].split('=');
      document.cookie = key[0] + ' =; expires = Thu, 01 Jan 1970 00:00:00 UTC';
    });
  });

  it('gets and sets cookie properly', () => {
    expect(Cookie.get(cookieName, document)).toBeNull();
    Cookie.set(cookieName, 'testCookie', 1, document);
    expect(Cookie.get(cookieName, document)).toEqual('testCookie');
  });

  it('removes cookie properly', () => {
    Cookie.set(cookieName, 'testCookie', 1, document);
    expect(Cookie.get(cookieName, document)).toEqual('testCookie');
    Cookie.remove(cookieName, document);
    expect(Cookie.get(cookieName, document)).toBeNull();
  });
});
