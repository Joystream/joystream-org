import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import logoTwitter from '../assets/images/logo-twitter.png';

const propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  img: PropTypes.node,
};

const defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
  img: logoTwitter,
};

function SiteMetadata({ description, lang, meta, title, img }) {
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
          content: '.' + img,
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
          content: '.' + img,
        },
      ].concat(meta)}
    />
  );
}

SiteMetadata.propTypes = propTypes;
SiteMetadata.defaultProps = defaultProps;

export default SiteMetadata;
