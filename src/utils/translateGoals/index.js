import React from 'react';
import { Trans } from 'gatsby-plugin-react-i18next';

const translateGoals = (goals, t) => {
  return goals.map(({ key, title, text, ...rest }) => {
    return {
      title: t(`${title}`),
      text: text.isModular ? <Trans i18nKey={text.key} components={text.components} /> : t(`${text}`),
      ...rest,
    };
  });
};

export default translateGoals;
