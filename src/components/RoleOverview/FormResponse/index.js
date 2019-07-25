import React from 'react';
import { bool, func } from 'prop-types';

import Link from '../../Link';

import { ReactComponent as CloseIcon } from '../../../assets/svg/close.svg';

import './style.scss';

const propTypes = {
  error: bool,
  onClose: func.isRequired,
};

const defaultProps = {
  error: false,
};

const FormResponse = ({ error, onClose }) => {
  if (error) {
    return <div className="FormResponse--error">Oops! Something went wrong while submitting the form.</div>;
  }

  return (
    <div className="FormResponse">
      <div className="FormResponse__container">
        <p className="FormResponse__title">
          Subscription Confirmed
          <CloseIcon className="FormResponse__close" onClick={onClose} />
        </p>

        <p className="FormResponse__text">
          Your subscription to our mailing list of people interested in receiving information and updates about the
          Discovery Provider role has been confirmed. Thank your for subscribing!
        </p>

        <p className="FormResponse__text">
          If you want to interact with us, or other people interested in this role, go to Telegram/RocketChat.
        </p>

        <p className="FormResponse__text">
          <strong>
            For questions about this list, contact <Link href="mailto:hello@jsgenesis.com">hello@jsgenesis.com</Link>
          </strong>
        </p>

        <p className="FormResponse__text">
          Jsgenesis AS
          <br />
          C/O UMA Workspace
          <br />
          Stenersgata 8<br />
          0184 Oslo
          <br />
          Norway
        </p>
      </div>
    </div>
  );
};

FormResponse.propTypes = propTypes;
FormResponse.defaultProps = defaultProps;

export default FormResponse;
