import React, { useEffect, useState } from 'react';
import { Trans } from 'gatsby-plugin-react-i18next';
import Button from '../../Button';
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

export const parseQuarters = data => {
  if (data.length === 0) return [];

  let index = 0;

  return data.map(roadmapData => {
    roadmapData.quarters = roadmapData.quarters.map(quarter => {
      quarter.deliveryMilestones = quarter.deliveryMilestones.map(milestone => {
        milestone.generalIndex = index;

        index++;

        return milestone;
      });

      return quarter;
    });

    return roadmapData;
  });
};

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

const Quarters = ({ roadmapData, currentFilename, data, updateFileName, selectGlossary, scrollPosition, t }) => {
  const [shouldShowCopyMessage, setShouldShowCopyMessage] = useState(false);
  const [isSelect, setIsSelect] = useState(roadmapData.findIndex(item => item.name === currentFilename));
  const [shouldBannerShow, setShouldBannerShow] = useState(true);

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
            text={
              <Trans
                i18nKey="roadmap.linkToVersionCopied"
                components={{ versionNumber: roadmapData.length - isSelect }}
              />
            }
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
              title={t('roadmap.topBanner.title')}
              information={t('roadmap.topBanner.subtitle')}
              label={
                <button
                  onClick={() => {
                    const itemIndex = roadmapData.findIndex(item => item.isNewest === true);
                    updateFileName(roadmapData[itemIndex].name);
                    setIsSelect(itemIndex);
                  }}
                  className="Quarters__top__banner__button"
                >
                  {t('roadmap.topBanner.changeVersion')}
                </button>
              }
              close={() => {
                setShouldBannerShow(false);
              }}
            />
          ) : null}
        </div>
      </div>
      <QuartersListData
        data={parseQuarters(data)}
        selectGlossary={selectGlossary}
        scrollPosition={scrollPosition}
        isSelect={isSelect}
        t={t}
      />
      <div className="Quarters__form-wrapper">
        <div className="Quarters__form">
          <div className="Quarters__bottom__banner">
            <Banner
              icon={<Notic />}
              className="Quarters__bottom__banner__item"
              title={t('roadmap.disclaimer.title')}
              information={t('roadmap.disclaimer.subtitle')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quarters;
