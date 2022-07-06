import React from 'react';

import { ReactComponent as YoutubeToken } from '../../../assets/svg/primer/youtube-token.svg';
import { ReactComponent as VideoNFTs } from '../../../assets/svg/primer/nfts.svg';
import { ReactComponent as CreatorTokens } from '../../../assets/svg/primer/creator-tokens.svg';

import AtlasOverview from '../../../assets/images/atlas-overview.png';

import './style.scss';

const VideoPlatform = ({ t }) => {
  return (
    <div className='PrimerPage__video-platform-wrapper' id='primer-why-we-exist'>
      <div className='PrimerPage__video-platform'>
        <div className='PrimerPage__video-platform__new-platform'>
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
          <img className='PrimerPage__video-platform__atlas__image' src={AtlasOverview} alt="Overview of the atlas video platform."/>
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
        <div className='PrimerPage__video-platform__sharing'>{t('primer.whyWeExist.community')}</div>
      </div>
    </div>
  );
};

export default VideoPlatform;