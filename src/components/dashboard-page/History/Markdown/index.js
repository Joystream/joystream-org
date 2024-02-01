/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from 'react';
import { useRemarkSync } from 'react-remark';
import { string } from 'prop-types';

import './style.scss';

const propTypes = {
  content: string.isRequired,
};

const Markdown = ({ content }) => {
  const reactContent = useRemarkSync(content, {
    rehypeReactOptions: {
      components: {
        p: props => <p className="paragraph" {...props} />,
        h1: props => <h1 className="heading1 heading" {...props} />,
        h2: props => <h2 className="heading2 heading" {...props} />,
        h3: props => <h3 className="heading3 heading" {...props} />,
        a: props => <a className="anchor" {...props} />,
        ol: props => <ol className="ordered-list" {...props} />,
        li: props => <li className="list-item" {...props} />,
      },
    },
  });

  return <>{reactContent}</>;
};

Markdown.propTypes = propTypes;

export default Markdown;
