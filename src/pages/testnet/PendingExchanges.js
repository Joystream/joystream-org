import React, { useState } from 'react';
import { ReactComponent as EmptyExchanges } from '../../assets/svg/empty-exchanges.svg';
import { formatNumber } from '../../utils/formatNumber';
import formatDate from '../../utils/formatDate';
import useAxios from '../../utils/useAxios';
import Button from '../../components/Button';
import { ReactComponent as ArrowIcon } from '../../assets/svg/arrow-down-small.svg';

function NoExchanges() {
  return (
    <div className="Exchanges__Empty">
      <EmptyExchanges className="Exchanges__Empty__Icon" />
      <h1 className="Exchanges__Empty__Title">No Pending Exchanges Currently.</h1>
    </div>
  );
}

function ExchangeCard({ address, number, blockNumber, tokens, usd, createdAt }) {
  return (
    <div className="Exchanges__Card">
      <div className="Exchanges__Card__address">
        <div>Source Address:</div>
        <h2 className="Exchanges__Card__address__value">{address}</h2>
      </div>
      <div className="Exchanges__Card__blockNumber">
        Block Number: <span>{formatNumber(blockNumber)}</span>
      </div>
      <div className="Exchanges__Card__tokens">
        <div>Tokens Transferred</div>
        <h1 className="Exchanges__Card__tokens__value">{formatNumber(tokens)}</h1>
        <div className="Exchanges__Card__tokens__dollarAmount">USD value ${formatNumber(usd)}</div>
      </div>
      <div className="Exchanges__Card__footer">
        <div>
          Exchange <span>#{number}</span>
        </div>
        <div>{formatDate(createdAt)}</div>
      </div>
    </div>
  );
}

export default function PendingExchanges() {
  const MAX_IN_VIEW = 4;
  const [data, error, loading] = useAxios();
  const [viewIdx, setViewIdx] = useState(0);

  if (!error && loading) {
    return <div>Loading...</div>;
  } else if (error) {
    console.error(error);
    return <div>Error...</div>;
  }

  let handleNext = () => {
    if (viewIdx < exchanges.length - 1 && exchanges.length - viewIdx > MAX_IN_VIEW) {
      setViewIdx(viewIdx + 1);
    }
  };

  let handleBack = () => {
    if (viewIdx > 0) {
      setViewIdx(viewIdx - 1);
    }
  };

  const { exchanges } = data;

  const progress = Math.round((100 * (viewIdx + MAX_IN_VIEW)) / exchanges.length);
  console.log(progress);
  return (
    <div className="Exchanges__Pending">
      {exchanges.length === 0 ? (
        <NoExchanges />
      ) : (
        <div className="Exchanges__Pending__Container">
          {exchanges.slice(viewIdx, viewIdx + MAX_IN_VIEW).map((exchange, idx) => (
            <ExchangeCard
              key={`${idx}-${exchange.title}`}
              number={idx + viewIdx + 1}
              blockNumber={exchange.blockNumber}
              tokens={exchange.tokens}
              usd={exchange.usdTotal}
              address={exchange.account}
              createdAt={exchange.createdAt}
            />
          ))}
        </div>
      )}
      <div className="Exchanges__Pending__Bar">
        <Button
          className="Exchanges__Pending__Bar__Button__Back"
          onClick={handleBack}
          style={{ background: 'transparent' }}
        >
          <ArrowIcon />
        </Button>
        <div className="Exchanges__Pending__Bar__Progress">
          <div className="Exchanges__Pending__Bar__Progress__Indicator" style={{ width: `${progress}%` }}></div>
        </div>
        <Button
          className="Exchanges__Pending__Bar__Button__Next"
          onClick={handleNext}
          style={{ background: 'transparent' }}
        >
          <ArrowIcon />
        </Button>
      </div>
    </div>
  );
}
