import React, { useState } from 'react';

import './style.scss'

const Exchanges = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="TokenPage__exchanges-wrapper">
      <div className='TokenPage__exchanges'>
        <header className="TokenPage__exchanges__header">
          <span className="TokenPage__exchanges__header__section-title">EXCHANGES</span>
          <h2 className="TokenPage__exchanges__header__title">Where can you buy and sell JOY?</h2>
          <p className="TokenPage__exchanges__header__subtitle">
            If you have an appetite for more JOY tokens, check one of the exchanges listed below to buy more, or gain profit from the tokens you already have.
          </p>
        </header>

        <div className='TokenPage__exchanges__newsletter'>
          <h3 className='TokenPage__exchanges__newsletter__title'>No exchanges available at the moment</h3>
          <p className='TokenPage__exchanges__newsletter__subtitle'>Join our newsletter to be the first to know when the JOY token makes its debut on popular exchanges.</p>
          <form
            method="post"
            action="https://joystream.us11.list-manage.com/subscribe/post?u=932de577aec9616d4516b4e0f&amp;id=459ba8d1da"
            name="mc-embedded-subscribe-form"
            target="_blank"
            noValidate
            className="TokenPage__exchanges__newsletter__form"
          >
            <input
              className="TokenPage__exchanges__newsletter__form__input"
              placeholder="Email Address.."
              type="email"
              name="EMAIL"
              required
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
            <button className="TokenPage__exchanges__newsletter__form__button" type="submit" name="subscribe">
              Join the newsletter
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Exchanges;