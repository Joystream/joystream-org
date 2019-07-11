import { number, shape, string, node } from 'prop-types';
import React from 'react';
import cn from 'classnames';

import AnalyticsItem from './AnalyticsItem';

import { items } from './data';

import './style.scss';

const propTypes = {
  className: string,
  children: node,
  content: shape({
    validatorsCount: number,
    blockHeight: number,
    councilStage: string,
    membershipsMembers: number,
    forumPosts: number,
    mediaFiles: number,
    rolesProviders: number,
  }).isRequired,
};

const defaultProps = {
  className: '',
  children: null,
};

const Analytics = ({ className, content, children, ...props }) => {
  return (
    <section className={cn('Analytics', className)} {...props}>
      <div className="Analytics__container">
        {items.map(item => {
          const value = item.key ? content[item.key] : item.value || '-';

          return <AnalyticsItem key={item.title} {...item} value={value} />;
        })}
      </div>
      {children && <div className="Analytics__content">{children}</div>}
    </section>
  );
};

Analytics.propTypes = propTypes;
Analytics.defaultProps = defaultProps;

export default Analytics;
