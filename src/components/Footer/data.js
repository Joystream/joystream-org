import { ReactComponent as TwitterIcon } from '../../assets/svg/twitter.svg';
import { ReactComponent as GithubIcon } from '../../assets/svg/github.svg';
import { ReactComponent as RocketChatIcon } from '../../assets/svg/rocketchat.svg';
import { ReactComponent as TelegramIcon } from '../../assets/svg/telegram.svg';

const links = [
  { href: 'https://www.jsgenesis.com/#openings', label: 'We are hiring!' },
  { href: 'https://blog.joystream.org/', label: 'Blog' },
  { href: 'https://blog.joystream.org/manifesto/', label: 'Manifesto' },
  { href: 'https://github.com/Joystream/joystream', label: 'Repository' },
];

const socialMedias = [
  { icon: TwitterIcon, href: 'https://twitter.com/JoyStreamApp', name: 'Twitter' },
  { icon: GithubIcon, href: 'https://github.com/Joystream', name: 'Github' },
  { icon: RocketChatIcon, href: 'https://chat.joystream.org/home', name: 'Chat' },
  { icon: TelegramIcon, href: 'https://t.me/joinchat/CNyeUxHD9H56m3e_44hXIA', name: 'Telegram' },
];

export { links, socialMedias };
