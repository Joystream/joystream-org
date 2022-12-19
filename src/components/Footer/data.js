import { ReactComponent as TwitterIcon } from '../../assets/svg/twitter.svg';
import { ReactComponent as GithubIcon } from '../../assets/svg/github.svg';
import { ReactComponent as DiscordIcon } from '../../assets/svg/discord.svg';
import { ReactComponent as SecurityIcon } from '../../assets/svg/security.svg';
import { sharedData } from '../../data/pages';

const joystreamLinks = [
  { href: sharedData.links.blog, label: 'pages.blog' },
  { to: '/manifesto', label: 'pages.manifesto' },
  { href: 'https://joystream.gitbook.io/testnet-workspace/usdjoy', label: 'pages.token' },
  { to: '/hydra', label: 'pages.hydra' },
];

const githubLinks = [{ href: sharedData.links.repository, label: 'footer.github.repository' }];

const usefulLinks = [
  { href: 'https://joystream.gitbook.io/testnet-workspace/security', label: 'footer.security', icon: SecurityIcon },
  { href: 'https://polkadot.subscan.io/', label: 'footer.blockExplorer' },
  { to: '/brand/guides', label: 'footer.usefulLinks.brandGuidance' },
  { to: '/privacy-policy', label: 'footer.usefulLinks.privacyPolicy' },
];

const socialMedias = [
  { icon: TwitterIcon, href: sharedData.social.twitterLink, name: 'socials.twitter' },
  { icon: GithubIcon, href: sharedData.links.github, name: 'socials.github' },
  { icon: DiscordIcon, href: sharedData.social.discordLink, name: 'socials.discord' },
];

export { joystreamLinks, githubLinks, usefulLinks, socialMedias };
