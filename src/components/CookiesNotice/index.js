import React from 'react';
import { bool } from 'prop-types';
import cn from 'classnames';

import Button from '../Button';
import Link from '../Link';

import cookies from '../../utils/cookieHelper';

import './style.scss';

const propTypes = {
  actionless: bool,
};

const defaultProps = {
  actionless: false,
};

class CookiesNotice extends React.Component {
  constructor() {
    super();

    this.state = {
      visible: false,
    };

    this.cookieName = 'CookiesNoticeJoystream';
    this.expires = 365;
  }

  componentDidMount() {
    const isCookieSet = cookies.get(this.cookieName);
    const { actionless } = this.props;

    if (!actionless && isCookieSet) {
      this.setState({ visible: false });
    }
  }

  onAccept = () => {
    const { cookieName, expires } = this;
    const { actionless } = this.props;

    if (!actionless) {
      cookies.set(cookieName, true, expires);
      this.setState({ visible: false });
    }
  };

  render() {
    const { visible } = this.state;

    return (
      <div className="CookiesNotice">
        <div className={cn('CookiesNotice__container', { 'CookiesNotice__container--visible': visible })}>
          <div className="CookiesNotice__content">
            <span className="CookiesNotice__text">{this.props.t('cookiesNotice.text1')}</span>
            <br />
            <span className="CookiesNotice__text">{this.props.t('cookiesNotice.text2')} </span>
            <Link to="/privacy-policy" className="CookiesNotice__link">
              {this.props.t('cookiesNotice.findOutMore')}
            </Link>
          </div>

          <Button large={false} className="CookiesNotice__accept" onClick={this.onAccept} secondary>
            {this.props.t('button.accept')}
          </Button>
        </div>
      </div>
    );
  }
}

CookiesNotice.propTypes = propTypes;
CookiesNotice.defaultProps = defaultProps;

export default CookiesNotice;
