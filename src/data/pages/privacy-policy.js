import React from 'react';

import Link from '../../components/Link';

const privacyPolicyItems = [
  {
    title: 'privacyPolicy.privacyPolicyItems.agreement.title',
    content: {
      isModular: true,
      key: 'privacyPolicy.privacyPolicyItems.agreement.content',
      components: [
        <Link href="https://mailchimp.com/legal/privacy/">privacy policy</Link>,
        <Link href="https://mailchimp.com/">Mailchimp</Link>,
        <br />,
      ],
    },
  },
  {
    title: 'privacyPolicy.privacyPolicyItems.changes.title',
    content: 'privacyPolicy.privacyPolicyItems.changes.content',
  },
  {
    title: 'privacyPolicy.privacyPolicyItems.informationCollected.title',
    content: {
      isModular: true,
      key: 'privacyPolicy.privacyPolicyItems.informationCollected.content',
      components: [<br />, <Link href="https://testnet.joystream.org/faucet">faucet</Link>],
    },
  },
  {
    title: 'privacyPolicy.privacyPolicyItems.googleAnalytics.title',
    content: {
      isModular: true,
      key: 'privacyPolicy.privacyPolicyItems.googleAnalytics.content',
      components: [
        <Link href="https://marketingplatform.google.com/about/analytics/">Google Analytics</Link>,
        <br />,
        <strong />,
        <Link href="https://livesession.io/security/">Livesession</Link>
      ],
    },
  },
];

const cookiePolicyItems = [
  {
    title: 'privacyPolicy.cookiePolicyItems.whatAreCookies.title',
    content: {
      isModular: true,
      key: 'privacyPolicy.cookiePolicyItems.whatAreCookies.content',
      components: [<br />],
    },
  },
  {
    title: 'privacyPolicy.cookiePolicyItems.howWeUseCookies.title',
    content: {
      isModular: true,
      key: 'privacyPolicy.cookiePolicyItems.howWeUseCookies.content',
      components: [
        <br />,
        <ul>
          <li></li>
        </ul>,
      ],
    },
  },
  {
    title: 'privacyPolicy.cookiePolicyItems.thirdPartyCookies.title',
    content: {
      isModular: true,
      key: 'privacyPolicy.cookiePolicyItems.thirdPartyCookies.content',
      components: [
        <br />,
        <ul>
          <li>
            <strong></strong>
          </li>
        </ul>,
      ],
    },
  },
  {
    title: 'privacyPolicy.cookiePolicyItems.regardingYourCookies.title',
    content: {
      isModular: true,
      key: "privacyPolicy.cookiePolicyItems.regardingYourCookies.content",
      components: [<br />]
    }
  },
];

export { privacyPolicyItems, cookiePolicyItems };
