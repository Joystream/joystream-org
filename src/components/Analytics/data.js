import { ReactComponent as payoutImage } from '../../assets/svg/participation-payout.svg';
import { ReactComponent as validatorsImage } from '../../assets/svg/active-validators.svg';
import { ReactComponent as blockImage } from '../../assets/svg/block-platform-content-files.svg';
import { ReactComponent as pillarsImage } from '../../assets/svg/council-election-stage.svg';
import { ReactComponent as emblemImage } from '../../assets/svg/memberships.svg';
import { ReactComponent as fileImage } from '../../assets/svg/forum-posts.svg';
import { ReactComponent as filesImage } from '../../assets/svg/active-storage-providers.svg';
import { ReactComponent as bookImage } from '../../assets/svg/platform-content-files.svg';

const items = [
  { title: 'Participation Payout', image: payoutImage, value: '$1576' },
  { title: 'Active Validators', image: validatorsImage, key: 'validatorsCount' },
  { title: 'Block Height', image: blockImage, key: 'blockHeight' },
  { title: 'Council Election Stage', image: pillarsImage, key: 'councilStage' },
  { title: 'Memberships', image: emblemImage, key: 'membershipsMembers' },
  { title: 'Forum Posts', image: fileImage, key: 'forumPosts' },
  { title: 'Platform Content Files', image: filesImage, key: 'mediaFiles' },
  { title: 'Active Storage Providers', image: bookImage, key: 'rolesProviders' },
];

export { items };
