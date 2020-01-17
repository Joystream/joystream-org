import { ReactComponent as TwitterIcon } from '../../assets/svg/twitter.svg';
import { ReactComponent as GithubIcon } from '../../assets/svg/github.svg';
import { ReactComponent as TelegramIcon } from '../../assets/svg/telegram.svg';
import { sharedData } from '../../data/pages';

const joystreamLinks = [
  { href: sharedData.links.blog, label: 'Blog' },
  { to: '/manifesto', label: 'Manifesto' },
  { to: '/roles', label: 'Roles' },
];

const githubLinks = [
  {
    href: sharedData.links.whitepaper,
    label: 'Whitepaper',
  },
  { href: sharedData.links.repository, label: 'Repository' },
];

const usefulLinks = [{ href: sharedData.links.openings, label: 'We are hiring!' }];

const socialMedias = [
  { icon: TwitterIcon, href: sharedData.social.twitter, name: 'Twitter' },
  { icon: GithubIcon, href: sharedData.links.github, name: 'Github' },
  { icon: TelegramIcon, href: sharedData.social.telegramLink, name: 'Telegram' },
];

export { joystreamLinks, githubLinks, usefulLinks, socialMedias };
