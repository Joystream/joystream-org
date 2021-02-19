// role images
import { ReactComponent as StorageProviderImage } from '../../assets/svg/active-storage-providers.svg';
import { ReactComponent as ValidatorImage } from '../../assets/svg/active-validators.svg';
import { ReactComponent as CouncilMemberImage } from '../../assets/svg/council-member.svg';
import { ReactComponent as StorageLeadImage } from '../../assets/svg/platform-content-files.svg';
import { ReactComponent as ContentCuratorImage } from '../../assets/svg/content-curator.svg';
import { ReactComponent as ContentCreatorImage } from '../../assets/svg/content-creator.svg';
import { ReactComponent as ContentLeadImage } from '../../assets/svg/content-curator.svg';

export const roleCardData = {
    validator: {
        image: ValidatorImage,
        title: "Validator",
        text: "A Validator is an actor which checks the validity of newly constructed blocks, proposes new blocks and participates in the consensus process for committing new block to the chain. Validators are typically paid a fixed amount for each block produced. This role has a purpose very similar to that of the miners in the Bitcoin blockchain.",
        link: "https://github.com/Joystream/helpdesk/tree/master/roles/validators"
    },
    council: {
        image: CouncilMemberImage,
        title: "Council",
        text: "Council Members are elected by stakeholders in the system to act in the long-term interest of the platform. They are responsible for allocating resources, and hiring working group leads to run the platform's day-to-day operations. This is done through the proposal system, allowing any user to submit suggestions for changing the platform in some way.",
        link: "https://github.com/Joystream/helpdesk/tree/master/roles/council-members"
    },
    storageProvider: {
        image: StorageProviderImage,
        title: "Storage Provider",
        text: "There are critical platform assets that do not live on the blockchain, such as content media. The integrity of these assets is secured by the chain, but a separate set of storage and distribution nodes enable uploading and downloading of such data. The Storage Provider is involved this activity, specifically by storing large quantities of data.        ",
        link: "https://github.com/Joystream/helpdesk/tree/master/roles/storage-providers"
    },
    storageLead: {
        image: StorageLeadImage,
        title: "Storage Lead",
        text: "The Storage Lead is hired directly by the Council through the proposals system and is dedicated to the hiring, firing and wider management of Storage Providers on the network.",
        link: "https://github.com/Joystream/helpdesk/tree/master/roles/storage-lead"
    },
    contentCurator: {
        image: ContentCuratorImage,
        title: "Content Curator",
        text: "Content Curators are responsible for monitoring the publishing of new content into the content directory, and responding to reports about contested publications. They must also update information on content to ensure it is accurate, with correct metadata. Collaborating with Builders to improve tools and user-facing experiences is another significant part of the role.",
        link: "https://github.com/Joystream/helpdesk/tree/master/roles/content-curators"
    },
    contentCreator: {
        image: ContentCreatorImage,
        title: "Content Creator",
        text: "Content Creators are those platform participants who have decided to contribute their own original (or third-party licensed) content to the platform. There are no direct incentives for this informal role at this time, though effective contributors are very likely to be rewarded through the Founding Member Program.        ",
        link: "https://github.com/Joystream/helpdesk/tree/master/roles/content-creators"
    },
    contentLead: {
        image: ContentLeadImage,
        title: "Content Lead",
        text: "The Council has the power to appoint a Content Curator Lead for the network who can hire further Content Curators. The Content Lead also decides on priorities for curation. If necessary, upon discussing with the council, the Lead can also decide to fire curators who are not performing their jobs adequately.",
        link: "https://github.com/Joystream/helpdesk/tree/master/roles/content-curator-lead"
    }
}

export const bountiesLink = 'https://raw.githubusercontent.com/Joystream/community-repo/master/bounties-overview/bounties-status.json';