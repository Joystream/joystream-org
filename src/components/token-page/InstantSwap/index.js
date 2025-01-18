import React, { useEffect, useLayoutEffect, useState } from 'react';
import cn from 'classnames';

import Uniswap from '../../../assets/images/token/uniswap.webp';
import ChangeNow from '../../../assets/images/token/changenow.webp';
import DEXScreener from '../../../assets/images/token/dex-screener.png';
import Base from '../../../assets/images/token/base.webp';
import Joystream from '../../../assets/images/token/joystream.webp';

import { ReactComponent as LockIcon } from '../../../assets/svg/token/lock.svg';
import { ReactComponent as InvisibilityIcon } from '../../../assets/svg/token/invisibility.svg';
import { ReactComponent as ClockIcon } from '../../../assets/svg/token/clock.svg';
import { ReactComponent as TokenIcon } from '../../../assets/svg/token/token.svg';
import { ReactComponent as CopyIcon } from '../../../assets/svg/copy.svg';
import { ReactComponent as ArrowIcon } from '../../../assets/svg/arrow-down-small.svg';

import './style.scss';

const Benefit = ({ t, icon, text, link, copy }) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const isCopyable = copy !== undefined;

  useEffect(() => {
    if (isTooltipVisible) {
      const timeoutId = setTimeout(() => {
        setIsTooltipVisible(false);
      }, 1500);

      return () => clearTimeout(timeoutId);
    }
  }, [isTooltipVisible]);

  const content = (
    <div
      role="presentation"
      onClick={() => {
        if (isCopyable) {
          navigator.clipboard.writeText(copy);
          setIsTooltipVisible(true);
        }
      }}
      className={cn('TokenPage__instant-swap__main__benefits__item', {
        'TokenPage__instant-swap__main__benefits__item--copy': isCopyable,
      })}
    >
      <div className="TokenPage__instant-swap__main__benefits__item__icon-wrapper">{icon}</div>
      <p className={cn('TokenPage__instant-swap__main__benefits__item__text')}>{text}</p>
      {link ? <ArrowIcon className="TokenPage__instant-swap__main__benefits__item__arrow-icon" /> : null}
      {isCopyable ? (
        <div
          className={cn('TokenPage__instant-swap__main__benefits__item__tooltip', {
            'TokenPage__instant-swap__main__benefits__item__tooltip--visible': isTooltipVisible,
          })}
        >
          {t('token.instantSwap.benefits.addressTooltip')}
        </div>
      ) : null}
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
};

const ChangeNowSection = ({ t }) => {
  return (
    <div className="TokenPage__instant-swap__main">
      <div className="TokenPage__instant-swap__main__benefits">
        <Benefit icon={<LockIcon />} text={t('token.instantSwap.benefits.noSignUp')} />
        <Benefit icon={<InvisibilityIcon />} text={t('token.instantSwap.benefits.noKYC')} />
        <Benefit icon={<ClockIcon />} text={t('token.instantSwap.benefits.onlyFewMinutes')} />
        <Benefit icon={<TokenIcon />} text={t('token.instantSwap.benefits.nineHundredPlusCryptoSupported')} />
      </div>
      <div className="TokenPage__instant-swap__main__widget">
        <iframe
          title="changenow-widget"
          id="iframe-widget"
          src="https://changenow.io/embeds/exchange-widget/v2/widget.html?FAQ=true&amount=1&amountFiat&backgroundColor=272D33&darkMode=true&from=eth&horizontal=false&isFiat=false&lang=en-US&link_id=836b188968aaa8&locales=false&logo=true&primaryColor=4038FF&to=joy&toTheMoon=false"
          style={{ height: '356px', width: '100%', border: 'none' }}
        ></iframe>
      </div>
    </div>
  );
};

const UniswapSection = ({ t }) => {
  return (
    <div className="TokenPage__instant-swap__main">
      <div className="TokenPage__instant-swap__main__benefits">
        <Benefit
          icon={
            <img
              className="TokenPage__instant-swap__main__benefits__item__logo"
              src={DEXScreener}
              alt="dexscreener logo"
            />
          }
          text={t('token.instantSwap.benefits.dexScreener')}
          link="https://dexscreener.com/base/0xddbc56322277d3b116643470fb9c7c3b1b47b739"
          t={t}
        />
        <Benefit
          icon={<ClockIcon />}
          text={t('token.instantSwap.benefits.joyBaseBridge')}
          link="https://bridge.joystream.org/"
          t={t}
        />
        <Benefit
          icon={<CopyIcon style={{ transform: 'scale(1.32)' }} />}
          text={t('token.instantSwap.benefits.address')}
          copy="0x8761155c814c807cD3CcD15B256D69D3C10f198C"
          t={t}
        />
      </div>
      <div className="TokenPage__instant-swap__main__widget">
        <iframe
          title="uniswap-widget"
          id="uniswap-widget"
          src="https://app.uniswap.org/#/swap?chain=base&inputCurrency=0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913&outputCurrency=0x8761155c814c807cD3CcD15B256D69D3C10f198C"
          style={{ height: '615px', width: '100%', border: 'none', borderRadius: '12px' }}
        ></iframe>
      </div>
    </div>
  );
};

const SWITCH_STATE_UNISWAP = 'uniswap';
const SWITCH_STATE_CHANGENOW = 'changenow';

const InstantSwap = ({ t }) => {
  const [switchState, setSwitchState] = useState(SWITCH_STATE_CHANGENOW);
  const [initialLoad, setInitialLoad] = useState(true);

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      const swap = url.searchParams.get('swap');

      if (swap === 'base') {
        setSwitchState(SWITCH_STATE_UNISWAP);
      }
    }
  }, []);

  return (
    <section className="TokenPage__instant-swap-wrapper" id="instantSwap">
      <div className="TokenPage__instant-swap">
        <header className="TokenPage__instant-swap__header">
          <span className="TokenPage__instant-swap__header__section-title">{t('token.instantSwap.sectionTitle')}</span>
          <h2 className="TokenPage__instant-swap__header__title">{t('token.instantSwap.title')}</h2>
          <p className="TokenPage__instant-swap__header__subtitle">{t('token.instantSwap.subtitle')}</p>
        </header>

        <div className="TokenPage__instant-swap__switch-wrapper">
          <div className="TokenPage__instant-swap__switch">
            <div
              role="presentation"
              onClick={() => {
                setSwitchState(SWITCH_STATE_CHANGENOW);
                setInitialLoad(false);
              }}
              className={cn('TokenPage__instant-swap__switch__item TokenPage__instant-swap__switch__item--changenow', {
                'TokenPage__instant-swap__switch__item--active': switchState === SWITCH_STATE_CHANGENOW,
                'TokenPage__instant-swap__switch__item--inactive':
                  switchState !== SWITCH_STATE_CHANGENOW && !initialLoad,
              })}
            >
              <div className="TokenPage__instant-swap__switch__item__logo">
                <img
                  className="TokenPage__instant-swap__switch__item__logo__sub-logo"
                  src={Joystream}
                  alt="joystream logo"
                />
                <img
                  className="TokenPage__instant-swap__switch__item__logo__image"
                  src={ChangeNow}
                  alt="changenow logo"
                />
              </div>{' '}
              <div className="TokenPage__instant-swap__switch__item__text-wrapper">
                <p className="TokenPage__instant-swap__switch__item__main">{t('token.instantSwap.switch.changenow')}</p>
                <p className="TokenPage__instant-swap__switch__item__subtitle">
                  {t('token.instantSwap.switch.joystream')}
                </p>
              </div>
            </div>
            <div
              role="presentation"
              onClick={() => {
                setSwitchState(SWITCH_STATE_UNISWAP);
                setInitialLoad(false);
              }}
              className={cn('TokenPage__instant-swap__switch__item TokenPage__instant-swap__switch__item--uniswap', {
                'TokenPage__instant-swap__switch__item--active': switchState === SWITCH_STATE_UNISWAP,
                'TokenPage__instant-swap__switch__item--inactive': switchState !== SWITCH_STATE_UNISWAP && !initialLoad,
              })}
            >
              <div className="TokenPage__instant-swap__switch__item__logo TokenPage__instant-swap__switch__item__logo--with-background">
                <img className="TokenPage__instant-swap__switch__item__logo__sub-logo" src={Base} alt="base logo" />
                <img className="TokenPage__instant-swap__switch__item__logo__image" src={Uniswap} alt="uniswap logo" />
              </div>
              <div className="TokenPage__instant-swap__switch__item__text-wrapper">
                <p className="TokenPage__instant-swap__switch__item__main">{t('token.instantSwap.switch.uniswap')}</p>
                <p className="TokenPage__instant-swap__switch__item__subtitle">{t('token.instantSwap.switch.base')}</p>
              </div>
            </div>
          </div>
        </div>

        {switchState === SWITCH_STATE_CHANGENOW ? <ChangeNowSection t={t} /> : <UniswapSection t={t} />}
      </div>
    </section>
  );
};

export default InstantSwap;
