import { number, shape, string, node, bool, func, arrayOf, oneOfType } from 'prop-types';
import React from 'react';
import cn from 'classnames';

import AnalyticsItem from './AnalyticsItem';

import { defaultItems } from './data';

import './style.scss';

const propTypes = {
  className: string,
  children: node,
  large: bool,
  content: shape({
    validatorsCount: number,
    blockHeight: string,
    councilStage: string,
    membershipsMembers: number,
    forumPosts: number,
    mediaFiles: number,
    rolesProviders: number,
  }).isRequired,
  items: arrayOf(
    shape({
      title: string,
      image: oneOfType([func, node]),
      key: string,
      value: string,
    })
  ),
};

const defaultProps = {
  className: '',
  children: null,
  items: defaultItems,
};

const Analytics = ({ className, content, children, items, large, ...props }) => {
  return (
    <section className={cn('Analytics', className, { 'Analytics--large': large })} {...props}>
      <div className="Analytics__container">
        {items.map(item => {
          const value = item.key ? content[item.key] || '-' : item.value;

          return <AnalyticsItem key={item.title} {...item} value={value} inline={large} />;
        })}
      </div>
      {children && <div className="Analytics__content">{children}</div>}
    </section>
  );
};

Analytics.propTypes = propTypes;
Analytics.defaultProps = defaultProps;

export default Analytics;
