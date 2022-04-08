import { sharedData } from '../../data/pages';

const links = [
  { href: 'https://play.joystream.org/', label: 'navbar.atlas' },
  { href: 'https://dao.joystream.org', label: 'navbar.pioneer' },
  { to: '/about', label: 'navbar.about' },
  { href: sharedData.social.discordLink, label: 'navbar.community' },
  { href: 'https://joystream.gitbook.io/testnet-workspace/', label: "navbar.learnMore" },
  {
    to: '/start-here/what-is-joystream', // TODO validate
    label: 'button.getStarted.text',
    isButton: true,
  },
];

export { links };
