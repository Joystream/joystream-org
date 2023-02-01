import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { ReactComponent as LinkIcon } from '../../../assets/svg/link.svg';
import QuarksLabColor from '../../../assets/images/auditor-logos/quarksLab/Color.png';
// TODO: Update to Mono when the logo is done!
import QuarksLabMono from '../../../assets/images/auditor-logos/quarksLab/Mono.png';
import SRLColor from '../../../assets/images/auditor-logos/SRL/Color.png';
import SRLMono from '../../../assets/images/auditor-logos/SRL/Mono.png';

import './style.scss';

const Auditors = () => {
  const { t } = useTranslation();

  return (
    <section className="AboutPage__auditors-wrapper">
      <div className="AboutPage__auditors">
        <header className="AboutPage__auditors__header">
          <span className="AboutPage__auditors__header__section-title">SAFETY & SECURITY</span>
          <h2 className="AboutPage__auditors__header__title">Joystream blockchain audited by top Substrate auditors</h2>
        </header>
        <div className="AboutPage__auditors__list">
          <div className="AboutPage__auditors__list-item">
            <div className="AboutPage__auditors__list-item__image-wrapper">
              <img
                src={SRLColor}
                className="AboutPage__auditors__list-item__image AboutPage__auditors__list-item__image--color AboutPage__auditors__list-item__image--srl"
                alt=""
              />
              <img
                src={SRLMono}
                className="AboutPage__auditors__list-item__image AboutPage__auditors__list-item__image--mono AboutPage__auditors__list-item__image--srl"
                alt=""
              />
            </div>
            <a
              href="https://github.com/Joystream/audits/tree/main/SRL-Jsgenesis_baseline_security_assurance_joystream-2021"
              target="_blank"
            >
              <div className="AboutPage__auditors__list-item__link">
                Report
                <LinkIcon className="AboutPage__auditors__list-item__link__icon" />
              </div>
            </a>
          </div>
          <div className="AboutPage__auditors__list-item">
            <div className="AboutPage__auditors__list-item__image-wrapper">
              <img
                src={QuarksLabColor}
                className="AboutPage__auditors__list-item__image AboutPage__auditors__list-item__image--color AboutPage__auditors__list-item__image--quarks"
                alt=""
              />
              <img
                src={QuarksLabMono}
                className="AboutPage__auditors__list-item__image AboutPage__auditors__list-item__image--mono AboutPage__auditors__list-item__image--quarks"
                alt=""
              />
            </div>
            <a
              href="https://github.com/Joystream/audits/blob/main/Quarkslab-22-05-982-REP/22-05-982-REP.pdf"
              target="_blank"
            >
              <div className="AboutPage__auditors__list-item__link">
                Report
                <LinkIcon className="AboutPage__auditors__list-item__link__icon" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Auditors;
