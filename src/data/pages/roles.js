import React from 'react';
import Link from '../../components/Link';
import { ReactComponent as ValidatorImage } from '../../assets/svg/active-validators.svg';
import { ReactComponent as CouncilMemberImage } from '../../assets/svg/council-member.svg';
import { ReactComponent as StorageProviderImage } from '../../assets/svg/storage.svg';
import { ReactComponent as MembershipScreenerImage } from '../../assets/svg/screener.svg';
import { ReactComponent as MembershipCuratorImage } from '../../assets/svg/membership-curator.svg';
import { ReactComponent as ContentCuratorImage } from '../../assets/svg/content-curator.svg';
import { ReactComponent as ContentCreatorImage } from '../../assets/svg/content-creator.svg';
import { ReactComponent as BandwidthProviderImage } from '../../assets/svg/bandwidth-provider.svg';

const rolesData = {
  active: [
    {
      image: ValidatorImage,
      title: 'Validator',
      overview: `The Joystream platform state lives on a blockchain consensus system.
    This consensus system is a variant of classical BFT consensus combined
    with Proof-of-Stake to determine voting power. A validator is an actor
    which checks the validity of newly constructed blocks, proposes new blocks
    and participates in the consensus process for committing new block to the chain.
    This role has a purpose very similar to the miners in the Bitcoin blockchain.
    Importantly, anyone can fully check the validity of the blockchain,
    not just validators, and this is called validation.`,
      responsibilites: [
        'Run and maintain screening nodes that are always available and performant',
        'Help enforce the consensus rules of the network',
      ],
      requirements: [
        'Experienced with how to setup and maintain high performance IT infrastructure',
        `Access to highly performant and reliable IT infrastructure, with high storage,
    (up & down) bandwidth and processing capacity`,
        'Able to securely store keys hot keys',
        'Hold sufficient amount of the native platform token to put at stake',
      ],
      tutorialLink:
        'https://github.com/Joystream/helpdesk/tree/master/roles/validators',
      questionLink: 'mailto:hello@jsgenesis.com',
      formAction: '',
    },
    {
      image: CouncilMemberImage,
      title: 'Council Member',
      overview:
        /* eslint-disable*/
        'At the heart of the governance process on the platform is the proposal system, which allows anyone to submit some suggestion for changing the state or policy of the platform in some way. These proposals are processed and voted on by a council, where the participants are referred to as council members. A set on the council is won through an election process, and lasts for some period of time until a new election.',
      /* eslint-enable*/
      responsibilites: [
        'Discuss the meaning and merits of incoming proposals, covering a broad range of topics',
        'Vote on proposals',
        'Represent the community members and your constituency to make day to day operations decisions',
      ],
      requirements: [
        /* eslint-disable*/
        'Proficient with basic data analysis and sufficient reputation and standing within the community to earn supporting votes in elections from other platform members',
        /* eslint-enable*/
        'A deep understanding of the Joystream platform structure, function and resource allocation',
        'Hold sufficient amount of the native platform token to put at stake',
      ],
      tutorialLink:
        'https://github.com/Joystream/helpdesk/tree/master/roles/council-members',
      questionLink: 'mailto:hello@jsgenesis.com',
      formAction: '',
    },
    {
      image: StorageProviderImage,
      title: 'Storage Provider',
      overview:
        /* eslint-disable*/
        'There are critical platform assets that do not live on the blockchain, such as images and content media. The integrity of these assets is secured by the chain, but a separate set of storage and distribution nodes enabled uploading and downloading of such data. The storage provider is involved this activity, specifically storing large quantities of data.',
      /* eslint-enable*/
      responsibilites: [
        /* eslint-disable*/
        'Run an and maintain storage nodes that store very large quantities of static data, synchronize with other storage nodes, shares data with distributors, and accepts inbound uploads from end users',
        /* eslint-enable*/
      ],
      requirements: [
        'Experienced with how to setup and maintain high performance IT infrastructure',
        'Access to highly performant and reliable IT infrastructure with high storage capacity',
        'Hold sufficient amount of the native platform token to put at stake',
      ],
      tutorialLink:
        'https://github.com/Joystream/helpdesk/tree/master/roles/storage-providers',
      questionLink: 'mailto:hello@jsgenesis.com',
      formAction: '',
    },
  ],
  upcoming: [
    {
      image: MembershipScreenerImage,
      title: 'Membership Screener',
      overview:
        /* eslint-disable*/
        'A membership is an integrated representation of identifying information and associated activities of an actor on the platform. The direct way of establishing membership will be to simply pay a one time fee. However, since its currently challenging for many prospective non-technical end users to obtain, store and use crypto assets, there will be a way for users to get a membership for free, which will not require any tokens in order to use the platform in a limited capacity. The membership screener is the role for the participants responsible for granting such memberships, while screening for Sybill attackers and abusers.',
      /* eslint-enable*/
      responsibilites: [
        'Run and maintain screening nodes that are always available and performant',
        <>
          Collaborate with{' '}
          <Link to="Membership-Curator">Membership Curators</Link> and
          <Link to="Builders">Builders</Link> to improve screening mechanisms by
          discussing screening techniques, sharing traffic information
        </>,
        'Be responsive and reactive to changing circumstances',
      ],
      requirements: [
        'Experienced with how to setup and maintain high performance IT infrastructure',
        /* eslint-disable*/
        'Access to highly performant and reliable IT infrastructure, with high storage, (up & down) bandwidth and processing capacity',
        /* eslint-enable*/
        'Familiarity with how online platforms are attacked through botnets, IP anonymization, automated agents, etc.',
        'Hold sufficient amount of the native platform token to put at stake',
      ],
      formAction: '',
    },
    {
      image: MembershipCuratorImage,
      title: 'Membership Curator',
      overview: (
        <>
          A membership is an integrated representation of identifying
          information and associated activities of an actor on the platform. It
          is possible to create memberships for free through the screeners,
          described <Link to="Membership-Screener"> above</Link>. Since this
          invariably be an imperfect process, there must be some means by which
          bad conduct and fake accounts can be disabled or removed. This is the
          task of the membership curators.
        </>
      ),
      responsibilites: [
        'Monitor platform level activity for abuse and collusion',
        /* eslint-disable*/
        'Propose changes to status of memberships which are identified, and participate in any dispute process which may follow',
        /* eslint-enable*/
        <>
          Collaborate with <Link to="Membership-Screener"> Screeners</Link> and{' '}
          <Link to="Builder"> Builders</Link> to improve tools for identifying
          such members
        </>,
      ],
      requirements: [
        'Proficient with basic data analysis and scripting',
        'A deep understanding of the Joystream platform structure, function and attack vectors',
        'Hold sufficient amount of the native platform token to put at stake',
      ],
      formAction: '',
    },
    {
      image: ContentCuratorImage,
      title: 'Content Curator',
      overview:
        /* eslint-disable*/
        'All of the media content published on the platform lives in an on chain content directory. There is a range of different content types, and each type has a schema for a rich description of its structure, function and policies. For the effective use of of content, for example in rendering, discovery and monetization, it is critical to ensure the validity of the published information for all content. In particular, it is also important to resolve possible disputes about ownership and presence of any piece of content on the platform. It is the task of the content curators to do the work involved in processes that address these objectives.',
      /* eslint-enable*/
      responsibilites: [
        /* eslint-disable*/
        'Monitor the publishing of new content into the content directoyr, and respond to reports about contested publications',
        /* eslint-enable*/
        'Adjudicate possible dispute processes resulting from reports from users',
        'Update information on content to be accurate',
        <>
          Collaborate with <Link to="Builder"> Builders</Link> to improve both
          tools, and user facing experiences, to improve the integrity of the
          content directory
        </>,
      ],
      requirements: [
        'Fairly adcudicate disputes, and communicate in clear and transparent way with stakeholders and participants',
        'Hold sufficient amount of the native platform token to put at stake',
      ],
      formAction: '',
    },
    {
      image: ContentCreatorImage,
      title: 'Content Creator',
      overview:
        /* eslint-disable*/
        'As a video platform, one of the most important platform assets is the content published on the platform. Since video is such a flexible media type, which can encompass a wide range of content categories, it is the primary focus, but the intention is to support a broader range of content types over time. The content creators are those involved in creating, publishing and monetizing content on the platform.',
      /* eslint-enable*/
      responsibilites: ['Publish content and build an audience'],
      requirements: [
        'Have the right to publish existing or new content to the platform',
        'Hold sufficient amount of the native platform token to put at stake',
      ],
      formAction: '',
    },
    {
      image: BandwidthProviderImage,
      title: 'Bandwidth Provider',
      overview:
        /* eslint-disable*/
        'There are critical platform assets that do not live on the blockchain, such as images and content media. The integrity of these assets is secured by the chain, but a separate set of storage and distribution nodes enabled uploading and downloading of such data. The bandwidth provider is involved this activity, specifically distributing static data to end users at scale.',
      /* eslint-enable*/
      responsibilites: [
        /* eslint-disable*/
        'Run and maintain distributor nodes that delivers large volumes of upstream data to a large number of simultaneous end users',
        /* eslint-enable*/
      ],
      requirements: [
        'Experienced with how to setup and maintain high performance IT infrastructure',
        /* eslint-disable*/
        'Access to highly performant and reliable IT infrastructure, with high storage capacity and a lot of upstream capacity',
        /* eslint-enable*/
        'Located within certain bounds to designated geographic areas, in order to limit latency',
        'Hold sufficient amount of the native platform token to put at stake',
      ],
      formAction: '',
    },
  ],
};

export { rolesData };
