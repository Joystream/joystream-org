import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

function SiteMetadata({ description, lang, meta, title }) {
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
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
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
          name: 'robots',
          content: 'noindex, nofollow',
        },
      ].concat(meta)}
    />
  );
}

SiteMetadata.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
};

SiteMetadata.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SiteMetadata;
