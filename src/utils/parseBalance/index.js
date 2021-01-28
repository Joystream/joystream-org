import { formatBalance } from '@polkadot/util';

const BASE_LENGTH = 0;
const K_LENGTH = 1;
const M_LENGTH = 2;
const B_LENGTH = 3;

const parseBalance = balance => {
  const formattedBalance = formatBalance(balance, { forceUnit: '-', withSi: false })
    .split('.')[0]
    .split(',');
  const [prefix, ...postfix] = formattedBalance;
  switch (postfix.length) {
    case BASE_LENGTH:
      return `${formattedBalance}.000`;
    case K_LENGTH:
      return `${[prefix, ...postfix].join(',')}.000`;
    case M_LENGTH:
      return `${[prefix, postfix[0]].join('.')}M`;
    case B_LENGTH:
      return `${[prefix, postfix[0]].join('.')}B`;
    default:
      return formattedBalance;
  }
};

export default parseBalance;
