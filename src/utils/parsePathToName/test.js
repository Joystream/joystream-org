import parsePathToName from './';

describe('parsePathToName', () => {
  it('parses path properly', () => {
    expect(parsePathToName('./assets/svg/warning-sign.svg')).toEqual('Warning Sign');
    expect(parsePathToName('./pointer-on-map.jpg')).toEqual('Pointer On Map');
    expect(parsePathToName('Sign.jpg')).toEqual('Sign');
    expect(parsePathToName('../relative-path.jpg')).toEqual('Relative Path');
    expect(parsePathToName('./assets/kebabCase.png')).toEqual('KebabCase');
  });
});
