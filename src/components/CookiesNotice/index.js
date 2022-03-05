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

const LAST_PRIVACY_POLICY_CHANGE_DATE_STRING = "2022-02-23T11:29:46.000Z";

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
    const cookieValue = cookies.get(this.cookieName);
    const { actionless } = this.props;

    let cookieSetDate = null;
    let isCookieSet = false;

    if(Date.parse(cookieValue) !== NaN) {
      cookieSetDate = new Date(cookieValue);
    }

    const lastPrivacyPolicyChangeDate = new Date(LAST_PRIVACY_POLICY_CHANGE_DATE_STRING);
    if(cookieSetDate !== null && cookieSetDate > lastPrivacyPolicyChangeDate) {
      isCookieSet = true;
    }

    if (!actionless && isCookieSet) {
      this.setState({ visible: false });
    }
  }

  onAccept = () => {
    const { cookieName, expires } = this;
    const { actionless } = this.props;

    const nowAsISOString = (new Date()).toISOString();

    if (!actionless) {
      cookies.set(cookieName, nowAsISOString, expires);
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
              <p>{this.props.t('cookiesNotice.text')}</p>
              <p>
                <Link to="/privacy-policy" className="CookiesNotice__link">
                  {this.props.t('cookiesNotice.findOutMore')}
                </Link>
              </p>
            </div>

            <Button large className="CookiesNotice__accept" onClick={this.onAccept} secondary>
              {this.props.t('button.accept')}
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
