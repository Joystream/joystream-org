import React from 'react';
import cn from 'classnames';

import Button from '../Button';
import Link from '../Link';

import cookies from '../../utils/cookieHelper';

import './style.scss';

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

    if (!isCookieSet) {
      this.setState({ visible: true });
    }
  }

  onAccept = () => {
    const { cookieName, expires } = this;

    cookies.set(cookieName, true, expires);
    this.setState({ visible: false });
  };

  render() {
    const { visible } = this.state;

    return (
      <div className={cn('CookiesNotice', { 'CookiesNotice--visible': visible })}>
        <div className='CookiesNotice__container'>
          <div className="CookiesNotice__content">
            <span className="CookiesNotice__text">{this.props.t('cookiesNotice.text')}</span>
            {' '}
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

export default CookiesNotice;
