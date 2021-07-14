import React, { useRef, useEffect } from 'react';
import { Trans } from 'gatsby-plugin-react-i18next';
import cn from 'classnames';

import { ArrowButton } from '../../pages/founding-members';

const TermsAndConditions = ({ termsRead, setCurrentProgress, setTermsRead, t }) => {
  const termsAndConditions = useRef();

  useEffect(() => {
    function handleScroll() {
      setTermsRead(
        termsAndConditions.current.scrollTop >=
          termsAndConditions.current.scrollHeight - termsAndConditions.current.offsetHeight
      );
    }

    if (termsAndConditions?.current) {
      handleScroll();
      termsAndConditions.current.addEventListener('scroll', handleScroll);
      return () => termsAndConditions.current.removeEventListener('scroll', handleScroll);
    }
  }, [setTermsRead]);

  return (
    <>
      <h3 className="FoundingMembersFormPage__form__subtitle margin-bottom-XS">
        {t('foundingMembers.form.termsAndConditions.title')}
      </h3>
      <div ref={termsAndConditions} className="FoundingMembersFormPage__form__text-wrapper">
        <Trans
          i18nKey="foundingMembers.form.termsAndConditions.text"
          components={[
            <h4 className="margin-bottom-S">title</h4>,
            <p className="margin-bottom-XS" />,
            <p className="margin-bottom-M">
              <em />
            </p>,
          ]}
        />
      </div>
      <ArrowButton
        className={cn('FoundingMembersFormPage__form__button', {
          'FoundingMembersFormPage__form__button--inactive': !termsRead,
        })}
        text={t('foundingMembers.general.next')}
        onClick={() => {
          if (termsRead) {
            setCurrentProgress(5);
          }
        }}
      />
    </>
  );
};

export default TermsAndConditions;
