/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import Media from 'react-media';
import { animated, useTransition } from 'react-spring';
import Code from './Code';

export default function Features({ features }) {
  const [selected, setSelected] = useState(0);
  const transitions = useTransition(features[selected], item => item.name, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  return (
    <div className="Features__Container">
      <div className="Features__List">
        {features.map((feature, idx) => (
          <Feature
            key={feature.name}
            name={feature.name}
            text={feature.text}
            selected={idx === selected}
            onClick={() => {
              setSelected(idx);
            }}
          />
        ))}
      </div>
      <Media
        queries={{
          large: '(min-width: 1024px)',
        }}
      >
        {matches =>
          matches.large && (
            <div className="Features__Snippets__List">
              {transitions.map(
                ({ item, key, props }) =>
                  !!item && (
                    <animated.div key={key} style={props} className="Features__Snippets__List__Element">
                      <Code lang="graphql" code={item.code} />
                    </animated.div>
                  )
              )}
            </div>
          )
        }
      </Media>
    </div>
  );
}

function Feature({ name, text, selected, onClick }) {
  return (
    <div className={`Features__Element ${selected ? 'Features__Element__Selected' : ''}`} onClick={onClick}>
      <span>{selected ? '-' : '+'}</span>
      <div>
        <h3>{name}</h3>
        {selected && <p>{text}</p>}
      </div>
    </div>
  );
}
