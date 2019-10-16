import React from 'react';
import { object, node, string, instanceOf, oneOfType } from 'prop-types';

import TitleWrapper from '../TitleWrapper';
import DateCounter from '../DateCounter';
import Button from '../Button';

import './style.scss';

const propTypes = {
  title: string.isRequired,
  image: oneOfType([object, string]).isRequired,
  date: oneOfType([instanceOf(Date), string]),
  button: object,
  className: string,
  children: oneOfType([string, node]).isRequired,
};

const defaultProps = {
  date: null,
  className: '',
  button: null,
};

const TestnetItem = ({ title, image, date, className, children, button, ...props }) => {
  return (
    <TitleWrapper title={title} className={className} {...props}>
      <div className="TestnetItem">
        <div className="TestnetItem__wrapper">
          <img className="TestnetItem__image" src={image} alt={title} />
          <div className="TestnetItem__container">
            <p className="TestnetItem__content">{children}</p>
            {date && <DateCounter date={date} className="TestnetItem__counter" />}
            {button && (
              <Button {...button} className="TestnetItem__button">
                {button.label}
              </Button>
            )}
          </div>
        </div>
      </div>
    </TitleWrapper>
  );
};

TestnetItem.propTypes = propTypes;
TestnetItem.defaultProps = defaultProps;

export default TestnetItem;
