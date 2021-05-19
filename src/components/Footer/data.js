import { ReactComponent as TwitterIcon } from '../../assets/svg/twitter.svg';
import { ReactComponent as GithubIcon } from '../../assets/svg/github.svg';
import { ReactComponent as DiscordIcon } from '../../assets/svg/discord.svg';
import { sharedData } from '../../data/pages';

const joystreamLinks = [
  { href: sharedData.links.blog, label: 'pages.blog' },
  { to: '/manifesto', label: 'pages.manifesto' },
  { to: '/roles', label: 'pages.roles' },
  { to: '/token', label: 'pages.token' },
  { to: '/hydra', label: 'pages.hydra' },
];

const githubLinks = [
  { href: sharedData.links.repository, label: 'footer.github.repository' },
];

const usefulLinks = [
  { href: sharedData.links.openings, label: 'footer.usefulLinks.hiring' },
  { to: '/brand/guides', label: 'footer.usefulLinks.brandGuidance' },
];

const socialMedias = [
  { icon: TwitterIcon, href: sharedData.social.twitterLink, name: 'socials.twitter' },
  { icon: GithubIcon, href: sharedData.links.github, name: 'socials.github' },
  { icon: DiscordIcon, href: sharedData.social.discordLink, name: 'socials.discord' }
];

export { joystreamLinks, githubLinks, usefulLinks, socialMedias };
