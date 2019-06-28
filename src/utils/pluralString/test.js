import pluralString from './index';

describe('pluralString function', () => {
  it('retuns singular word for conidtionLength <= 1', () => {
    expect(pluralString('week', 1)).toEqual('week');
  });

  it('retuns plural word for conidtionLength > 1', () => {
    expect(pluralString('week', 2)).toEqual('weeks');
  });
});
