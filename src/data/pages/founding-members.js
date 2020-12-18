import React from 'react';

// Hero Images
import FoundingMembersHero from '../../assets/svg/founding-members-hero.svg';
import FoundingMembersHeroFooter from '../../assets/svg/founding-members-hero-footer.svg';

// Benefits
import FoundingMembersBenefit1 from '../../assets/svg/founding-members-benefit-1.svg';
import FoundingMembersBenefit2 from '../../assets/svg/founding-members-benefit-2.svg';
import FoundingMembersBenefit3 from '../../assets/svg/founding-members-benefit-3.svg';
import FoundingMembersBenefit4 from '../../assets/svg/founding-members-benefit-4.svg';

const Hero = {
  title: <>Founding members program has just launched</>,
  text: (
    <p className="Hero__Paragraph">
      Become a Founding member and have a real impact on the development of our platform.
    </p>
  ),
  image: FoundingMembersHero,
};

const About = {
  title: <>What is a founding member program and why it exists?</>,
  text: (
    <>
      <p>
        One of the prerequisites for successfully launching the Joystream system is that a sufficiently large, effective
        and motivated community of users is ready to occupy all the different roles required to run, evolve and grow the
        platform. The purpose of the founding member program is to serve this end.
      </p>
      <p>
        A founding member does have the freedom to opt out of any of these as desired. A new official community member
        status, called founding member, will be made available.
      </p>
    </>
  ),
};

const Benefits = [
  {
    title: <>Benefit #1</>,
    image: FoundingMembersBenefit1,
    text: (
      <>be allocated tokens in the genesis block of the Joystream mainnet as a result of high quality participation</>
    ),
  },
  {
    title: <>Benefit #2</>,
    image: FoundingMembersBenefit2,
    text: (
      <>
        have special status membership in genesis block, which will have a visually distinguished presentation in
        Pioneer and other products
      </>
    ),
  },
  {
    image: FoundingMembersBenefit3,
    title: <>Benefit #3</>,
    text: (
      <>
        be allocated tokens in the genesis block of the Joystream mainnet as a result of recruiting other high quality
        participants
      </>
    ),
  },
  {
    image: FoundingMembersBenefit4,
    title: <>Benefit #4</>,
    text: (
      <>
        receive a handcrafted premium membership avatar and be honoured on official Joystream website and social media
        leading up to mainnet
      </>
    ),
  },
];

const HowToBecomeAPart = {
  title: <>How to become a part of it</>,
  steps: [
    {
      title: <>Introduce yourself on Telgram.</>,
    },
    {
      title: <>Help launch Joystream.</>,
      text: (
        <ul>
          <li>training others</li>
          <li>writing impactful blog posts</li>
          <li>creating and publishing new content</li>
          <li>creating proposals that pass and have a positive impact</li>
          <li>serving effectively on the council, for example as measured by the KPI system</li>
          <li>finding bugs or errors</li>
        </ul>
      ),
    },
    {
      title: <>Tell us what you have done.</>,
    },
    {
      title: <>Become a founding member!</>,
    },
  ],
};

const KeyMetrics = {
  title: <>Key metrics for the program</>,
  metrics: [
    {
      title: <>64%</>,
      description: <>size of first token pool</>,
    },
    {
      title: <>71%</>,
      description: <>size of second token pool</>,
    },
    {
      title: <>6</>,
      description: <>number of founding members</>,
    },
    {
      title: <>64%</>,
      description: <>number of non-founding members with 0{'>'} direct score</>,
    },
  ],
};

const CallToAction = {
  title: <>Become a founding member</>,
  image: FoundingMembersHeroFooter,
  text: (
    <>
      Join our Telegram where they can get their first free testnet tokens and learn what the best opportunities are at
      the moment.
    </>
  ),
  callToActionText: <>Join </>,
};

const Disclaimer = {
  title: <>Disclaimer</>,
  text: (
    <>
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit
      mollit. Exercitation veniam consequat sunt nostrud amet.
    </>
  ),
};

export { Hero, About, Benefits, HowToBecomeAPart, KeyMetrics, CallToAction, Disclaimer };
