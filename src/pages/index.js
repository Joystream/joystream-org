import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation, useI18next } from 'gatsby-plugin-react-i18next';
import BaseLayout from '../components/_layouts/Base';
import SiteMetadata from '../components/SiteMetadata';
import useAxios from '../utils/useAxios';

// components
import Hero from '../components/index-page/Hero';
import Payouts from '../components/index-page/Payouts';
import VideoNFTs from '../components/index-page/VideoNFTs';
import CreatorTokens from '../components/index-page/CreatorTokens';
import YoutubeSync from '../components/index-page/YoutubeSync';
import Manifesto from '../components/index-page/Manifesto';
import JoystreamDAO from '../components/index-page/JoystreamDAO';
import Jsgenesis from '../components/index-page/Jsgenesis';
import AvailableActivities from '../components/index-page/AvailableActivities';
import Ecosystem from '../components/index-page/Ecosystem';

import './style.scss';

const data = {
  nfts: [
    {
      nftTitle: 'Happy New Year, Joystream',
      channelName: 'Joystream and beyond',
      joyAmount: '30',
      lastSaleDate: '2023-04-04T00:52:06.001Z',
      imageUrl: 'https://dp.0x2bc.com/distributor/api/v1/assets/1011',
      videoUrl: 'https://gleev.xyz/video/421',
    },
    {
      nftTitle: 'Nym connect',
      channelName: 'Crypto',
      joyAmount: '18',
      lastSaleDate: '2023-04-04T00:51:12.000Z',
      imageUrl: 'https://dp.0x2bc.com/distributor/api/v1/assets/115',
      videoUrl: 'https://gleev.xyz/video/15',
    },
    {
      nftTitle: 'Собака кусака',
      channelName: 'Luna',
      joyAmount: '250',
      lastSaleDate: '2023-04-04T00:40:00.000Z',
      imageUrl: 'https://dp.0x2bc.com/distributor/api/v1/assets/3377',
      videoUrl: 'https://gleev.xyz/video/1298',
    },
    {
      nftTitle: 'Joystream memes (by crew3 sprinters)',
      channelName: 'Joystream and beyond',
      joyAmount: '2000',
      lastSaleDate: '2023-04-03T02:17:48.000Z',
      imageUrl: 'https://dp.0x2bc.com/distributor/api/v1/assets/2877',
      videoUrl: 'https://gleev.xyz/video/1059',
    },
    {
      nftTitle: 'My Joystream Meme #3',
      channelName: 'Songoku Memes Collection',
      joyAmount: '888',
      lastSaleDate: '2023-04-01T13:32:24.001Z',
      imageUrl: 'https://dp.0x2bc.com/distributor/api/v1/assets/767',
      videoUrl: 'https://gleev.xyz/video/310',
    },
    {
      nftTitle: 'Nicetomeetyou',
      channelName: 'Cryptocurrency that anyone can learn',
      joyAmount: '1',
      lastSaleDate: '2023-04-01T13:24:12.001Z',
      imageUrl: 'https://dp.0x2bc.com/distributor/api/v1/assets/1754',
      videoUrl: 'https://gleev.xyz/video/682',
    },
    {
      nftTitle: 'Iamaboyyouareagirl',
      channelName: 'Cryptocurrency that anyone can learn',
      joyAmount: '1',
      lastSaleDate: '2023-04-01T13:23:30.001Z',
      imageUrl: 'https://dp.0x2bc.com/distributor/api/v1/assets/1750',
      videoUrl: 'https://gleev.xyz/video/680',
    },
    {
      nftTitle: 'ATH',
      channelName: 'Psychedelic',
      joyAmount: '1000',
      lastSaleDate: '2023-03-29T07:02:06.000Z',
      imageUrl: 'https://dp.0x2bc.com/distributor/api/v1/assets/1951',
      videoUrl: 'https://gleev.xyz/video/760',
    },
    {
      nftTitle: 'Helloeveryone',
      channelName: 'Cryptocurrency that anyone can learn',
      joyAmount: '1',
      lastSaleDate: '2023-03-26T23:03:36.000Z',
      imageUrl: 'https://dp.0x2bc.com/distributor/api/v1/assets/1746',
      videoUrl: 'https://gleev.xyz/video/679',
    },
    {
      nftTitle: 'Azuki',
      channelName: 'The best NFT',
      joyAmount: '17',
      lastSaleDate: '2023-03-17T14:48:36.000Z',
      imageUrl: 'https://dp.0x2bc.com/distributor/api/v1/assets/2179',
      videoUrl: 'https://gleev.xyz/video/838',
    },
  ],
  proposals: [
    {
      title: 'Validator increase post-mortem',
      status: 'Executed',
      link: 'https://pioneerapp.xyz/#/proposals/preview/234',
      img: 'https://atlas-services.joystream.org/avatars/migrated/2.webp',
      statusSetAtTime: '2023-04-05T14:00:30.001Z',
      createdAt: '2023-04-04T08:53:00.001Z',
    },
    {
      title: 'Refill APPS WG Budget',
      status: 'Executed',
      link: 'https://pioneerapp.xyz/#/proposals/preview/236',
      img: 'https://atlas-services.joystream.org/avatars/4d05d8c0-55fd-4f2a-8cac-bb904a0b8fe3.webp',
      statusSetAtTime: '2023-04-05T11:08:24.000Z',
      createdAt: '2023-04-05T07:54:06.001Z',
    },
    {
      title: 'APPS Working Group Lead Opening',
      status: 'Executed',
      link: 'https://pioneerapp.xyz/#/proposals/preview/235',
      img: 'https://atlas-services.joystream.org/avatars/4d05d8c0-55fd-4f2a-8cac-bb904a0b8fe3.webp',
      statusSetAtTime: '2023-04-05T08:38:30.001Z',
      createdAt: '2023-04-04T17:23:54.001Z',
    },
    {
      title: 'Term 8 BWG Budget',
      status: 'Executed',
      link: 'https://pioneerapp.xyz/#/proposals/preview/230',
      img: 'https://atlas-services.joystream.org/avatars/migrated/4406.webp',
      statusSetAtTime: '2023-04-04T11:44:12.000Z',
      createdAt: '2023-04-03T09:51:30.002Z',
    },
    {
      title: 'Refill HR Budget',
      status: 'Executed',
      link: 'https://pioneerapp.xyz/#/proposals/preview/229',
      img: 'https://atlas-services.joystream.org/avatars/migrated/2098.webp',
      statusSetAtTime: '2023-04-04T10:22:30.000Z',
      createdAt: '2023-04-03T09:29:18.000Z',
    },
    {
      title: 'Key Performance Indicators',
      status: 'Deciding',
      link: 'https://pioneerapp.xyz/#/proposals/preview/233',
      img: 'https://atlas-services.joystream.org/avatars/migrated/515.webp',
      statusSetAtTime: '2023-04-04T06:23:18.001Z',
      createdAt: '2023-04-04T06:23:18.001Z',
      timeLeftUntil: '2023-04-07T06:23:00.001Z',
    },
    {
      title: 'Checkpoints',
      status: 'Deciding',
      link: 'https://pioneerapp.xyz/#/proposals/preview/232',
      img: 'https://atlas-services.joystream.org/avatars/migrated/515.webp',
      statusSetAtTime: '2023-04-04T04:54:12.000Z',
      createdAt: '2023-04-04T04:54:12.000Z',
      timeLeftUntil: '2023-04-07T04:54:00.000Z',
    },
    {
      title: 'Payout for Temporary QA testers in Term7',
      status: 'Executed',
      link: 'https://pioneerapp.xyz/#/proposals/preview/231',
      img: 'https://atlas-services.joystream.org/avatars/migrated/4406.webp',
      statusSetAtTime: '2023-04-03T21:06:30.000Z',
      createdAt: '2023-04-03T13:52:48.000Z',
    },
    {
      title: 'Refill Forum budget ',
      status: 'Executed',
      link: 'https://pioneerapp.xyz/#/proposals/preview/227',
      img: 'https://atlas-services.joystream.org/avatars/migrated/2098.webp',
      statusSetAtTime: '2023-04-03T13:41:18.001Z',
      createdAt: '2023-04-03T09:19:30.001Z',
    },
    {
      title: 'Refill Storage Budget (correct proposal)',
      status: 'Executed',
      link: 'https://pioneerapp.xyz/#/proposals/preview/228',
      img: 'https://atlas-services.joystream.org/avatars/migrated/2098.webp',
      statusSetAtTime: '2023-04-03T13:40:00.000Z',
      createdAt: '2023-04-03T09:20:42.000Z',
    },
  ],
};

const IndexPage = () => {
  const { t } = useTranslation();
  const { language } = useI18next();

  // const [data, loading, error] = useAxios('status.joystream.org/carousel-data');

  return (
    <BaseLayout t={t} mainnetReminder={true}>
      <SiteMetadata
        lang={language}
        title={t('siteMetadata.title')}
        description={t('landing.siteMetadata.description')}
      />

      <Hero t={t} />

      <Ecosystem t={t} />

      <Payouts t={t} />

      <VideoNFTs t={t} nftData={data?.nfts} />

      <CreatorTokens t={t} />

      {/* <YoutubeSync t={t}/> */}

      <Manifesto t={t} />

      <AvailableActivities t={t} />

      <JoystreamDAO t={t} proposalsData={data?.proposals} />

      {/* <Jsgenesis t={t} /> */}
    </BaseLayout>
  );
};

export { IndexPage };
export default IndexPage;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      ...LanguageQueryFields
    }
  }
`;
