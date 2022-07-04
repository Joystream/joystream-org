import React from 'react';

import { ReactComponent as DAO } from '../../../assets/svg/primer/dao.svg';
import { ReactComponent as Council } from '../../../assets/svg/primer/council.svg';
import { ReactComponent as WorkingGroups } from '../../../assets/svg/primer/working-groups.svg';
import { ReactComponent as Bounties } from '../../../assets/svg/primer/bounties.svg';

import './style.scss';

// PRIMER TODO: Add backgrounds behind the logos/icons. Maybe make it more "pixel-perfect"

const JoystreamDAO = ({ t }) => {
  return (
    <div className='PrimerPage__joystreamDAO-wrapper'>
      <div className='PrimerPage__joystreamDAO'>
        <div className='PrimerPage__joystreamDAO__future-work'>
          <div className='PrimerPage__joystreamDAO__future-work__content'>
            <p className='PrimerPage__joystreamDAO__future-work__section-title'>{t('primer.joystreamDAO.sectionTitle')}</p>
            <h2 className='PrimerPage__joystreamDAO__future-work__title'>{t('primer.joystreamDAO.title')}</h2>
            <p className='PrimerPage__joystreamDAO__future-work__text'>{t('primer.joystreamDAO.subtitle')}</p>
          </div>
          <div className='PrimerPage__joystreamDAO__future-work__image'>
            <DAO />
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
        {/* <div className='PrimerPage__video-platform__new-platform'>
          <div className='PrimerPage__video-platform__new-platform__content'>
            <p className='PrimerPage__video-platform__new-platform__section-title'>{t('primer.whyWeExist.sectionTitle')}</p>
            <h2 className='PrimerPage__video-platform__new-platform__title'>{t('primer.whyWeExist.newVideoPlatform.title')}</h2>
            <p className='PrimerPage__video-platform__new-platform__text'>{t('primer.whyWeExist.newVideoPlatform.subtitle')}</p>
          </div>
          <div className='PrimerPage__video-platform__new-platform__image'>
            <YoutubeToken />
          </div>
        </div>
        <div className='PrimerPage__video-platform__atlas'>
          <h3 className='PrimerPage__video-platform__atlas__title'>{t('primer.whyWeExist.atlas.title')}</h3>
          <p className='PrimerPage__video-platform__atlas__text'>{t('primer.whyWeExist.atlas.text')}</p>
          <img className='PrimerPage__video-platform__atlas__image' src={AtlasOverview} />
        </div>
        <div className='PrimerPage__video-platform__monetisation'>{t('primer.whyWeExist.monetisation')}</div>
        <div className='PrimerPage__video-platform__nfts'>
         <div className='PrimerPage__video-platform__nfts__image'>
            <VideoNFTs />
          </div>
          <div className='PrimerPage__video-platform__nfts__content'>
            <h2 className='PrimerPage__video-platform__nfts__title'>{t('primer.whyWeExist.videoNFTs.title')}</h2>
            <p className='PrimerPage__video-platform__nfts__text'>{t('primer.whyWeExist.videoNFTs.text')}</p>
          </div>
        </div>
        <div className='PrimerPage__video-platform__tokens'>
          <div className='PrimerPage__video-platform__tokens__content'>
            <h2 className='PrimerPage__video-platform__tokens__title'>{t('primer.whyWeExist.creatorTokens.title')}</h2>
            <p className='PrimerPage__video-platform__tokens__text'>{t('primer.whyWeExist.creatorTokens.text')}</p>
          </div>
          <div className='PrimerPage__video-platform__tokens__image'>
            <CreatorTokens />
          </div>
        </div>
        <div className='PrimerPage__video-platform__sharing'>{t('primer.whyWeExist.community')}</div> */}
      </div>
    </div>
  );
};

export default JoystreamDAO;