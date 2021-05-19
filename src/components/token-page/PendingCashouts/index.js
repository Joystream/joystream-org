import React, { useState, useEffect } from 'react';
import { useTranslation, useI18next, Trans } from 'gatsby-plugin-react-i18next';

import CardCarousel from '../../../components/CardCarousel';

import useWindowDimensions from '../../../utils/useWindowDimensions';
import parseBalance from '../../../utils/parseBalance';
import formatDate from '../../../utils/formatDate';

import './style.scss';

const Cashout = ({ sourceAddress, tokensTransferred, blockNumber, amountUSD, exchangeNumber, exchangeDate, t }) => {
  const formattedDate = formatDate(exchangeDate);

  return (
    <div className="TokensPage__cashout">
      <div className="TokensPage__cashout__header">
        <p className="TokensPage__cashout__address-label">{t('token.cashouts.cashout.address')}</p>
        <p className="TokensPage__cashout__address">{sourceAddress}</p>
      </div>
      <div className="TokensPage__cashout__main">
        <p className="TokensPage__cashout__label">{t('token.cashouts.cashout.tokensTransferred')}</p>
        <p className="TokensPage__cashout__value">{tokensTransferred}</p>
      </div>
      <div className="TokensPage__cashout__info">
        <div className="TokensPage__cashout__info-item">
          <p className="TokensPage__cashout__label">{t('token.cashouts.cashout.usdValue')}</p>
          <p className="TokensPage__cashout__value TokensPage__cashout__value--small">{`$${amountUSD.toFixed(3)}`}</p>
        </div>
        <div className="TokensPage__cashout__info-item">
          <p className="TokensPage__cashout__label">{t('token.cashouts.cashout.blockNumber')}</p>
          <p className="TokensPage__cashout__value TokensPage__cashout__value--small">{blockNumber}</p>
        </div>
        <div className="TokensPage__cashout__info-item">
          <p className="TokensPage__cashout__label">{t('token.cashouts.cashout.exchangeNumber')}{exchangeNumber}</p>
          <p className="TokensPage__cashout__value TokensPage__cashout__value--small">{formattedDate}</p>
        </div>
      </div>
    </div>
  );
};

const CASHOUT_ITEM_WIDTH_WITH_MARGIN = 395 + 20;
const CASHOUT_SMALL_ITEM_WIDTH_WITH_MARGIN = 320 + 20;

const pendingCashouts = [
  {
    sender: '5CcSehMkvZ7xEZ1Zp1xoFwSkPbzHAka5s3XjAp1Xt7ZqhCbv',
    recipient: '5FYEETarqpbWwFGE4fCQh8QqLAGcMauPd6zT4EcFswpf72Ti',
    senderMemo:
      'is my *£€® 426xgiBg9yFGtNhnPk4LNy5mF3R4VuNaLBxakYQqacaeK33auqAXGnCgBpGZE2qN1s5X5VC2ocgM3KkypUuyqZ1K9WSQs7Cis',
    xmrAddress: '426xgiBg9yFGtNhnPk4LNy5mF3R4VuNaLBxakYQqacaeK33auqAXGnCgBpGZE2qN1s5X5VC2ocgM3KkypUuyqZ1K9WSQs7C',
    amount: 4844115,
    date: '2020-09-17T09:08:30.000Z',
    blockHeight: 56664,
    price: 0.00005111904468614393,
    amountUSD: 247.6265311498201,
    logTime: '2020-09-19T15:46:57.554Z',
    status: 'PENDING',
  },
  {
    sender: '5DaDUnNVzZPwK9KLwyPFgeSbc9Xeh6G39A2oq36tiV9aEzcx',
    recipient: '5FYEETarqpbWwFGE4fCQh8QqLAGcMauPd6zT4EcFswpf72Ti',
    senderMemo: '',
    xmrAddress: 'No address found',
    amount: 1337,
    date: '2020-09-19T14:56:42.000Z',
    blockHeight: 88558,
    price: 0.00005123169685276576,
    amountUSD: 0.06849677869214782,
    logTime: '2020-09-19T15:57:58.793Z',
    status: 'PENDING',
  },
  {
    sender: '5CcSehMkvZ7xEZ1Zp1xoFwSkPbzHAka5s3XjAp1Xt7ZqhCbv',
    recipient: '5FYEETarqpbWwFGE4fCQh8QqLAGcMauPd6zT4EcFswpf72Ti',
    senderMemo:
      'is my *£€® 426xgiBg9yFGtNhnPk4LNy5mF3R4VuNaLBxakYQqacaeK33auqAXGnCgBpGZE2qN1s5X5VC2ocgM3KkypUuyqZ1K9WSQs7Cis',
    xmrAddress: '426xgiBg9yFGtNhnPk4LNy5mF3R4VuNaLBxakYQqacaeK33auqAXGnCgBpGZE2qN1s5X5VC2ocgM3KkypUuyqZ1K9WSQs7C',
    amount: 10000,
    date: '2020-09-19T16:05:18.000Z',
    blockHeight: 89244,
    price: 0.00005123169685276576,
    amountUSD: 0.5123169685276576,
    logTime: '2020-09-19T16:06:19.058Z',
    status: 'PENDING',
  },
  {
    sender: '5CcSehMkvZ7xEZ1Zp1xoFwSkPbzHAka5s3XjAp1Xt7ZqhCbv',
    recipient: '5FYEETarqpbWwFGE4fCQh8QqLAGcMauPd6zT4EcFswpf72Ti',
    senderMemo:
      'is my *£€® 426xgiBg9yFGtNhnPk4LNy5mF3R4VuNaLBxakYQqacaeK33auqAXGnCgBpGZE2qN1s5X5VC2ocgM3KkypUuyqZ1K9WSQs7Cis',
    xmrAddress: '426xgiBg9yFGtNhnPk4LNy5mF3R4VuNaLBxakYQqacaeK33auqAXGnCgBpGZE2qN1s5X5VC2ocgM3KkypUuyqZ1K9WSQs7C',
    amount: 123,
    date: '2020-09-19T16:09:54.000Z',
    blockHeight: 89290,
    price: 0.00005123169685276576,
    amountUSD: 0.006301498712890189,
    logTime: '2020-09-19T16:10:54.136Z',
    status: 'PENDING',
  },
  {
    sender: '5DaDUnNVzZPwK9KLwyPFgeSbc9Xeh6G39A2oq36tiV9aEzcx',
    recipient: '5FYEETarqpbWwFGE4fCQh8QqLAGcMauPd6zT4EcFswpf72Ti',
    senderMemo: '17Z63wPbLWPeJsT76vzwC7Qm2xitXNZquz',
    xmrAddress: ['17Z63wPbLWPeJsT76vzwC7Qm2xitXNZquz', '1'],
    amount: 100,
    date: '2020-10-23T15:54:30.000Z',
    blockHeight: 578573,
    price: 0.00004925514042433831,
    amountUSD: 0.004925514042433831,
    logTime: '2020-10-23T15:58:59.593Z',
    status: 'PENDING',
  },
  {
    sender: '5DaDUnNVzZPwK9KLwyPFgeSbc9Xeh6G39A2oq36tiV9aEzcx',
    recipient: '5FYEETarqpbWwFGE4fCQh8QqLAGcMauPd6zT4EcFswpf72Ti',
    senderMemo: '17Z63wPbLWPeJsT76vzwC7Qm2xitXNZquz',
    xmrAddress: ['17Z63wPbLWPeJsT76vzwC7Qm2xitXNZquz', '1'],
    amount: 1331,
    date: '2020-10-23T15:56:00.000Z',
    blockHeight: 578588,
    price: 0.00004925514042433831,
    amountUSD: 0.0655585919047943,
    logTime: '2020-10-23T15:59:43.367Z',
    status: 'PENDING',
  },
  {
    sender: '5DaDUnNVzZPwK9KLwyPFgeSbc9Xeh6G39A2oq36tiV9aEzcx',
    recipient: '5FYEETarqpbWwFGE4fCQh8QqLAGcMauPd6zT4EcFswpf72Ti',
    senderMemo: '17Z63wPbLWPeJsT76vzwC7Qm2xitXNZquz',
    xmrAddress: ['17Z63wPbLWPeJsT76vzwC7Qm2xitXNZquz', '1'],
    amount: 1234,
    date: '2020-10-23T15:59:06.000Z',
    blockHeight: 578619,
    price: 0.00004925514042433831,
    amountUSD: 0.06078084328363347,
    logTime: '2020-10-23T16:07:32.939Z',
    status: 'PENDING',
  },
  {
    sender: '5DaDUnNVzZPwK9KLwyPFgeSbc9Xeh6G39A2oq36tiV9aEzcx',
    recipient: '5FYEETarqpbWwFGE4fCQh8QqLAGcMauPd6zT4EcFswpf72Ti',
    senderMemo: '17Z63wPbLWPeJsT76vzwC7Qm2xitXNZquz',
    xmrAddress: ['17Z63wPbLWPeJsT76vzwC7Qm2xitXNZquz', '1'],
    amount: 3,
    date: '2020-10-23T16:06:30.000Z',
    blockHeight: 578693,
    price: 0.00004925514042433831,
    amountUSD: 0.00014776542127301493,
    logTime: '2020-10-23T16:11:01.884Z',
    status: 'PENDING',
  },
  {
    sender: '5DaDUnNVzZPwK9KLwyPFgeSbc9Xeh6G39A2oq36tiV9aEzcx',
    recipient: '5FYEETarqpbWwFGE4fCQh8QqLAGcMauPd6zT4EcFswpf72Ti',
    senderMemo: '17Z63wPbLWPeJsT76vzwC7Qm2xitXNZquz',
    xmrAddress: '17Z63wPbLWPeJsT76vzwC7Qm2xitXNZquz',
    amount: 11,
    date: '2020-10-24T06:54:36.000Z',
    blockHeight: 587573,
    price: 0.00004925514042433831,
    amountUSD: 0.0005418065446677214,
    logTime: '2020-10-24T06:55:38.727Z',
    status: 'PENDING',
  },
  {
    sender: '5DaDUnNVzZPwK9KLwyPFgeSbc9Xeh6G39A2oq36tiV9aEzcx',
    recipient: '5FYEETarqpbWwFGE4fCQh8QqLAGcMauPd6zT4EcFswpf72Ti',
    senderMemo: 'address 17Z63wPbLWPeJsT76vzwC7Qm2xitXNZquz',
    xmrAddress: '17Z63wPbLWPeJsT76vzwC7Qm2xitXNZquz',
    amount: 1,
    date: '2020-10-24T06:56:24.000Z',
    blockHeight: 587591,
    price: 0.00004925514042433831,
    amountUSD: 0.00004925514042433831,
    logTime: '2020-10-24T06:57:26.781Z',
    status: 'PENDING',
  },
  {
    sender: '5DaDUnNVzZPwK9KLwyPFgeSbc9Xeh6G39A2oq36tiV9aEzcx',
    recipient: '5FYEETarqpbWwFGE4fCQh8QqLAGcMauPd6zT4EcFswpf72Ti',
    senderMemo: 'address qpqq6ac0l5km0nppqecz86uq353v73vyggvk8ckf0f',
    xmrAddress: 'qpqq6ac0l5km0nppqecz86uq353v73vyggvk8ckf0f',
    amount: 123,
    date: '2020-10-24T06:57:24.000Z',
    blockHeight: 587601,
    price: 0.00004925514042433831,
    amountUSD: 0.0060583822721936124,
    logTime: '2020-10-24T06:58:26.630Z',
    status: 'PENDING',
  },
  {
    sender: '5DaDUnNVzZPwK9KLwyPFgeSbc9Xeh6G39A2oq36tiV9aEzcx',
    recipient: '5FYEETarqpbWwFGE4fCQh8QqLAGcMauPd6zT4EcFswpf72Ti',
    senderMemo:
      'address 426xgiBg9yFGtNhnPk4LNy5mF3R4VuNaLBxakYQqacaeK33auqAXGnCgBpGZE2qN1s5X5VC2ocgM3KkypUuyqZ1K9WSQs7Cis',
    xmrAddress: '3R4VuNaLBxakYQqacaeK33auqAXGnCgBpGZ',
    amount: 12,
    date: '2020-10-24T06:57:54.000Z',
    blockHeight: 587606,
    price: 0.000049255140424338304,
    amountUSD: 0.0005910616850920596,
    logTime: '2020-10-24T06:58:56.662Z',
    status: 'PENDING',
  },
  {
    sender: '5DaDUnNVzZPwK9KLwyPFgeSbc9Xeh6G39A2oq36tiV9aEzcx',
    recipient: '5FYEETarqpbWwFGE4fCQh8QqLAGcMauPd6zT4EcFswpf72Ti',
    senderMemo:
      'testing426xgiBg9yFGtNhnPk4LNy5mF3R4VuNaLBxakYQqacaeK33auqAXGnCgBpGZE2qN1s5X5VC2ocgM3KkypUuyqZ1K9WSQs7Ci',
    xmrAddress: '3R4VuNaLBxakYQqacaeK33auqAXGnCgBpGZ',
    amount: 31,
    date: '2020-10-24T06:59:30.000Z',
    blockHeight: 587622,
    price: 0.00004925514042433831,
    amountUSD: 0.0015269093531544875,
    logTime: '2020-10-24T07:00:32.635Z',
    status: 'PENDING',
  },
];

const PendingCashouts = ({ cashouts }) => {
  const { width } = useWindowDimensions();
  // const [pendingCashouts, setPendingCashouts] = useState([]);
  const { t } = useTranslation();

  // useEffect(() => {
  //   if (cashouts) {
  //     setPendingCashouts(cashouts.filter(cashout => cashout.status === 'PENDING'));
  //   }
  // }, [cashouts]);

  return (
    <div className="TokensPage__cashouts-wrapper">
      <div className="TokensPage__cashouts">
        <h2 className="TokensPage__cashouts__title">{t('token.cashouts.title')}</h2>
        <h3 className="TokensPage__cashouts__subtitle">
          {t('token.cashouts.subtitle')}
        </h3>
        <CardCarousel
          scrollAmount={width > 991 ? CASHOUT_ITEM_WIDTH_WITH_MARGIN : CASHOUT_SMALL_ITEM_WIDTH_WITH_MARGIN}
        >
          {pendingCashouts.map((pendingCashout, index) => (
            <Cashout
              key={pendingCashout.sender + index}
              sourceAddress={pendingCashout.sender.substring(0, width > 991 ? 19 : 15) + '...'}
              tokensTransferred={parseBalance(pendingCashout.amount)}
              amountUSD={pendingCashout.amountUSD}
              blockNumber={pendingCashout.blockHeight}
              exchangeNumber={index + 1}
              exchangeDate={pendingCashout.date}
              t={t}
            />
          ))}
        </CardCarousel>
      </div>
    </div>
  );
};

export default PendingCashouts;
