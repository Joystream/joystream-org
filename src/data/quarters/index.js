import quarters23_24 from './2023-2024.json';
import quarters23_24_v2 from './2023-2024_v2.json';

import playIcon from '../../assets/svg/roadmap/play.svg';
import searchIcon from '../../assets/svg/roadmap/search.svg';
import visibilityIcon from '../../assets/svg/roadmap/visibility.svg';
import creatorTokensIcon from '../../assets/svg/roadmap/creator-tokens.svg';
import contentIcon from '../../assets/svg/roadmap/content.svg';
import monitorIcon from '../../assets/svg/roadmap/monitor.svg';
import listIcon from '../../assets/svg/roadmap/list.svg';
import dollarSignIcon from '../../assets/svg/roadmap/dollar-sign.svg';
import lockIcon from '../../assets/svg/roadmap/lock.svg';
import communityIcon from '../../assets/svg/roadmap/community.svg';
import gearIcon from '../../assets/svg/roadmap/gear.svg';

import stakeIcon from '../../assets/svg/roadmap/icon 1 staking module.svg';
import exchangeIcon from '../../assets/svg/roadmap/icon 2 more exchanges.svg';
import contentMarketingIcon from '../../assets/svg/roadmap/icon 3 content marketing.svg';
import tipBotIcon from '../../assets/svg/roadmap/icon 4 js discord tip bot.svg';
import stablecoinIcon from '../../assets/svg/roadmap/icon 5 stablecoin treasury.svg';
import bountyIcon from '../../assets/svg/roadmap/icon 6 bounties program.svg';
import ambassadorIcon from '../../assets/svg/roadmap/icon 7 creator ambassador program.svg';
import mobileDesignIcon from '../../assets/svg/roadmap/icon 8 mobile design for pioneer.svg';
import emailNotificationIcon from '../../assets/svg/roadmap/icon 9 pioneer email notifications.svg';
import contentDeliveryIcon from '../../assets/svg/roadmap/icon 10 content delivery improvements.svg';
import recommendIcon from '../../assets/svg/roadmap/icon 11 gleev recommended content V1.svg';
import dashboardIcon from '../../assets/svg/roadmap/icon 12 js project overview dashboard.svg';
import subscanIcon from '../../assets/svg/roadmap/icon 13 subscan block explorer improvements.svg';
import financialIcon from '../../assets/svg/roadmap/icon 14 pioneer financials page.svg';
import curatorIcon from '../../assets/svg/roadmap/icon 15 content curator tooling.svg';
import walletIcon from '../../assets/svg/roadmap/icon 16 wallet implementations.svg';
import thumbnailIcon from '../../assets/svg/roadmap/icon 17 automated thumbnail generation.svg';
import forumLabelIcon from '../../assets/svg/roadmap/icon 18 pioneer forum & proposal label system.svg';
import governanceIcon from '../../assets/svg/roadmap/icon 19 governance tooling.svg';
import cliIcon from '../../assets/svg/roadmap/icon 20 js cli improvements.svg';
import dappIcon from '../../assets/svg/roadmap/icon 21 dApp OperatorDeveloper Grants & Support.svg';
import nonVideoIcon from '../../assets/svg/roadmap/icon 22 Non-video Content Uploads.svg';
import premiumIcon from '../../assets/svg/roadmap/icon 23 Premium Video Comments & Tips.svg';
import channelPayoutIcon from '../../assets/svg/roadmap/icon 24 DAO Creator Channel Payout tooling improvements.svg';
import wgManagementIcon from '../../assets/svg/roadmap/icon 25 Pioneer Working Group Management Module.svg';
import bridgeIcon from '../../assets/svg/roadmap/icon 26 Joystream  Ethereum Bridging Solution.svg';
import smartphoneIcon from '../../assets/svg/roadmap/icon 28 Smartphone App for AtlasGleev.svg';
import nftIcon from '../../assets/svg/roadmap/icon 29 NFT Improvements - V1.svg';
import stakePoolIcon from '../../assets/svg/roadmap/icon 30 Staking Nomination Pools.svg';
import sdkIcon from '../../assets/svg/roadmap/icon 31 Joystream SDK.svg';
import videoCommunityIcon from '../../assets/svg/roadmap/icon 32 Video Communities  No-tech App creation.svg';
import contentGatingIcon from '../../assets/svg/roadmap/icon 33 Premium Content Gating Features.svg';
import resolutionsIcon from '../../assets/svg/roadmap/icon 34 Multiple Video Resolutions.svg';
import metamaskSnapIcon from '../../assets/svg/roadmap/icon 35 Metamask Snap Development.svg';



export const iconMap = {
  play: playIcon,
  search: searchIcon,
  visibility: visibilityIcon,
  'creator-tokens': creatorTokensIcon,
  content: contentIcon,
  monitor: monitorIcon,
  list: listIcon,
  'dollar-sign': dollarSignIcon,
  lock: lockIcon,
  community: communityIcon,
  gear: gearIcon,

  stake: stakeIcon,
  exchange: exchangeIcon,
  contentMarketing: contentMarketingIcon,
  tipBot: tipBotIcon,
  stablecoin: stablecoinIcon,
  bounty: bountyIcon,
  ambassador: ambassadorIcon,
  mobileDesign: mobileDesignIcon,
  emailNotification: emailNotificationIcon,
  contentDelivery: contentDeliveryIcon,
  recommend: recommendIcon,
  dashboard: dashboardIcon, 
  subscan: subscanIcon,
  financial: financialIcon,
  curator: curatorIcon,
  wallet: walletIcon,
  thumbnail: thumbnailIcon,
  forumLabel: forumLabelIcon,
  governance: governanceIcon,
  cli: cliIcon,
  dapp: dappIcon,
  nonVideo: nonVideoIcon,
  premium: premiumIcon,
  channelPayout: channelPayoutIcon,
  wgManagement: wgManagementIcon,
  bridge: bridgeIcon,
  smartphone: smartphoneIcon,
  nft: nftIcon,
  stakePool: stakePoolIcon,
  sdk: sdkIcon,
  videoCommunity: videoCommunityIcon,
  contentGating: contentGatingIcon,
  resolutions: resolutionsIcon,
  metamaskSnap: metamaskSnapIcon  
  
};

export default [
  { select: { title: 'Version 1', subtitle: '2023-2024 (v1)' }, name: '2023-2024 v1', value: quarters23_24, isNewest: false  },
   { select: { title: 'Version 2', subtitle: '2023-2024 (v2)' }, name: '2023-2024 v2', value: quarters23_24_v2, isNewest: true  },
];
