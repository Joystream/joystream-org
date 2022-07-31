import { sharedData } from '../../data/pages';

const links = [
  { href: 'https://play.joystream.org/', label: 'navbar.atlas' },
  { href: 'https://dao.joystream.org', label: 'navbar.pioneer' },
  { to: '/manifesto', label: 'navbar.manifesto' },
  { href: sharedData.social.discordLink, label: 'navbar.discord' },
  // NEW LANDING PAGE TODO: Update this link!
  { href: '#', label: "navbar.youtubePartnerProgram" },
  {
    href: 'https://play.joystream.org/studio/',
    label: 'navbar.claimChannel',
    isButton: true,
  },
];

export { links };
