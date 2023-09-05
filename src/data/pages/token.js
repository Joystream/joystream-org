import React from 'react';

const tokenQuestions = [
  {
    title: 'token.faq.joyPurpose.title',
    text: 'token.faq.joyPurpose.text',
  },
  {
    title: 'token.faq.whereToGet.title',
    text: {
      isModular: true,
      key: 'token.faq.whereToGet.text',
      components: [
        <a href="https://pioneerapp.xyz/">link</a>,
        <a href="https://www.mexc.com/exchange/JOYSTREAM_USDT">link</a>,
      ],
    },
  },
  {
    title: 'token.faq.worth.title',
    text: {
      isModular: true,
      key: 'token.faq.worth.text',
      components: [
        <a href="https://www.mexc.com/exchange/JOYSTREAM_USDT">link</a>,
        <a href="https://coinmarketcap.com/currencies/joystream/">link</a>,
        <a href="https://www.coingecko.com/en/coins/joystream">link</a>,
      ],
    },
  },
  {
    title: 'token.faq.cashout.title',
    text: {
      isModular: true,
      key: 'token.faq.cashout.text',
      components: [<a href="https://www.mexc.com/exchange/JOYSTREAM_USDT">link</a>],
    },
  },
];

export default tokenQuestions;
