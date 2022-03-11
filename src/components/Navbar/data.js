import { sharedData } from '../../data/pages';

const links = [
  {
    label: 'navbar.product',
    isDropdown: true,
    links: [
      {
        href: 'https://play.joystream.org/',
        label: 'navbar.atlas',
      },
      {
        href: 'https://testnet.joystream.org/',
        label: 'navbar.pioneer',
      },
    ],
  },
  { to: '/about', label: 'navbar.about' },
  { href: sharedData.social.discordLink, label: 'navbar.community' },
  {
    to: '/start-here/what-is-joystream', // TODO validate
    label: 'button.getStarted.text',
    isButton: true,
  },
];

export { links };
