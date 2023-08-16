import React, { useState } from 'react';
import Button from '../../Button';
import { useTranslation } from 'react-i18next';

import './style.scss';
import Select from '../../Select';

import { ReactComponent as CopyLink } from '../../../assets/svg/copylink.svg';
import useAxios, { useGetFileName } from '../../../utils/useAxios';
import { GIT_FOLDER, GIT_REPOSITY, GIT_USER_NAME } from '../../../../gitconfig';

const Quarters = () => {
  ///////////////////////////////////////////////////////////
  ////             get quarters data               //////////
  ///////////////////////////////////////////////////////////

  const [names, gitLoading, gitError] = useGetFileName();

  const quarters = useAxios(
    `https://raw.githubusercontent.com/${GIT_USER_NAME}/${GIT_REPOSITY}/main/${GIT_FOLDER}/2023.json`
  );

  let quartersSelects = [];

  if (names && !gitLoading && !gitError) {
    quartersSelects = names.fileNames.map((name, index) => ({
      name: 'Version' + (names.fileNames.length - index).toString(),
      period:
        name + (names.fileNames.length === index ? '( Current)' : ' (Old)'),
    }));
  }
  const [email, setEmail] = useState('');
  const { t } = useTranslation();

  return (
    <div className="Quarters">
      <div className="Quarters__form-wrapper">
        <div className="Quarters__form">
          <Select
            className="Quarters__form__select"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          >
            {names && !gitLoading && !gitError ? (
              quartersSelects.map((option) => (
                <option
                  key={option.name}
                  value={option.period}
                  className="Quarters_form__select__items"
                >
                  {option.name}
                  {'\n'}
                  {option.period}
                </option>
              ))
            ) : (
              <option className="Quarters_form__select__loading">
                Loading ...
              </option>
            )}
          </Select>

          <Button className="Quarters__form__button" name="subscribe">
            {t('roadmap.copysharinglink')}
            <CopyLink className="Quarters__form__linkicon" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Quarters;
