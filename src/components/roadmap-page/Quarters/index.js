import React, { useEffect, useState } from 'react';
import Button from '../../Button';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import ClipboardJS from 'clipboard';

import './style.scss';

import { ReactComponent as CopyLink } from '../../../assets/svg/copylink.svg';
import { ReactComponent as Expand } from '../../../assets/svg/expand.svg';
import { ReactComponent as Check } from '../../../assets/svg/optioncheck.svg';
import { ReactComponent as Notic } from '../../../assets/svg/banner_warning_disable.svg';
import { ReactComponent as NoticEnable } from '../../../assets/svg/banner_warning_enable.svg';

import QuartersListData from '../QuartersListData';
import TooltipPanel from '../../Tooltip';
import Banner from '../../Banner';
import scrollToIdElement from '../../../utils/scrollToIdElement';

const SelectOptions = ({ options, sendData, value }) => {

  const [isActive, setIsActive] = useState(false);
  const [isSelect, setIsSelect] = useState(0);

  useEffect(() => {
    if (value >0) {
      setIsSelect(value);
    }
  },[value]);

  const onSelectQuarters = (index) => {
    setIsSelect(index);
    sendData(options[index].period);
  };

  return (
    <>
      <div
        className={cn('Quarters__options-wrapper', {
          'Quarters__options-wrapper--active': isActive,
        })}
        onClick={() => setIsActive((prev) => !prev)}
        role="presentation"
      >
        <div className={'Quarters__options-item__label'}>
          <div className="Quarters__options-item__name">
            {options[isSelect].name}
          </div>
          <div className="Quarters__options-item__period">
            {options[isSelect].period.replace(/\.json/g, '')}
            {isSelect === 0 ? ' (Current)' : ' (Old)'}
          </div>
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
                tabIndex="0"
              >
                <div className="Quarters__options-item__label">
                  <div className="Quarters__options-item__name">
                    {label.name}
                  </div>
                  <div className="Quarters__options-item__period">
                    {label.period.replace(/\.json/g, '')}
                    {index === 0 ? ' (Current)' : ' (Old)'}
                  </div>
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

const Quarters = ({ names, gitLoading, gitError, data, file , value }) => {
  const [oldVersionBanner, setOldVersionBanner] = useState(false);
  const [bottomBanner, setBottomBanner] = useState(true);
  const [selectValue, setSelectValue] = useState(value);
  const [idString, setIdString] = useState('');
  
  let quartersSelects = [];

  if (names && !gitLoading && !gitError) {
    quartersSelects = names.fileNames.reverse().map((name, index) => ({
      name: 'Version ' + (index + 1).toString(),
      period: name,
    }));
  }

  const { t } = useTranslation();

  const handleCopy = () => {
    const clipboard = new ClipboardJS('.btn');
    clipboard.on('success', () => {
      alert('Successfully!');
      clipboard.destroy();
    });
    clipboard.on('error', () => {
      alert('Failed to copy!');
      clipboard.destroy();
    });
  };

  const getFileName = (res) => {
    file(res);
    const index = quartersSelects.findIndex(item => item.period === res);

    if (index === 0) {
      setOldVersionBanner(false);
    } else {
      setOldVersionBanner(true);
    }

    setSelectValue(index);
    setIdString(res);
  };

  if (value>0) {    
    scrollToIdElement('select_quater');
  }

  return (
    <div className="Quarters">
      <div className="Quarters__form-wrapper">

        <div className="Quarters__form" id="select_quater">
          <div>
            {names && !gitLoading && !gitError ? (
              <SelectOptions
                className="Quarters__form__select"
                options={quartersSelects}
                sendData={getFileName}
                value={value}
                t={t}
              />
            ) : (
              <div className="Quarters__options-wrapper">Loading ...</div>
            )}
          </div>
          <TooltipPanel text={`Link to Version ${selectValue+1} copied!`}>
            <Button className="Quarters__form__button btn" data-clipboard-text={(typeof window!== 'undefined')?window.location.href:""} name="subscribe" onClick={handleCopy}>
              {t('roadmap.copysharinglink')}
              <CopyLink className="Quarters__form__linkicon" />
            </Button>
          </TooltipPanel>
        </div>
        <div>
          {oldVersionBanner ? (
            <Banner
              icon={<NoticEnable />}
              className="Quarters__top__banner"
              title={'You are previewing an old version of the roadmap'}
              information={
                'Roadmap gets updated frequently and the one you view right now is an old legacy version.'
              }
              label={<a href="/">Change to current version</a>}
            />
          ) : (
            <></>
          )}
        </div>
        <div className="Quarters__bottom__banner">
          {bottomBanner ? (
            <Banner
              icon={<Notic />}
              title={'Disclaimer'}
              information={
                'The information provided in the roadmap document is for illustrative and informational purposes only, and it does not constitute a legally binding agreement. The content presented in the roadmap is subject to change without notice, and any reliance on its accuracy or completeness is at the reader\'s own risk. The organization and its representatives shall not be held liable for any damages or losses arising from the use or interpretation of the roadmap.'
              }
            />
          ) : (
            <></>
          )}
        </div>
      </div>
      <QuartersListData data={data} />
    </div>
  );
};

export default Quarters;
