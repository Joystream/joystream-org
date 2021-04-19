import React from 'react';
import Link from '../../components/Link';
import { sharedData } from '../../data/pages';
import { ReactComponent as ValidatorImage } from '../../assets/svg/active-validators.svg';
import { ReactComponent as CouncilMemberImage } from '../../assets/svg/council-member.svg';
import { ReactComponent as StorageProviderImage } from '../../assets/svg/platform-content-files.svg';
import { ReactComponent as StorageLeadImage } from '../../assets/svg/platform-content-files.svg';
import { ReactComponent as MembershipScreenerImage } from '../../assets/svg/membership-screener.svg';
import { ReactComponent as MembershipCuratorImage } from '../../assets/svg/membership-curator.svg';
import { ReactComponent as ContentCuratorImage } from '../../assets/svg/content-curator.svg';
import { ReactComponent as ContentCreatorImage } from '../../assets/svg/content-creator.svg';
import { ReactComponent as ContentLeadImage } from '../../assets/svg/content-curator.svg';
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
      title: 'roles.validator.title',
      overview: 'roles.validator.overview',
      responsibilites: [
        'roles.validator.responsibilities.runAndMaintainScreeningNodes',
        'roles.validator.responsibilities.enforceRules',
      ],
      requirements: [
        'roles.validator.requirements.setupAndMaintainInfrastructure',
        'roles.validator.requirements.accessToPerformantInfrastructure',
        'roles.validator.requirements.storeKeys',
        'roles.validator.requirements.stake',
      ],
      tutorialLink: 'https://github.com/Joystream/helpdesk/tree/master/roles/validators',
      questionLink: `mailto:${sharedData.defaultEmail}`,
      formAction: 'https://joystream.us11.list-manage.com/subscribe/post?u=932de577aec9616d4516b4e0f&amp;id=26a32a8d8d',
    },
    {
      id: 'council-member',
      image: CouncilMemberImage,
      title: '',
      overview: ``,
      responsibilites: [
        '',
        '',
        '',
      ],
      requirements: [
        ``,
        '',
        '',
      ],
      tutorialLink: 'https://github.com/Joystream/helpdesk/tree/master/roles/council-members',
      questionLink: `mailto:${sharedData.defaultEmail}`,
      formAction: 'https://joystream.us11.list-manage.com/subscribe/post?u=932de577aec9616d4516b4e0f&amp;id=51a3da04f8',
    },
    {
      id: 'storage-provider',
      image: StorageProviderImage,
      title: '',
      overview: ``,
      responsibilites: [
        ``,
      ],
      requirements: [
        '',
        '',
        '',
      ],
      tutorialLink: 'https://github.com/Joystream/helpdesk/tree/master/roles/storage-lead',
      questionLink: `mailto:${sharedData.defaultEmail}`,
      formAction: 'https://joystream.us11.list-manage.com/subscribe/post?u=932de577aec9616d4516b4e0f&amp;id=7733bde460',
    },
    {
      id: 'storage-lead',
      image: StorageLeadImage,
      title: '',
      overview: ``,
      responsibilites: [
        ``,
      ],
      requirements: [
        '',
        '',
        '',
      ],
      tutorialLink: 'https://github.com/Joystream/helpdesk/tree/master/roles/storage-providers',
      questionLink: `mailto:${sharedData.defaultEmail}`,
      formAction: 'https://joystream.us11.list-manage.com/subscribe/post?u=932de577aec9616d4516b4e0f&amp;id=7733bde460',
    },
    {
      id: 'content-curator',
      image: ContentCuratorImage,
      title: '',
      overview: ``,
      responsibilites: [
        ``,
        '',
        '',
        <>
          Collaborate with <Link href="#builder"> Builders</Link> to improve both tools, and user facing experiences, to
          improve the integrity of the content directory
        </>,
      ],
      requirements: [
        '',
        '',
      ],
      tutorialLink: 'https://github.com/Joystream/helpdesk/tree/master/roles/content-curators',
      questionLink: 'mailto:hello@jsgenesis.com',
      formAction: 'https://joystream.us11.list-manage.com/subscribe/post?u=932de577aec9616d4516b4e0f&amp;id=3877efbe93',
    },
    {
      id: 'content-creator',
      image: ContentCreatorImage,
      title: '',
      overview: ``,
      responsibilites: [''],
      requirements: [
        '',
        '',
      ],
      tutorialLink: 'https://github.com/Joystream/helpdesk/tree/master/roles/content-creators',
      questionLink: 'mailto:hello@jsgenesis.com',
      formAction: 'https://joystream.us11.list-manage.com/subscribe/post?u=932de577aec9616d4516b4e0f&amp;id=0ea466b90d',
    },
    {
      id: 'content-lead',
      image: ContentLeadImage,
      title: '',
      overview: ``,
      responsibilites: [
        ``,
        '',
        '',
        ''
      ],
      requirements: [
        '',
        '',
      ],
      tutorialLink: 'https://github.com/Joystream/helpdesk/tree/master/roles/content-curator-lead',
      questionLink: 'mailto:hello@jsgenesis.com',
      formAction: 'https://joystream.us11.list-manage.com/subscribe/post?u=932de577aec9616d4516b4e0f&amp;id=3877efbe93',
    },
  ],
  upcoming: [
    {
      id: 'membership-screener',
      image: MembershipScreenerImage,
      title: '',
      overview: ``,
      responsibilites: [
        '',
        <>
          Collaborate with <Link href="#membership-curator">Membership Curators</Link> and
          <Link href="#builder"> Builders</Link> to improve screening mechanisms by discussing screening techniques,
          sharing traffic information
        </>,
        '',
      ],
      requirements: [
        '',
        ``,
        '',
        '',
      ],
      formAction: 'https://joystream.us11.list-manage.com/subscribe/post?u=932de577aec9616d4516b4e0f&amp;id=2a9bd4a3ed',
    },
    {
      id: 'membership-curator',
      image: MembershipCuratorImage,
      title: '',
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
        '',
        ``,
        <>
          Collaborate with <Link href="#membership-screener"> Screeners</Link> and{' '}
          <Link href="#builder"> Builders</Link> to improve tools for identifying such members
        </>,
      ],
      requirements: [
        '',
        '',
        '',
      ],
      formAction: 'https://joystream.us11.list-manage.com/subscribe/post?u=932de577aec9616d4516b4e0f&amp;id=bd10fbb23f',
    },
    {
      id: 'bandwidth-provider',
      image: BandwidthProviderImage,
      title: '',
      overview: ``,
      responsibilites: [
        '',
      ],
      requirements: [
        '',
        ``,
        '',
        '',
      ],
      formAction: 'https://joystream.us11.list-manage.com/subscribe/post?u=932de577aec9616d4516b4e0f&amp;id=2d978eeb0c',
    },
    {
      id: 'discovery-provider',
      image: DiscoveryProviderImage,
      title: '',
      overview: ``,
      responsibilites: [
        ``,
        <>
          Collaborate with <Link href="#builder">Builders</Link> to improve both tools, and user facing experiences, to
          improve the discovery experience
        </>,
      ],
      requirements: [
        '',
        '',
        '',
        '',
      ],
      formAction: 'https://joystream.us11.list-manage.com/subscribe/post?u=932de577aec9616d4516b4e0f&amp;id=766d15796d',
    },
    {
      id: 'live-streaming-provider',
      image: LiveStreamingProviderImage,
      title: '',
      overview: ``,
      responsibilites: [
        '',
      ],
      requirements: [
        '',
        '',
        '',
        '',
      ],
      formAction: 'https://joystream.us11.list-manage.com/subscribe/post?u=932de577aec9616d4516b4e0f&amp;id=4ea03faa7a',
    },
    {
      id: 'builder',
      image: BuilderImage,
      title: '',
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
        '',
      ],
      requirements: [
        '',
        '',
        '',
      ],
      formAction: 'https://joystream.us11.list-manage.com/subscribe/post?u=932de577aec9616d4516b4e0f&amp;id=6868b87276',
    },
    {
      id: 'communication-moderator',
      image: CommunicationModeratorImage,
      title: '',
      overview: ``,
      responsibilites: [
        ``,
        '',
        '',
      ],
      requirements: [
        '',
        '',
        '',
      ],
      formAction: 'https://joystream.us11.list-manage.com/subscribe/post?u=932de577aec9616d4516b4e0f&amp;id=46a98ea4be',
    },
  ],
};

export { rolesData };
