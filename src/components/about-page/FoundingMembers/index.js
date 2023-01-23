import React from 'react';

import './style.scss';

const FoundingMembers = () => {
  return (
    <section className="AboutPage__founding-members-wrapper">
      <div className="AboutPage__founding-members">
        <header className="AboutPage__founding-members__header">
          <span className="AboutPage__founding-members__header__section-title">FOUNDING MEMBERS</span>
          <h2 className="AboutPage__founding-members__header__title">Meet the people who launched Joystream</h2>
          <p className="AboutPage__founding-members__header__subtitle">
            Joystream was launched by people working in the entity{' '}
            <a href="https://joystream.gitbook.io/testnet-workspace/glossary#jsgenesis" target="_blank">
              Jsgenesis
            </a>{' '}
            and to a highly committed subset of the community which participated through many test networks as part of
            the{' '}
            <a href="https://joystream.gitbook.io/testnet-workspace/founding-member-program" target="_blank">
              founding member program
            </a>
            .
          </p>
        </header>
      </div>
    </section>
  );
};

export default FoundingMembers;
