import React from 'react';
import { bool } from 'prop-types';

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
      visible: true,
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

    if (visible) {
      return (
        <div className="CookiesNotice">
          <div className="CookiesNotice__container">
            <div className="CookiesNotice__content">
              <p>This site uses cookies. By continuing to browse the site, you are agreeing to our use of cookies.</p>
              <p>
                <Link to="/privacy-policy" className="CookiesNotice__link">
                  Find out more ›
                </Link>
              </p>
            </div>

            <Button className="CookiesNotice__accept" onClick={this.onAccept} secondary>
              Accept
            </Button>
          </div>
        </div>
      );
    }

    return null;
  }
}

CookiesNotice.propTypes = propTypes;
CookiesNotice.defaultProps = defaultProps;

export default CookiesNotice;
