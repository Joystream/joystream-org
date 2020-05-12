import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { formatNumber } from '../../utils/formatNumber';
import formatDate from '../../utils/formatDate';
import useAxios from '../../utils/useAxios';

// TODO: Add the designer SVG
function NoExchanges() {
  return <div>No exchanges here...</div>;
}

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
        <div>{formatDate(createdAt)}</div>
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
      {exchanges.length === 0 ? (
        <NoExchanges />
      ) : (
        <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={125} totalSlides={exchanges.length}>
          <Slider>
            {exchanges.map((exchange, idx) => (
              <Slide key={`${idx}-${exchange.number}`} index={idx}>
                <ExchangeCard
                  number={idx}
                  tokens={exchange.tokens}
                  usd={exchange.usdTotal}
                  address={exchange.account}
                  createdAt={exchange.createdAt}
                />
              </Slide>
            ))}
          </Slider>
          <ButtonBack />
          <ButtonNext />
        </CarouselProvider>
      )}
    </div>
  );
}
