import { ReactComponent as TickIcon } from '../../assets/svg/tick.svg';
import { ReactComponent as ComingIcon } from '../../assets/svg/coming.svg';

const roles = {
  active: {
    title: 'Active roles',
    icon: TickIcon,
    links: [
      {
        label: 'Validator',
        ref: 'validator',
      },
      {
        label: 'Membership Screener',
        ref: 'membership-screener',
      },
      {
        label: 'Council Members',
        ref: 'council-members',
      },
    ],
  },
  upcoming: {
    title: 'Upcoming roles',
    icon: ComingIcon,
    links: [
      {
        label: 'Banwidth Provider',
        ref: 'banwidth-provider',
      },
      {
        label: 'Discover Provider',
        ref: 'discover-provider',
      },
      {
        label: 'Live Streaming Provider',
        ref: 'live-streaming-provider',
      },
    ],
  },
};

export { roles };
