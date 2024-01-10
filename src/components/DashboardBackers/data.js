import companyIcons from '../../data/investors';

const backersKeys = ['DCG', 'Hypersphere', 'DefiAlliance', 'D1Ventures', 'OKX', 'GSR'];

export const backers = companyIcons.filter(companyIcon => backersKeys.includes(companyIcon.key));
