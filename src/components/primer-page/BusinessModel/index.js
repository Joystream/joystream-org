import React from 'react';

import { ReactComponent as JOYValueCaptureIcon } from '../../../assets/svg/primer/capture-value.svg';
import { ReactComponent as Gateways } from '../../../assets/svg/primer/gateways.svg';
import { ReactComponent as MintingAndSellingNFTs } from '../../../assets/svg/primer/minting-selling-nfts.svg';
import { ReactComponent as SellingCreatorTokens } from '../../../assets/svg/primer/selling-creator-tokens.svg';

import './style.scss';

const BusinessModel = ({ t }) => {
  return (
    <div className='PrimerPage__business-model-wrapper' id="primer-business-model">
      <div className='PrimerPage__business-model'>
        <div className='PrimerPage__business-model__capture-value'>
          <div className='PrimerPage__business-model__capture-value__image'>
            <JOYValueCaptureIcon />
          </div>
          <div className='PrimerPage__business-model__capture-value__content'>
            <p className='PrimerPage__business-model__capture-value__section-title'>{t('primer.businessModel.sectionTitle')}</p>
            <h2 className='PrimerPage__business-model__capture-value__title'>{t('primer.businessModel.title')}</h2>
            <p className='PrimerPage__business-model__capture-value__text'>{t('primer.businessModel.text')}</p>
          </div>
        </div>
        <div className='PrimerPage__business-model__gateways'>
          <div className='PrimerPage__business-model__gateways__content'>
            <h2 className='PrimerPage__business-model__gateways__title'>{t('primer.businessModel.gateways.title')}</h2>
            <p className='PrimerPage__business-model__gateways__text'>{t('primer.businessModel.gateways.text')}</p>
          </div>
          <div className='PrimerPage__business-model__gateways__image'>
            <Gateways />
          </div>
        </div>
        <div className='PrimerPage__business-model__minting-selling-nfts'>
          <div className='PrimerPage__business-model__minting-selling-nfts__image'>
            <MintingAndSellingNFTs />
          </div>
          <div className='PrimerPage__business-model__minting-selling-nfts__content'>
            <h2 className='PrimerPage__business-model__minting-selling-nfts__title'>{t('primer.businessModel.mintingAndSellingNFTs.title')}</h2>
            <p className='PrimerPage__business-model__minting-selling-nfts__text'>{t('primer.businessModel.mintingAndSellingNFTs.text')}</p>
          </div>
        </div>
        <div className='PrimerPage__business-model__selling-creator-tokens'>
          <div className='PrimerPage__business-model__selling-creator-tokens__content'>
            <h2 className='PrimerPage__business-model__selling-creator-tokens__title'>{t('primer.businessModel.creatorTokenSales.title')}</h2>
            <p className='PrimerPage__business-model__selling-creator-tokens__text'>{t('primer.businessModel.creatorTokenSales.text')}</p>
          </div>
          <div className='PrimerPage__business-model__selling-creator-tokens__image'>
            <SellingCreatorTokens />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessModel;