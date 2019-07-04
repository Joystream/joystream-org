import getApiPath from './index';

describe('get API path', () => {
  it('returns correct STATUS path', () => {
    expect(getApiPath('STATUS')).toEqual('status');
  });
});
