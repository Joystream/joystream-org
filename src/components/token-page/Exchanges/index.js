import React, { useState } from 'react';

import './style.scss'

const Exchanges = ({ t }) => {
  const [email, setEmail] = useState("");

  return (
    <section className="TokenPage__exchanges-wrapper">
      <div className='TokenPage__exchanges'>
        <header className="TokenPage__exchanges__header">
          <span className="TokenPage__exchanges__header__section-title">{t("token.exchanges.sectionTitle")}</span>
          <h2 className="TokenPage__exchanges__header__title">{t("token.exchanges.title")}</h2>
          <p className="TokenPage__exchanges__header__subtitle">
            {t("token.exchanges.subtitle")}
          </p>
        </header>

        <div className='TokenPage__exchanges__newsletter'>
          <h3 className='TokenPage__exchanges__newsletter__title'>{t("token.exchanges.newsletter.title")}</h3>
          <p className='TokenPage__exchanges__newsletter__subtitle'>{t("token.exchanges.newsletter.subtitle")}</p>
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
              placeholder={t("token.exchanges.newsletter.placeholder")}
              type="email"
              name="EMAIL"
              required
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
            <button className="TokenPage__exchanges__newsletter__form__button" type="submit" name="subscribe">
              {t("token.exchanges.newsletter.join")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Exchanges;