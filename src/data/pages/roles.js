import React from 'react';
import Link from '../../components/Link';
import { sharedData } from '../../data/pages';
import { ReactComponent as ValidatorImage } from '../../assets/svg/active-validators.svg';
import { ReactComponent as CouncilMemberImage } from '../../assets/svg/council-member.svg';
import { ReactComponent as StorageProviderImage } from '../../assets/svg/platform-content-files.svg';
import { ReactComponent as MembershipScreenerImage } from '../../assets/svg/membership-screener.svg';
import { ReactComponent as MembershipCuratorImage } from '../../assets/svg/membership-curator.svg';
import { ReactComponent as ContentCuratorImage } from '../../assets/svg/content-curator.svg';
import { ReactComponent as ContentCreatorImage } from '../../assets/svg/content-creator.svg';
import { ReactComponent as BandwidthProviderImage } from '../../assets/svg/bandwidth-provider.svg';
import { ReactComponent as DiscoveryProviderImage } from '../../assets/svg/discovery-provider.svg';
import { ReactComponent as LiveStreamingProviderImage } from '../../assets/svg/live-streaming-provider.svg';
import { ReactComponent as BuilderImage } from '../../assets/svg/builder.svg';
import { ReactComponent as CommunicationModeratorImage } from '../../assets/svg/communication-moderator.svg';

const rolesData = {
  active: [
    {
      id: 'validator',
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
        'Able to securely store keys',
        'Hold sufficient amount of the native platform token to put at stake',
      ],
      tutorialLink: 'https://github.com/Joystream/helpdesk/tree/master/roles/validators',
      questionLink: `mailto:${sharedData.defaultEmail}`,
      formAction: 'https://joystream.us11.list-manage.com/subscribe/post?u=932de577aec9616d4516b4e0f&amp;id=26a32a8d8d',
    },
    {
      id: 'council-member',
      image: CouncilMemberImage,
      title: 'Council Member',
      overview: `At the heart of the governance process on the platform is the proposal system,
        which allows anyone to submit some suggestion for changing the state or
        policy of the platform in some way. These proposals are processed and voted on by a council,
        where the participants are referred to as council members. A seat on the council is
        won through an election process, and lasts for some period of time until a new election.`,
      responsibilites: [
        'Discuss the meaning and merits of incoming proposals, covering a broad range of topics',
        'Vote on proposals',
        'Represent the community members and your constituency to make day-to-day operations decisions',
      ],
      requirements: [
        `Proficiency with basic data analysis and sufficient reputation and standing within
        the community to earn supporting votes in elections from other platform members`,
        'A deep understanding of the Joystream platform structure, function and resource allocation',
        'Hold sufficient amount of the native platform token to put at stake',
      ],
      tutorialLink: 'https://github.com/Joystream/helpdesk/tree/master/roles/council-members',
      questionLink: `mailto:${sharedData.defaultEmail}`,
      formAction: 'https://joystream.us11.list-manage.com/subscribe/post?u=932de577aec9616d4516b4e0f&amp;id=51a3da04f8',
    },
    {
      id: 'storage-provider',
      image: StorageProviderImage,
      title: 'Storage Provider',
      overview: `There are critical platform assets that do not live on the blockchain,
        such as images and content media. The integrity of these assets is secured by the chain,
        but a separate set of storage and distribution nodes enables uploading and downloading of
        such data. The storage provider is involved this activity, specifically by storing large quantities of data.`,
      responsibilites: [
        `Run and maintain storage nodes that store very large quantities of static data,
        synchronize with other storage nodes, share data with distributors, and accepts
        inbound uploads from end users`,
      ],
      requirements: [
        'Experienced with how to setup and maintain high performance IT infrastructure',
        'Access to highly performant and reliable IT infrastructure with high storage capacity',
        'Hold sufficient amount of the native platform token to put at stake',
      ],
      tutorialLink: 'https://github.com/Joystream/helpdesk/tree/master/roles/storage-providers',
      questionLink: `mailto:${sharedData.defaultEmail}`,
      formAction: 'https://joystream.us11.list-manage.com/subscribe/post?u=932de577aec9616d4516b4e0f&amp;id=7733bde460',
    },
    {
      id: 'content-curator',
      image: ContentCuratorImage,
      title: 'Content Curator',
      overview: `All of the media content published on the platform lives in an on-chain content directory.
         There are a range of different content types, and each type has a schema for a rich
         description of its structure, function and policies. For the effective use of of content,
         for example in rendering, discovery and monetization, it is critical to ensure the validity
         of the published information for all content. In particular, it is also important to resolve
         possible disputes about ownership and presence of any piece of content on the platform.
         It is the task of the content curators to do the work involved in processes that address these objectives.`,
      responsibilites: [
        `Monitor the publishing of new content into the content directory,
        and respond to reports about contested publications`,
        'Adjudicate possible dispute processes resulting from reports from users',
        'Update information on content to be accurate',
        <>
          Collaborate with <Link href="#builder"> Builders</Link> to improve both tools, and user facing experiences, to
          improve the integrity of the content directory
        </>,
      ],
      requirements: [
        'Fairly adcudicate disputes, and communicate in clear and transparent way with stakeholders and participants',
        'Hold sufficient amount of the native platform token to put at stake',
      ],
      tutorialLink: 'https://github.com/Joystream/helpdesk/tree/master/roles/content-curators',
      questionLink: 'mailto:hello@jsgenesis.com',
      formAction: 'https://joystream.us11.list-manage.com/subscribe/post?u=932de577aec9616d4516b4e0f&amp;id=3877efbe93',
    },
    {
      id: 'content-creator',
      image: ContentCreatorImage,
      title: 'Content Creator',
      overview: `As a video platform, one of the most important platform assets is the content published
        on the platform. Since video is such a flexible media type, which can encompass a wide
        range of content categories, it is the primary focus. However, the intention is to support
        a broader range of content types over time. The content creators are those involved in
         creating, publishing and monetizing content on the platform.`,
      responsibilites: ['Publish content and build an audience'],
      requirements: [
        'Have the right to publish existing or new content to the platform',
        'Hold sufficient amount of the native platform token to put at stake',
      ],
      tutorialLink: 'https://github.com/Joystream/helpdesk/tree/master/roles/content-creators',
      questionLink: 'mailto:hello@jsgenesis.com',
      formAction: 'https://joystream.us11.list-manage.com/subscribe/post?u=932de577aec9616d4516b4e0f&amp;id=0ea466b90d',
    },
  ],
  upcoming: [
    {
      id: 'membership-screener',
      image: MembershipScreenerImage,
      title: 'Membership Screener',
      overview: `A membership is an integrated representation of identifying information
        and associated activities of an actor on the platform. The direct way of
        establishing membership will be to simply pay a one time fee. However, since its
        currently challenging for many prospective non-technical end users to obtain, store
        and use crypto assets, there will be a way for users to get a membership for free,
        which will not require any tokens in order to use the platform in a limited capacity.
        The membership screener is the role responsible for granting such
        memberships, while screening for Sybill attackers and abusers.`,
      responsibilites: [
        'Run and maintain screening nodes that are always available and performant',
        <>
          Collaborate with <Link href="#membership-curator">Membership Curators</Link> and
          <Link href="#builder"> Builders</Link> to improve screening mechanisms by discussing screening techniques,
          sharing traffic information
        </>,
        'Be responsive and reactive to changing circumstances',
      ],
      requirements: [
        'Experienced with how to setup and maintain high performance IT infrastructure',
        `Access to highly performant and reliable IT infrastructure,
        with high storage, (up & down) bandwidth and processing capacity`,
        'Familiarity with how online platforms are attacked through botnets, IP anonymization, automated agents, etc.',
        'Hold sufficient amount of the native platform token to put at stake',
      ],
      formAction: 'https://joystream.us11.list-manage.com/subscribe/post?u=932de577aec9616d4516b4e0f&amp;id=2a9bd4a3ed',
    },
    {
      id: 'membership-curator',
      image: MembershipCuratorImage,
      title: 'Membership Curator',
      overview: (
        <>
          A membership is an integrated representation of identifying information and associated activities of an actor
          on the platform. It is possible to create memberships for free through the screeners, described{' '}
          <Link href="#membership-screener"> above</Link>. Since this is invariably an imperfect process, there must be
          some means by which bad conduct and fake accounts can be disabled or removed. This is the task of the
          membership curators.
        </>
      ),
      responsibilites: [
        'Monitor platform level activity for abuse and collusion',
        `Propose changes to status of memberships which are identified,
        and participate in any dispute process which may follow`,
        <>
          Collaborate with <Link href="#membership-screener"> Screeners</Link> and{' '}
          <Link href="#builder"> Builders</Link> to improve tools for identifying such members
        </>,
      ],
      requirements: [
        'Proficient with basic data analysis and scripting',
        'A deep understanding of the Joystream platform structure, function and attack vectors',
        'Hold sufficient amount of the native platform token to put at stake',
      ],
      formAction: 'https://joystream.us11.list-manage.com/subscribe/post?u=932de577aec9616d4516b4e0f&amp;id=bd10fbb23f',
    },
    {
      id: 'bandwidth-provider',
      image: BandwidthProviderImage,
      title: 'Bandwidth Provider',
      overview: `There are critical platform assets that do not live on the blockchain, such as images
      and content media. The integrity of these assets is secured by the chain, but a separate
      set of storage and distribution nodes enable uploading and downloading of such data.
      The bandwidth provider is involved this activity,
        specifically by distributing static data to end users at scale.`,
      responsibilites: [
        'Run and maintain distributor nodes that deliver large volumes of upstream data to a large number ' +
          'of simultaneous end users',
      ],
      requirements: [
        'Experienced with how to setup and maintain high performance IT infrastructure',
        `Access to highly performant and reliable IT infrastructure, with high storage
        capacity and a lot of upstream capacity`,
        'Located within certain bounds to designated geographic areas, in order to limit latency',
        'Hold sufficient amount of the native platform token to put at stake',
      ],
      formAction: 'https://joystream.us11.list-manage.com/subscribe/post?u=932de577aec9616d4516b4e0f&amp;id=2d978eeb0c',
    },
    {
      id: 'discovery-provider',
      image: DiscoveryProviderImage,
      title: 'Discovery Provider',
      overview: `All of the content on the platform is in a designated content directory, and effectively navigating
        this directory requires a full copy of this directory. Moreover, in order to do things like search and
        context based recommendations one needs to apply some sort of heuristic on top of this directory,
        which is also some what sensitive abusive attempts to rank higher. The discovery providers play
        the role of responding to such discovery queries to end users, by combining light client inclusion
        proofs with local search and ranking policy heuristics.`,
      responsibilites: [
        `Run and maintain discovery nodes that respond to discovery-related queries by staying in
        sync with the content directory, and applying local ranking heuristics.`,
        <>
          Collaborate with <Link href="#builder">Builders</Link> to improve both tools, and user facing experiences, to
          improve the discovery experience
        </>,
      ],
      requirements: [
        'Experienced with how to setup and maintain high performance IT infrastructure',
        'Access to highly performant and reliable IT infrastructure',
        'Able to formulate, test and suggest new ranking heuristics for use by discovery provider nodes',
        'Hold sufficient amount of the native platform token to put at stake',
      ],
      formAction: 'https://joystream.us11.list-manage.com/subscribe/post?u=932de577aec9616d4516b4e0f&amp;id=766d15796d',
    },
    {
      id: 'live-streaming-provider',
      image: LiveStreamingProviderImage,
      title: 'Live Streaming Provider',
      overview: `The platform supports live video, allowing publisher to distribute content as it is created.
      The live streaming providers are responsible for directly, or indirectly from peer
      providers, taking a (transcoded) stream from the source publisher, and relaying it to end users.`,
      responsibilites: [
        'Run and maintain live streaming nodes that deliver large volumes of upstream data to a large number ' +
          'of simultaneous end users',
      ],
      requirements: [
        'Experienced with how to setup and maintain high performance IT infrastructure',
        'Access to highly performant and reliable IT infrastructure, with large amount of upstream bandwidth capacity.',
        'Located within certain bounds to designated geographic areas, in order to limit latency',
        'Hold sufficient amount of the native platform token to put at stake',
      ],
      formAction: 'https://joystream.us11.list-manage.com/subscribe/post?u=932de577aec9616d4516b4e0f&amp;id=4ea03faa7a',
    },
    {
      id: 'builder',
      image: BuilderImage,
      title: 'Builder',
      overview: (
        <>
          The platform runtime, tools, infrastructure software and user facing applications are all meant to evolve over
          time. A diverse set of contributors are required to facilitate this, including
          <br />
          <br />
          <ul className="RoleOverview__dashList">
            <li>
              <strong>Developers:</strong> Software developers, Data scientists, DevOps and QA
            </li>
            <li>
              <strong>Designers:</strong> Web, Mobile, UX/UI, Branding and Visual Design
            </li>
            <li>
              <strong>Product Managers:</strong> Digital Product Managers, Product Owners and Analysts
            </li>
          </ul>
          <br />
          All of these contributors are collectively referred to as Builders. Anyone can contribute in the same mode as
          any of these possible contributor functions, as all the platform source assets are open source and developed
          in the open. Being a Builder means that one has some scope of responsibility in ongoing efforts, and that one
          has some predefined reward scheme associated with this responsibility.
        </>
      ),
      responsibilites: [
        'Collaborate with almost every other kind of platform member to maintain and improve the platform',
      ],
      requirements: [
        'A deep understanding of the Joystream platform structure and function',
        'Have specific skills required for contributing in the given way',
        'Hold sufficient amount of the native platform token to put at stake',
      ],
      formAction: 'https://joystream.us11.list-manage.com/subscribe/post?u=932de577aec9616d4516b4e0f&amp;id=6868b87276',
    },
    {
      id: 'communication-moderator',
      image: CommunicationModeratorImage,
      title: 'Communication Moderator',
      overview: `
          The platform will have multiple ways of facilitating easy and secure public, and private,
           communication and information sharing among members. In particular, there will be both
            a forum and messaging capability built in to the platform. But in order for these
            spaces to be effective communication modes, some moderation will be required.
            Communication moderators are involved with policing this activity.`,
      responsibilites: [
        `Monitor and supervise public communication channels for compliance with usage policies
         as decided through the governance system`,
        'Communicate with end users about any possible violations and sanctions',
        'Collaborate to come up with new policies as circumstances change',
      ],
      requirements: [
        'A deep understanding of the Joystream platform structure and function',
        'Clear written communicator, ideally with good command of more than one language',
        'Hold sufficient amount of the native platform token to put at stake',
      ],
      formAction: 'https://joystream.us11.list-manage.com/subscribe/post?u=932de577aec9616d4516b4e0f&amp;id=46a98ea4be',
    },
  ],
};

export { rolesData };
