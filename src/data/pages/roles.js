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
      responsibilities: [
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
      title: 'roles.councilMember.title',
      overview: 'roles.councilMember.overview',
      responsibilities: [
        'roles.councilMember.responsibilities.discussProposals',
        'roles.councilMember.responsibilities.vote',
        'roles.councilMember.responsibilities.representCommunity',
      ],
      requirements: [
        'roles.councilMember.requirements.dataAnalysisProficiency',
        'roles.councilMember.requirements.platformUnderstanding',
        'roles.councilMember.requirements.stake',
      ],
      tutorialLink: 'https://github.com/Joystream/helpdesk/tree/master/roles/council-members',
      questionLink: `mailto:${sharedData.defaultEmail}`,
      formAction: 'https://joystream.us11.list-manage.com/subscribe/post?u=932de577aec9616d4516b4e0f&amp;id=51a3da04f8',
    },
    {
      id: 'storage-provider',
      image: StorageProviderImage,
      title: 'roles.storageProvider.title',
      overview: 'roles.storageProvider.overview',
      responsibilities: ['roles.storageProvider.responsibilities.runAndMaintainStorageNodes'],
      requirements: [
        'roles.storageProvider.requirements.setupAndMaintainInfrastructure',
        'roles.storageProvider.requirements.accessToPerformantInfrastructure',
        'roles.storageProvider.requirements.stake',
      ],
      tutorialLink: 'https://github.com/Joystream/helpdesk/tree/master/roles/storage-lead',
      questionLink: `mailto:${sharedData.defaultEmail}`,
      formAction: 'https://joystream.us11.list-manage.com/subscribe/post?u=932de577aec9616d4516b4e0f&amp;id=7733bde460',
    },
    {
      id: 'storage-lead',
      image: StorageLeadImage,
      title: 'roles.storageLead.title',
      overview: 'roles.storageLead.overview',
      responsibilities: ['roles.storageLead.responsibilities.storageProviderPerformance'],
      requirements: [
        'roles.storageLead.requirements.setupAndMaintainInfrastructure',
        'roles.storageLead.requirements.managementAndCoordination',
        'roles.storageLead.requirements.stake',
      ],
      tutorialLink: 'https://github.com/Joystream/helpdesk/tree/master/roles/storage-providers',
      questionLink: `mailto:${sharedData.defaultEmail}`,
      formAction: 'https://joystream.us11.list-manage.com/subscribe/post?u=932de577aec9616d4516b4e0f&amp;id=7733bde460',
    },
    {
      id: 'content-curator',
      image: ContentCuratorImage,
      title: 'roles.contentCurator.title',
      overview: 'roles.contentCurator.overview',
      responsibilities: [
        'roles.contentCurator.responsibilities.monitorContent',
        'roles.contentCurator.responsibilities.adjudicateDisputes',
        'roles.contentCurator.responsibilities.updateContentInformation',
        {
          isModular: true,
          key: 'roles.contentCurator.responsibilities.collaborateWithBuilders',
          components: [<Link href="#builder"> Builders</Link>],
        },
      ],
      requirements: ['roles.contentCurator.requirements.adjudicateDisputes', 'roles.contentCurator.requirements.stake'],
      tutorialLink: 'https://github.com/Joystream/helpdesk/tree/master/roles/content-curators',
      questionLink: 'mailto:hello@jsgenesis.com',
      formAction: 'https://joystream.us11.list-manage.com/subscribe/post?u=932de577aec9616d4516b4e0f&amp;id=3877efbe93',
    },
    {
      id: 'content-creator',
      image: ContentCreatorImage,
      title: 'roles.contentCreator.title',
      overview: 'roles.contentCreator.overview',
      responsibilities: ['roles.contentCreator.responsibilities.publishContent'],
      requirements: ['roles.contentCreator.requirements.publishContent', 'roles.contentCreator.requirements.stake'],
      tutorialLink: 'https://github.com/Joystream/helpdesk/tree/master/roles/content-creators',
      questionLink: 'mailto:hello@jsgenesis.com',
      formAction: 'https://joystream.us11.list-manage.com/subscribe/post?u=932de577aec9616d4516b4e0f&amp;id=0ea466b90d',
    },
    {
      id: 'content-lead',
      image: ContentLeadImage,
      title: 'roles.contentLead.title',
      overview: 'roles.contentLead.overview',
      responsibilities: [
        'roles.contentLead.responsibilities.monitorPublishing',
        'roles.contentLead.responsibilities.adjudicateDisputes',
        'roles.contentLead.responsibilities.updateInformation',
        'roles.contentLead.responsibilities.manageAndCoordinate',
      ],
      requirements: ['roles.contentLead.requirements.adjudicateDisputes', 'roles.contentLead.requirements.stake'],
      tutorialLink: 'https://github.com/Joystream/helpdesk/tree/master/roles/content-curator-lead',
      questionLink: 'mailto:hello@jsgenesis.com',
      formAction: 'https://joystream.us11.list-manage.com/subscribe/post?u=932de577aec9616d4516b4e0f&amp;id=3877efbe93',
    },
    {
      id: 'builder',
      image: BuilderImage,
      title: 'roles.builder.title',
      overview: {
        isModular: true,
        key: 'roles.builder.overview',
        components: [
          <br />,
          <ul className="RoleOverview__dashList">
            <li>
              <strong />
            </li>
          </ul>,
        ],
      },
      responsibilities: ['roles.builder.responsibilities.collaborate'],
      requirements: [
        'roles.builder.requirements.platformUnderstanding',
        'roles.builder.requirements.specificContributingSkills',
        'roles.builder.requirements.stake',
      ],
      tutorialLink: 'https://github.com/Joystream/helpdesk/tree/master/roles/builders',
      questionLink: 'mailto:hello@jsgenesis.com',
      formAction: 'https://joystream.us11.list-manage.com/subscribe/post?u=932de577aec9616d4516b4e0f&amp;id=6868b87276',
    },
  ],
  upcoming: [
    {
      id: 'membership-screener',
      image: MembershipScreenerImage,
      title: 'roles.membershipScreener.title',
      overview: 'roles.membershipScreener.overview',
      responsibilities: [
        'roles.membershipScreener.responsibilities.runAndMaintainScreeningNodes',
        {
          isModular: true,
          key: 'roles.membershipScreener.responsibilities.collaborate',
          components: [
            <Link href="#membership-curator">Membership Curators</Link>,
            <Link href="#builder"> Builders</Link>,
          ],
        },
        'roles.membershipScreener.responsibilities.beResponsive',
      ],
      requirements: [
        'roles.membershipScreener.requirements.setupAndMaintainInfrastructure',
        'roles.membershipScreener.requirements.accessToPerformantInfrastructure',
        'roles.membershipScreener.requirements.onlinePlatformAttackFamiliarity',
        'roles.membershipScreener.requirements.stake',
      ],
      formAction: 'https://joystream.us11.list-manage.com/subscribe/post?u=932de577aec9616d4516b4e0f&amp;id=2a9bd4a3ed',
    },
    {
      id: 'membership-curator',
      image: MembershipCuratorImage,
      title: 'roles.membershipCurator.title',
      overview: {
        isModular: true,
        key: 'roles.membershipCurator.overview',
        components: [<Link href="#membership-screener"> above</Link>],
      },
      responsibilities: [
        'roles.membershipCurator.responsibilities.monitorPlatformActivity',
        'roles.membershipCurator.responsibilities.proposeChanges',
        {
          isModular: true,
          key: 'roles.membershipCurator.responsibilities.collaborate',
          components: [<Link href="#membership-screener"> Screeners</Link>, <Link href="#builder"> Builders</Link>],
        },
      ],
      requirements: [
        'roles.membershipCurator.requirements.dataAnalysisProficiency',
        'roles.membershipCurator.requirements.platformUnderstanding',
        'roles.membershipCurator.requirements.stake',
      ],
      formAction: 'https://joystream.us11.list-manage.com/subscribe/post?u=932de577aec9616d4516b4e0f&amp;id=bd10fbb23f',
    },
    {
      id: 'bandwidth-provider',
      image: BandwidthProviderImage,
      title: 'roles.bandwidthProvider.title',
      overview: 'roles.bandwidthProvider.overview',
      responsibilities: ['roles.bandwidthProvider.responsibilities.runAndMaintainDistributorNodes'],
      requirements: [
        'roles.bandwidthProvider.requirements.setupAndMaintainInfrastructure',
        'roles.bandwidthProvider.requirements.accessToPerformantInfrastructure',
        'roles.bandwidthProvider.requirements.locatedWithinBounds',
        'roles.bandwidthProvider.requirements.stake',
      ],
      formAction: 'https://joystream.us11.list-manage.com/subscribe/post?u=932de577aec9616d4516b4e0f&amp;id=2d978eeb0c',
    },
    {
      id: 'discovery-provider',
      image: DiscoveryProviderImage,
      title: 'roles.discoveryProvider.title',
      overview: 'roles.discoveryProvider.overview',
      responsibilities: [
        'roles.discoveryProvider.responsibilities.runAndMaintainDiscoveryNodes',
        {
          isModular: true,
          key: 'roles.discoveryProvider.responsibilities.collaborate',
          components: [<Link href="#builder">Builders</Link>],
        },
      ],
      requirements: [
        'roles.discoveryProvider.requirements.setupAndMaintainInfrastructure',
        'roles.discoveryProvider.requirements.accessToPerformantInfrastructure',
        'roles.discoveryProvider.requirements.formulateAndTestHeuristics',
        'roles.discoveryProvider.requirements.stake',
      ],
      formAction: 'https://joystream.us11.list-manage.com/subscribe/post?u=932de577aec9616d4516b4e0f&amp;id=766d15796d',
    },
    {
      id: 'live-streaming-provider',
      image: LiveStreamingProviderImage,
      title: 'roles.liveStreamingProvider.title',
      overview: 'roles.liveStreamingProvider.overview',
      responsibilities: ['roles.liveStreamingProvider.responsibilities.runAndMaintainLivestreamingNodes'],
      requirements: [
        'roles.liveStreamingProvider.requirements.setupAndMaintainInfrastructure',
        'roles.liveStreamingProvider.requirements.accessToPerformantInfrastructure',
        'roles.liveStreamingProvider.requirements.locatedWithinBounds',
        'roles.liveStreamingProvider.requirements.stake',
      ],
      formAction: 'https://joystream.us11.list-manage.com/subscribe/post?u=932de577aec9616d4516b4e0f&amp;id=4ea03faa7a',
    },
    {
      id: 'communication-moderator',
      image: CommunicationModeratorImage,
      title: 'roles.communicationModerator.title',
      overview: 'roles.communicationModerator.overview',
      responsibilities: [
        'roles.communicationModerator.responsibilities.monitorCommuncationChannels',
        'roles.communicationModerator.responsibilities.communicateWithUsers',
        'roles.communicationModerator.responsibilities.collaborate',
      ],
      requirements: [
        'roles.communicationModerator.requirements.platformUnderstanding',
        'roles.communicationModerator.requirements.goodCommunicator',
        'roles.communicationModerator.requirements.stake',
      ],
      formAction: 'https://joystream.us11.list-manage.com/subscribe/post?u=932de577aec9616d4516b4e0f&amp;id=46a98ea4be',
    },
  ],
};

export { rolesData };
