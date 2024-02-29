/* eslint-disable max-len */
import historyStageJun2019Img from '../../../assets/images/dashboard/history-stage-jun-2019.jpg';
import historyStageNov2019Img from '../../../assets/images/dashboard/history-stage-nov-2019.webp';
import historyStageFeb2023Img from '../../../assets/images/dashboard/history-stage-feb-2023.jpeg';
import historyStageJul2023Img from '../../../assets/images/dashboard/history-stage-jul-2023.jpg';

// React Remark does not support line-through decoration out of the box. To override the limitation use ***text***

const longDescrSample = `
While editing the text user should have a lot of options which basic markdown syntax allows for. *Text can be italic*, **or it can be bolded**, or if something is completed ***it can be striked through***.

## There are H2 headings as well 🫡

User can use links by enclosing the link text in brackets (e.g., [Duck Duck Go]) and then follow it immediately with the URL in parentheses (e.g., (https://duckduckgo.com)).

The link should be styled as following: [Hey I'm a link click me](https://www.joystream.org/)

### There are more headings (this one is H3)
Lets look at the **ordered list** of all headings that user can use:

1. H1 by typing *‘#’* or clicking H1 action button.
2. H2 by typing *‘##’* or clicking H2 action button.
3. H3 by typing *‘###’* or clicking H3 action button.
`;

export const historyStages = [
  {
    img: historyStageJun2019Img,
    date: 'Jun 2019',
    shortDescr: 'The idea for the Joystream product',
    longDescr: longDescrSample,
  },
  {
    img: historyStageNov2019Img,
    date: 'Nov 2019',
    shortDescr: 'First POC of the product is created',
    longDescr: '',
  },
  {
    img: historyStageFeb2023Img,
    date: 'Feb 2023',
    shortDescr: 'JSGenesis is formed',
    longDescr: 'While editing the text user should have a lot of options which basic markdown syntax allows for.',
  },
  {
    img: historyStageJul2023Img,
    date: 'Jul 2023',
    shortDescr: 'Joystream is officialy in Testnet and released to the public for first test rounds',
    longDescr: 'While editing the text user should have a lot of options which basic markdown syntax allows for.',
  },
];
