import React from 'react';
import { formatNumber } from '../../utils/formatNumber';

function ExchangeCard({ address, number, tokens, usd, createdAt }) {
  return (
    <div className="ExchangeCard">
      <div className="ExchangeCard__address">
        <div>Source Address:</div>
        <h2>{address}</h2>
      </div>
      <div className="ExchangeCard__blockNumber">
        Block Number: <span>{number}</span>
      </div>
      <div className="ExchangeCard__tokens">
        <div>Tokens Transferred</div>
        <h1>{formatNumber(tokens)}</h1>
        <div class="ExchangeCard__tokens__dollarAmount">USD value ${formatNumber(usd)}</div>
      </div>
      <div className="ExchangeCard__footer">
        <div>
          Exchange <span>#{number}</span>
        </div>
        <div>{createdAt}</div>
      </div>
    </div>
  );
}

export default function PendingExchanges({ exchanges }) {
  return (
    <div className="PendingExchanges">
      {exchanges.map((exchange, idx) => (
        <ExchangeCard
          key={`${idx}-${exchange.number}`}
          number={idx}
          tokens={exchange.tokens}
          usd={exchange.usdTotal}
          address={exchange.account}
          createdAt={exchange.createdAt}
        />
      ))}
    </div>
  );
}
