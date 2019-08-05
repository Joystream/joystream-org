import React from 'react';

import BaseLayout from '../../components/_layouts/Base';

import PolicyWrapper from '../../components/PolicyWrapper';
import ColumnsLayout from '../../components/ColumnsLayout';
import PolicyItem from '../../components/PolicyItem';
import LayoutWrapper from '../../components/LayoutWrapper';
import Link from '../../components/Link';
import Hero from '../../components/Hero';
import SiteMetadata from '../../components/SiteMetadata';

import {
  privacyPolicyItems,
  cookiePolicyItems,
} from '../../data/pages/privacy-policy';

import './style.scss';

const PrivacyPolicyPage = () => {
  return (
    <BaseLayout>
      <SiteMetadata
        title="Joystream Privacy and Cookie Policy"
        description="We take your privacy seriously."
      />

      <Hero title="Privacy Policy and Cookies">
        <p className="PrivacyPolicyPage__hero-paragraph">
          <strong>Jsgenesis values your privacy.</strong>
          <br />
          <br />
          This Privacy Policy ("Privacy Policy") and Cookie Policy ("Cookie
          Policy") explains how Jsgenesis AS ("Jsgenesis", "Company", "We",
          "Us", "Our") collect and use data and information when you ("User) use
          on or any of the Joystream products, developed in the GitHub
          organization{' '}
          <Link href="https://github.com/JoyStream" highlighted>
            Joystream
          </Link>
          . These products (collectively "Software") include, but are not
          limited to, all pages under the{' '}
          <Link href="https://www.joystream.org/" highlighted>
            joystream.org
          </Link>{' '}
          domain ("Website"), the{' '}
          <Link
            href="https://github.com/Joystream/substrate-node-joystream"
            highlighted
          >
            Joyful node
          </Link>{' '}
          ("Full Node"), the{' '}
          <Link
            href="https://github.com/Joystream/storage-node-joystream"
            highlighted
          >
            Colossus Storage Node
          </Link>{' '}
          ("Storage node"), and the Pioneer User Interface, either{' '}
          <Link href="https://github.com/Joystream/apps" highlighted>
            self hosted
          </Link>{' '}
          or{' '}
          <Link href="http://testnet.joystream.org/" highlighted>
            hosted by Us
          </Link>{' '}
          ("App").
        </p>
      </Hero>
      <LayoutWrapper>
        <PolicyWrapper
          title="Relevant to the Privacy Policy and Cookie Policy are the following terms:"
          left
        >
          <ul>
            <li className="PrivacyPolicyPage__list-item">
              The term <strong>"Blockchain"</strong> refers to the blockchain(s)
              assembled by the Full Node.
            </li>
            <li className="PrivacyPolicyPage__list-item">
              The term <strong>"Content"</strong> refers to media files
              accessible through our Software.
            </li>
            <li className="PrivacyPolicyPage__list-item">
              The term <strong>"Keys"</strong> refers to a private/public
              cryptographic keypair, that Users can generate in order to write
              (and decrypt data) on the Blockchain.
            </li>
            <li className="PrivacyPolicyPage__list-item">
              The term <strong>"Membership"</strong> refers to tying your Keys
              to a public profile, allowing users to access Content and interact
              with the Blockchain.
            </li>
            <li className="PrivacyPolicyPage__list-item">
              The term <strong>"Memo"</strong> refers to a markdown enabled text
              field, where users can input data tied to their Keys.
            </li>
          </ul>
        </PolicyWrapper>

        <PolicyWrapper
          title="Privacy Policy"
          subtitle="Last updated on the 17th of April 2019"
        >
          <ColumnsLayout columnsCount={2} largeSpacing>
            {privacyPolicyItems.map((item, i) => (
              <PolicyItem key={`${item.title}${i}`} title={item.title}>
                {item.content}
              </PolicyItem>
            ))}
          </ColumnsLayout>
        </PolicyWrapper>
      </LayoutWrapper>

      <LayoutWrapper dark>
        <PolicyWrapper
          title="Cookies Policy"
          subtitle="Last updated on the 17th of April 2019"
        >
          <ColumnsLayout columnsCount={2} largeSpacing>
            {cookiePolicyItems.map(item => (
              <PolicyItem key={item.title} title={item.title}>
                {item.content}
              </PolicyItem>
            ))}
          </ColumnsLayout>
        </PolicyWrapper>

        <div className="PrivacyPolicyPage__links">
          <Link href="http://www.allaboutcookies.org/">AllAboutCookies</Link>
          <Link href="http://www.networkadvertising.org/">
            Network Advertising Initiative
          </Link>
        </div>
      </LayoutWrapper>
    </BaseLayout>
  );
};

export default PrivacyPolicyPage;
