import { ReactComponent as TwitterIcon } from '../../assets/svg/twitter.svg';
import { ReactComponent as GithubIcon } from '../../assets/svg/github.svg';
import { ReactComponent as TelegramIcon } from '../../assets/svg/telegram.svg';
import { ReactComponent as DiscordIcon } from '../../assets/svg/discord.svg';
import { sharedData } from '../../data/pages';

const joystreamLinks = [
  { href: sharedData.links.blog, label: 'Blog' },
  { to: '/manifesto', label: 'Manifesto' },
  { to: '/roles', label: 'Roles' },
  { to: '/token', label: 'Token' },
  { to: '/hydra', label: 'Hydra' },
];

const githubLinks = [
  {
    href: sharedData.links.whitepaper,
    label: 'Whitepaper',
  },
  { href: sharedData.links.repository, label: 'Repository' },
];

const usefulLinks = [
  { href: sharedData.links.openings, label: 'We are hiring!' },
  { to: '/brand/guides', label: 'Brand guidance' },
];

const socialMedias = [
  { icon: TwitterIcon, href: sharedData.social.twitterLink, name: 'Twitter' },
  { icon: GithubIcon, href: sharedData.links.github, name: 'GitHub' },
  { icon: TelegramIcon, href: sharedData.social.telegramLink, name: 'Telegram' },
  { icon: DiscordIcon, href: sharedData.social.discordLink, name: 'Discord' }
];

export { joystreamLinks, githubLinks, usefulLinks, socialMedias };
