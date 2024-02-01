import React from 'react';

import DAO from '../../../assets/svg/primer/dao.svg';
import { ReactComponent as Council } from '../../../assets/svg/primer/council.svg';
import { ReactComponent as WorkingGroups } from '../../../assets/svg/primer/working-groups.svg';
import { ReactComponent as Bounties } from '../../../assets/svg/primer/bounties.svg';

import './style.scss';

const JoystreamDAO = ({ t }) => {
  return (
    <div className='PrimerPage__joystreamDAO-wrapper' id="primer-governance">
      <div className='PrimerPage__joystreamDAO'>
        <div className='PrimerPage__joystreamDAO__future-work'>
          <div className='PrimerPage__joystreamDAO__future-work__content'>
            <p className='PrimerPage__joystreamDAO__future-work__section-title'>{t('primer.joystreamDAO.sectionTitle')}</p>
            <h2 className='PrimerPage__joystreamDAO__future-work__title'>{t('primer.joystreamDAO.title')}</h2>
            <p className='PrimerPage__joystreamDAO__future-work__text'>{t('primer.joystreamDAO.subtitle')}</p>
          </div>
          <div className='PrimerPage__joystreamDAO__future-work__image'>
            <img src={DAO} alt=""/>
          </div>
        </div>
        <div className='PrimerPage__joystreamDAO__everyone-earns'>{t('primer.joystreamDAO.everyoneEarns')}</div>
        <div className='PrimerPage__joystreamDAO__council'>
          <div className='PrimerPage__joystreamDAO__council__image'>
            <Council />
          </div>
          <div className='PrimerPage__joystreamDAO__council__content'>
            <h2 className='PrimerPage__joystreamDAO__council__title'>{t('primer.joystreamDAO.council.title')}</h2>
            <p className='PrimerPage__joystreamDAO__council__text'>{t('primer.joystreamDAO.council.text')}</p>
          </div>
        </div>
        <div className='PrimerPage__joystreamDAO__working-groups'>
          <div className='PrimerPage__joystreamDAO__working-groups__image'>
            <WorkingGroups />
          </div>
          <div className='PrimerPage__joystreamDAO__working-groups__content'>
            <h2 className='PrimerPage__joystreamDAO__working-groups__title'>{t('primer.joystreamDAO.workingGroups.title')}</h2>
            <p className='PrimerPage__joystreamDAO__working-groups__text'>{t('primer.joystreamDAO.workingGroups.text')}</p>
          </div>
        </div>
        <div className='PrimerPage__joystreamDAO__bounties'>
          <div className='PrimerPage__joystreamDAO__bounties__image'>
            <Bounties />
          </div>
          <div className='PrimerPage__joystreamDAO__bounties__content'>
            <h2 className='PrimerPage__joystreamDAO__bounties__title'>{t('primer.joystreamDAO.bounties.title')}</h2>
            <p className='PrimerPage__joystreamDAO__bounties__text'>{t('primer.joystreamDAO.bounties.text')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoystreamDAO;