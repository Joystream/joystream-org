import React from 'react';
import Media from 'react-media';

import content from '../../data/pages/hydra';

export default function Snippet() {
  return (
    <Media query="(min-width: 1024px)">
      {matches =>
        matches && (
          <div className="Snippet__Container">
            <div className="Snippet__Input">
              <pre>
                <code>{content.GraphQL.code.input}</code>
              </pre>
            </div>
            <div className="Snippet__Decoration">
              {Array.from({ length: 20 }, (_, i) => (
                <ColoredBox />
              ))}
            </div>
            <div className="Snippet__Output">
              <pre>
                <code>{content.GraphQL.code.result}</code>
              </pre>
            </div>
          </div>
        )
      }
    </Media>
  );
}

function ColoredBox({ direction }) {
  return (
    <div className="Snippet__ColoredBox">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
