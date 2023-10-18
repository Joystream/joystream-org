import React, { useEffect, useState } from 'react';
import Button from '../../Button';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { ReactComponent as CopyLink } from '../../../assets/svg/copylink.svg';
import { ReactComponent as Expand } from '../../../assets/svg/expand.svg';
import { ReactComponent as Check } from '../../../assets/svg/optioncheck.svg';
import { ReactComponent as Notic } from '../../../assets/svg/banner_warning_disable.svg';
import { ReactComponent as NoticEnable } from '../../../assets/svg/banner_warning_enable.svg';

import QuartersListData from '../QuartersListData';
import TooltipPanel from '../../Tooltip';
import Banner from '../../Banner';
import scrollToActiveElement from '../../../utils/scrollToActiveElement';

import './style.scss';

const SelectOptions = ({ options, updateFileName, isSelect, setIsSelect, setShouldBannerShow }) => {
  const [isActive, setIsActive] = useState(false);

  const onSelectQuarters = index => {
    setIsSelect(index);
    updateFileName(options[index].name);
    setShouldBannerShow(!options[index].isNewest);
  };

  return (
    <>
      <div
        className={cn('Quarters__options-wrapper', {
          'Quarters__options-wrapper--active': isActive,
        })}
        onClick={() => setIsActive(prev => !prev)}
        role="presentation"
      >
        <div className={'Quarters__options-item__label'}>
          <div className="Quarters__options-item__name">{options[isSelect].select.title}</div>
          <div className="Quarters__options-item__period">{options[isSelect].select.subtitle}</div>
        </div>
        <div className="Quarters__expand__icon">
          <Expand
            className={cn('Quarters__expand-icon', {
              'Quarters__expand-icon--active': isActive,
            })}
          />
        </div>
        <div
          className={cn('Quarters__options__dropdown', {
            'Quarters__options__dropdown--active': isActive,
          })}
        >
          {options.map((label, index) => {
            return (
              <div
                role="button"
                key={index}
                className={cn('Quarters__options-item', {
                  'Quarters__options-item--light': index % 2 === 1,
                  'Quarters__options-item--active': isSelect === index,
                })}
                onClick={() => onSelectQuarters(index)}
                onKeyPress={() => onSelectQuarters(index)}
                tabIndex={0}
              >
                <div className="Quarters__options-item__label">
                  <div className="Quarters__options-item__name">{label.select.title}</div>
                  <div className="Quarters__options-item__period">{label.select.subtitle}</div>
                </div>
                {isSelect === index ? (
                  <div className="Quarters__expand__icon">
                    <Check className="Quarters__options__check-icon" />
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

const Quarters = ({ roadmapData, currentFilename, data, updateFileName, selectGlossary, scrollPosition }) => {
  const [shouldShowCopyMessage, setShouldShowCopyMessage] = useState(false);
  const [isSelect, setIsSelect] = useState(roadmapData.findIndex(item => item.name === currentFilename));
  const [shouldBannerShow, setShouldBannerShow] = useState(true);

  const { t } = useTranslation();

  useEffect(() => {
    if (new URL(window.location.href).hash === '#head') {
      scrollToActiveElement('select_quater');
    }
  }, []);

  const handleCopy = () => {
    const originalURL = window.location.href;
    if (new URL(originalURL).hash === '') {
      navigator.clipboard.writeText(originalURL + '#head');
    } else {
      navigator.clipboard.writeText(originalURL);
    }

    setShouldShowCopyMessage(true);
    setTimeout(() => {
      setShouldShowCopyMessage(false);
    }, 2000);
  };

  return (
    <div className="Quarters" id="select_quater">
      <div className="Quarters__form-wrapper">
        <div className="Quarters__form">
          <div>
            <SelectOptions
              className="Quarters__form__select"
              options={roadmapData}
              updateFileName={updateFileName}
              isSelect={isSelect}
              setIsSelect={setIsSelect}
              setShouldBannerShow={setShouldBannerShow}
              t={t}
            />
          </div>
          <TooltipPanel
            text={`Link to Version ${isSelect + 1} copied!`}
            state={shouldShowCopyMessage}
            style={{ marginRight: '10px' }}
          >
            <Button className="Quarters__form__button btn" name="subscribe" onClick={() => handleCopy()}>
              {t('roadmap.copysharinglink')}
              <CopyLink className="Quarters__form__linkicon" />
            </Button>
          </TooltipPanel>
        </div>
        <div className="Quarters__top">
          {!roadmapData[isSelect].isNewest && shouldBannerShow ? (
            <Banner
              icon={<NoticEnable />}
              className="Quarters__top__banner"
              title={'You are previewing an old version of the roadmap'}
              information={'Roadmap gets updated frequently and the one you view right now is an old legacy version.'}
              label={
                <button
                  onClick={() => {
                    console.log('HEYYO2');
                    const itemIndex = roadmapData.findIndex(item => item.isNewest === true);
                    console.log(roadmapData[itemIndex]);
                    console.log(itemIndex);
                    updateFileName(roadmapData[itemIndex].name);
                    setIsSelect(itemIndex);
                  }}
                  className="Quarters__top__banner__button"
                >
                  Change to current version
                </button>
              }
              close={() => {
                setShouldBannerShow(false);
              }}
            />
          ) : null}
        </div>
      </div>
      <QuartersListData data={data} selectGlossary={selectGlossary} scrollPosition={scrollPosition} />
      <div className="Quarters__form-wrapper">
        <div className="Quarters__form">
          <div className="Quarters__bottom__banner">
            <Banner
              icon={<Notic />}
              className="Quarters__bottom__banner__item"
              title={'Disclaimer'}
              information={
                "The information provided in the roadmap document is for illustrative and informational purposes only, and it does not constitute a legally binding agreement. The content presented in the roadmap is subject to change without notice, and any reliance on its accuracy or completeness is at the reader's own risk. The organization and its representatives shall not be held liable for any damages or losses arising from the use or interpretation of the roadmap."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quarters;
