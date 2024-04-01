import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import logoTwitter from '../assets/images/logo-twitter.png';
import { LiveSessionScript } from '../data/siteMetadata';

const propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.node,
};

const defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
  image: logoTwitter,
};

function SiteMetadata({ description, lang, meta, title, image }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `
  );

  const imagePath = site.siteMetadata.siteUrl + image;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          name: 'description',
          content: description,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: description,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:image',
          content: imagePath,
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: description,
        },
        {
          name: 'twitter:image',
          content: imagePath,
        },
      ].concat(meta)}
      script={[
        {
          type: 'text/javascript',
          innerHTML: LiveSessionScript,
        },
        {
          type: 'text/javascript',
          defer: true,
          src: 'https://changenow.io/embeds/exchange-widget/v2/stepper-connector.js',
        },
        {
          type: 'text/javascript',
          innerHTML:
            'window.embeddedChatbotConfig = { chatbotId: "eYESFSAOucd20nOS3ZUAU", domain: "www.chatbase.co" };',
        },
        {
          type: 'text/javascript',
          src: 'https://www.chatbase.co/embed.min.js',
          chatbotId: 'eYESFSAOucd20nOS3ZUAU',
          domain: 'www.chatbase.co',
          defer: true,
        },
      ]}
    />
  );
}

SiteMetadata.propTypes = propTypes;
SiteMetadata.defaultProps = defaultProps;

export default SiteMetadata;
