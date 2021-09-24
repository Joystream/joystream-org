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
        link: "https://github.com/Joystream/helpdesk/tree/master/roles/validators"
    },
    council: {
        image: CouncilMemberImage,
        link: "https://github.com/Joystream/helpdesk/tree/master/roles/council-members"
    },
    storageProvider: {
        image: StorageProviderImage,
        link: "https://github.com/Joystream/helpdesk/tree/master/roles/storage-providers"
    },
    storageLead: {
        image: StorageLeadImage,
        link: "https://github.com/Joystream/helpdesk/tree/master/roles/storage-lead"
    },
    contentCurator: {
        image: ContentCuratorImage,
        link: "https://github.com/Joystream/helpdesk/tree/master/roles/content-curators"
    },
    contentCreator: {
        image: ContentCreatorImage,
        link: "https://github.com/Joystream/helpdesk/tree/master/roles/content-creators"
    },
    contentLead: {
        image: ContentLeadImage,
        link: "https://github.com/Joystream/helpdesk/tree/master/roles/content-curator-lead"
    }
}

export const bountiesLink = 'https://raw.githubusercontent.com/Joystream/community-repo/master/bounties/overview/bounties-status.json';
