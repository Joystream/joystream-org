import React from 'react';
import { formatNumber } from '../../utils/formatNumber';
import useAxios from '../../utils/useAxios';

function ExchangeCard({ address, number, tokens, usd, createdAt }) {
  return (
    <div className="Exchanges__Card">
      <div className="Exchanges__Card__address">
        <div>Source Address:</div>
        <h2>{address}</h2>
      </div>
      <div className="Exchanges__Card__blockNumber">
        Block Number: <span>{number}</span>
      </div>
      <div className="Exchanges__Card__tokens">
        <div>Tokens Transferred</div>
        <h1>{formatNumber(tokens)}</h1>
        <div className="Exchanges__Card__tokens__dollarAmount">USD value ${formatNumber(usd)}</div>
      </div>
      <div className="Exchanges__Card__footer">
        <div>
          Exchange <span>#{number}</span>
        </div>
        <div>{createdAt}</div>
      </div>
    </div>
  );
}

export default function PendingExchanges() {
  const [data, error, loading] = useAxios();
  if (!error && loading) {
    return <div>Loading...</div>;
  } else if (error) {
    console.error(error);
    return <div>Error...</div>;
  }

  const { exchanges } = data;
  return (
    <div className="Exchanges__Pending">
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
