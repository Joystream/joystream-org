import React, { useEffect } from 'react';
import Prism from 'prismjs';
import './syntax.scss';

export default function Code({ code, lang }) {
  useEffect(() => Prism.highlightAll());
  return (
    <pre>
      <code className={`language-${lang}`}>{code}</code>
    </pre>
  );
}
