import React from 'react';
import Media from 'react-media';

import content from '../../data/pages/hydra';

export default function Snippet() {
  return (
    <Media query="(min-width: 1024px)">
      {matches =>
        matches && (
          <div className="Snippet__Container">
            <content.Snippet.snippet />
          </div>
        )
      }
    </Media>
  );
}
