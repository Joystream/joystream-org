import React, { useState } from 'react';
import content from '../../data/KPIs.json';
import TitleWrapper from '../../components/TitleWrapper';
import { useSpring, animated } from 'react-spring';
import { ReactComponent as ArrowIcon } from '../../assets/svg/KPI-arrow.svg';

function Bounty({
  number,
  reward,
  title,
  description,
  publishedAt,
  requirements,
  annihilation,
  conditions,
  reviewPeriod,
  status,
}) {
  const [expand, setExpand] = useState(false);
  const [hover, setHover] = useState(false);
  const containerProps = useSpring({ minHeight: expand ? '30rem' : '10rem', from: { minHeight: '10rem' } });
  return (
    // eslint-disable-next-line jsx-a11y/interactive-supports-focus
    <animated.div
      style={containerProps}
      className={`KPIs__Values__Card ${expand ? '' : 'BreakText'}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => {
        setExpand(!expand);
      }}
    >
      {/* TODO: Add classes and markup to hide on media query*/}
      <div className="KPIs__Values__Card__Number OnlyLg">
        {hover ? (
          <>
            <div className="KPIs__Values__Card__Number__Hover ">
              <ArrowIcon className="KPIs__Values__Card__Number__Hover__Icon" />
              <span>more</span>
            </div>
          </>
        ) : (
          <h2>{leadingZero(number)}</h2>
        )}
      </div>
      <div>
        <div className="KPIs__Values__Card__Header">
          <div className="OnlyXs KPIs__Values__Card__Header__Top">
            <h2>{leadingZero(number)}</h2>
            <h2>${reward}</h2>
          </div>
          <h1 className="KPIs__Values__Card__Header__Title">{title}</h1>
          <h2 className="OnlyLg">${reward}</h2>
        </div>
        <div dangerouslySetInnerHTML={{ __html: description }} className="KPIs__Values__Card__Description"></div>
        {expand && (
          <div className="KPIs__Values__Card__Info">
            <div className="KPIs__Values__Card__Info__Dates">
              <div>
                <span className="KPIs__Values__Card__Info__Dates__Label">Published at:</span>
                <span className="KPIs__Values__Card__Info__Dates__Value">{publishedAt}</span>
              </div>
              <div className="KPIs__Values__Card__Info__Success">
                <span>Requirements:</span>
                <ol>
                  {requirements?.map((ev, idx) => (
                    <li key={idx}>{ev}</li>
                  ))}
                </ol>
              </div>
              <div>
                <span className="KPIs__Values__Card__Info__Dates__Label">Annihilation Condition:</span>
                <span className="KPIs__Values__Card__Info__Dates__Value">{annihilation}</span>
              </div>
              <div className="KPIs__Values__Card__Info__Success">
                <span>Conditions:</span>
                <ol>
                  {conditions?.map((ev, idx) => (
                    <li key={idx}>{ev}</li>
                  ))}
                </ol>
              </div>
              <div>
                <span className="KPIs__Values__Card__Info__Dates__Label">Review Period:</span>
                <span className="KPIs__Values__Card__Info__Dates__Value">{reviewPeriod}</span>
              </div>
              <div>
                <span className="KPIs__Values__Card__Info__Dates__Label">Status:</span>
                <span dangerouslySetInnerHTML={{ __html: status }}></span>
              </div>
            </div>
          </div>
        )}
      </div>
    </animated.div>
  );
}

export default function CommunityBounties({ id }) {
  const { Bounties } = content;
  if (Bounties?.length) {
    return (
      <TitleWrapper title="Community Bounties" className="KPIs__Values" id={id}>
        {Bounties.map((bounty, idx) => (
          <Bounty
            key={`${bounty.title} - ${idx}`}
            number={bounty.id}
            title={bounty.title}
            description={bounty.description}
            reward={bounty.reward}
            publishedAt={bounty.published}
            requirements={bounty.successEvents}
            annihilation={bounty.annihilation}
            conditions={bounty.conditions}
            reviewPeriod={bounty.reviewPeriod}
            status={bounty.status}
          />
        ))}
      </TitleWrapper>
    );
  } else {
    return null;
  }
}

function leadingZero(n) {
  if (n < 10 && n > 0) {
    return `0${n}`;
  }
  return n;
}