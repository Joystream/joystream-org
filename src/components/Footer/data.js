// import { ReactComponent as TwitterIcon } from '../../assets/svg/twitter.svg';
import { ReactComponent as TwitterIcon } from '../../assets/svg/x-logo.svg';
import { ReactComponent as GithubIcon } from '../../assets/svg/github.svg';
import { ReactComponent as DiscordIcon } from '../../assets/svg/discord.svg';
import { ReactComponent as SecurityIcon } from '../../assets/svg/security.svg';
import { ReactComponent as TelegramIcon } from '../../assets/svg/telegram.svg';
import { ReactComponent as CMCIcon } from '../../assets/svg/coinmarketcap.svg';
import { ReactComponent as CoinGeckoIcon } from '../../assets/svg/coingecko.svg';
import { sharedData } from '../../data/pages';

const joystreamLinks = [
  { href: sharedData.links.blog, label: 'pages.blog' },
  { to: '/manifesto', label: 'pages.manifesto' },
];

const githubLinks = [{ href: sharedData.links.repository, label: 'footer.github.repository' }];

const usefulLinks = [
  { href: 'https://joystream.gitbook.io/testnet-workspace/security', label: 'footer.security', icon: SecurityIcon },
  { href: 'https://polkadot.js.org/apps/?rpc=wss://rpc.joystream.org:9944#/explorer', label: 'footer.chainDashboard' },
  { href: 'https://explorer.joystream.org/', label: 'footer.blockExplorer' },
  { to: '/brand/guides', label: 'footer.usefulLinks.brandGuidance' },
  { to: '/privacy-policy', label: 'footer.usefulLinks.privacyPolicy' },
];

const socialMedias = [
  { icon: TwitterIcon, href: sharedData.social.twitterLink, name: 'socials.twitter' },
  { icon: GithubIcon, href: sharedData.links.github, name: 'socials.github' },
  { icon: DiscordIcon, href: sharedData.social.discordLink, name: 'socials.discord' },
  { icon: TelegramIcon, href: sharedData.social.telegramLink, name: 'socials.telegram' },
  { icon: CMCIcon, href: sharedData.social.coinmarketcapLink, name: 'socials.coinmarketcap' },
  { icon: CoinGeckoIcon, href: sharedData.social.coingeckoLink, name: 'socials.coingecko' },
];

export { joystreamLinks, githubLinks, usefulLinks, socialMedias };
