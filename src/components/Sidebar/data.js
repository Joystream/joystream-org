import { ReactComponent as TickIcon } from '../../assets/svg/tick.svg';
import { ReactComponent as ComingIcon } from '../../assets/svg/coming.svg';

const roles = {
  active: {
    title: 'Active roles',
    icon: TickIcon,
    links: [
      {
        label: 'Validator',
        href: '#validator',
      },
      {
        label: 'Membership Screener',
        href: '#membership-screener',
      },
      {
        label: 'Council Members',
        href: '#council-members',
      },
    ],
  },
  upcoming: {
    title: 'Upcoming roles',
    icon: ComingIcon,
    links: [
      {
        label: 'Banwidth Provider',
        href: '#banwidth-provider',
      },
      {
        label: 'Discover Provider',
        href: '#discover-provider',
      },
      {
        label: 'Live Streaming Provider',
        href: '#live-streaming-provider',
      },
    ],
  },
};

export { roles };
