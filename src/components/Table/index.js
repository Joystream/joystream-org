import React from 'react';

import './style.scss';

const Table = ({ children, className, gridLayout }) => (
  <div className={`Table ${className ?? ''}`}>
    {React.Children.map(children, child => React.cloneElement(child, { gridLayout }))}
  </div>
);

const Header = ({ children, className, position, gridLayout }) =>
  children && (
    <div className={`Table__header ${className ?? ''}`} style={{ gridTemplateColumns: gridLayout }}>
      {children}
    </div>
  );

const HeaderItem = ({ children, textAlign }) => (
  <p className="Table__header__item" style={{ textAlign: textAlign ?? 'left' }}>
    {children}
  </p>
);

const Body = ({ children, className, gridLayout }) => (
  <div className={`Table__body ${className ?? ''}`}>
    {React.Children.map(children, child => React.cloneElement(child, { gridLayout }))}
  </div>
);

const Row = ({ children, className, gridLayout }) => (
  <div className={`Table__row ${className ?? ''}`} style={{ gridTemplateColumns: gridLayout }}>
    {children}
  </div>
);

Table.Header = Header;
Table.HeaderItem = HeaderItem;
Table.Body = Body;
Table.Row = Row;

export default Table;
