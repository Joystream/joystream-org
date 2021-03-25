import { sharedData } from '../../data/pages';

const links = [
  { to: '/token', label: 'Testnet Token' },
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
  { to: '/manifesto', label: 'pages.manifesto' },
  { to: '/roles', label: 'pages.roles' },
  {
    label: 'pages.foundingMembers',
    isDropdown: true,
    links: [
      {
        to: '/founding-members',
        label: 'pages.overview',
      },
      {
        to: '/founding-members/leaderboards',
        label: 'pages.leaderboards',
      },
      {
        to: '/founding-members/form',
        label: 'pages.scoringForm',
      },
    ],
  },
  { to: '/about', label: 'navbar.about' },
  { href: sharedData.social.discordLink, label: 'navbar.community' },
  {
    to: '/get-started',
    label: 'button.getStarted.text',
    isButton: true,
  },
];

export { links };
