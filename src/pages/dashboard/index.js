import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import { useTranslation, useI18next, Trans } from 'gatsby-plugin-react-i18next';
import { LineChart, Line, CartesianGrid, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import Loader from 'react-loader-spinner';

import SiteMetadata from '../../components/SiteMetadata';
import BaseLayout from '../../components/_layouts/Base';

import useAtlasData from '../../utils/pages/dashboard/useAtlasData';
import usePioneerData from '../../utils/pages/dashboard/usePioneerData';

import './style.scss';

const DashboardTooltip = ({ payload, active }) => {
  const { t } = useTranslation();

  if (active && payload?.length) {
    const { name, value } = payload[0].payload;

    return (
      <div className="DashboardPage__linechart__tooltip">
        <p className="DashboardPage__linechart__tooltip__label">{name}</p>
        <p className="DashboardPage__linechart__tooltip__value">{t("dashboard.amount")}: <span>{value}</span></p>
      </div>
    );
  }

  return null;
};

const DashboardLineChart = ({ title, data, isLoading, error }) => (
  <>
    <h2 className="DashboardPage__subtitle">{title}</h2>
    <div className="DashboardPage__linechart-container">
      {isLoading ? (
        <Loader
          className="DashboardPage__linechart__loader"
          type="Oval"
          color="#6C6CFF"
          height="100%"
          width="100%"
          timeout={0}
        />
      ) : null}
      <ResponsiveContainer width="100%" height="100%">
        <LineChart className="Chart" data={data}>
          <CartesianGrid strokeDasharray="2000" stroke="#A7AEB7" opacity="30%" strokeWidth='1px'/>
          <XAxis dataKey="name" minTickGap={25} stroke="#A7AEB7" opacity="35%" strokeWidth='2px' />
          <Tooltip content={<DashboardTooltip />} />
          <Line type="monotone" dataKey="value" stroke="#6C6CFF" dot={false} strokeWidth="3px" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </>
);

const DashboardPage = () => {
  const { t } = useTranslation();
  const { language } = useI18next();
  const { videos, channels } = useAtlasData(300);
  const { users, posts, threads } = usePioneerData(300);

  return (
    <BaseLayout t={t}>
      <SiteMetadata
        lang={language}
        title={t('dashboard.siteMetadata.title')}
        description={t('dashboard.siteMetadata.description')}
      />

      <div className="DashboardPage__content-wrapper">
        <div className="DashboardPage__content">
          <h1 className="DashboardPage__title">{t('dashboard.title')}</h1>

          <DashboardLineChart title={t('dashboard.subtitles.videos')} {...videos} />

          <DashboardLineChart title={t('dashboard.subtitles.channels')} {...channels} />

          <DashboardLineChart title={t('dashboard.subtitles.users')} {...users} />

          <DashboardLineChart title={t('dashboard.subtitles.posts')} {...posts} />

          <DashboardLineChart title={t('dashboard.subtitles.threads')} {...threads} />
        </div>
      </div>
    </BaseLayout>
  );
};

export { DashboardPage };
export default DashboardPage;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      ...LanguageQueryFields
    }
  }
`;
