import padNumber from './index';

describe('padNumber function', () => {
  it('retuns double digit string by default', () => {
    expect(padNumber(1)).toEqual('01');
  });

  it('retuns the same value as string for double digit input', () => {
    expect(padNumber(52)).toEqual('52');
  });
});
