import React, { useMemo } from 'react';
import { string, arrayOf, shape, number } from 'prop-types';

import SectionHeader from '../SectionHeader';

import { ReactComponent as NewTabIcon } from '../../../assets/svg/dashboard/new-tab.svg';

import './style.scss';

import roadmapData, { iconMap } from '../../../data/quarters';
import { parseQuarters } from '../../roadmap-page/Quarters';

const quarterPropTypes = {
  year: string.isRequired,
  id: string.isRequired,
  deliveryMilestones: arrayOf(
    shape({
      icon: string.isRequired,
      title: string.isRequired,
      Content: string.isRequired,
      generalIndex: number.isRequired,
    })
  ).isRequired,
  roadmapDataFilename: string,
};

const Quarter = ({ year, id, deliveryMilestones, roadmapDataFilename }) => {
  const onOpenRoadmap = () => {
    const url = `${window.origin}/roadmap?filename=${roadmapDataFilename}#head`;
    return window.open(url, '_blank');
  };

  return (
    <div className="dashboard-roadmap__quarter">
      <div className="dashboard-roadmap__quarter-header-wrapper">
        <div className="dashboard-roadmap__quarter-header">
          <h3 className="dashboard-roadmap__quarter-heading">{`${year} ${id}`}</h3>
          <button className="dashboard-roadmap__button-open-roadmap" onClick={onOpenRoadmap}>
            <span>Open roadmap</span>
            <NewTabIcon />
          </button>
        </div>
      </div>
      {deliveryMilestones.map((deliveryMilestone, index) => {
        return (
          <a
            key={deliveryMilestone.generalIndex}
            href={`${window.origin}/roadmap?filename=${roadmapDataFilename}#panel${deliveryMilestone.generalIndex}`}
            target="_blank"
            rel="noreferrer"
          >
            <div className="dashboard-roadmap__delivery-milestone">
              <div className="dashboard-roadmap__delivery-milestone-icon-wrapper">
                <img
                  className="dashboard-roadmap__delivery-milestone-icon"
                  src={iconMap[deliveryMilestone.icon]}
                  alt="delivery-milestone-icon"
                />
              </div>
              <h4 className="dashboard-roadmap__delivery-milestone-title">{`${index + 1}. ${
                deliveryMilestone.title
              }`}</h4>
              <p className="dashboard-roadmap__delivery-milestone-description">{deliveryMilestone.Content}</p>
            </div>
          </a>
        );
      })}
    </div>
  );
};

Quarter.propTypes = quarterPropTypes;

const Roadmap = () => {
  const roadmapDataFilename = useMemo(() => {
    const newestRoadmapData = roadmapData.find(({ isNewest }) => isNewest);
    return newestRoadmapData?.name;
  }, []);

  const quarters = useMemo(() => {
    const newestRoadmapData = roadmapData.find(({ isNewest }) => isNewest);
    const parsedQuarters = parseQuarters(newestRoadmapData?.value ?? []);
    const quartersInEnglish = parsedQuarters.find(({ language }) => language === 'English');
    return quartersInEnglish?.quarters;
  }, []);

  if (!quarters) {
    return null;
  }

  return (
    <section className="dashboard-roadmap">
      <div className="dashboard-roadmap__container">
        <SectionHeader sectionId="roadmap" sectionHeading="Roadmap" />
        {quarters.map((quarter, index) => {
          return <Quarter key={index} {...quarter} roadmapDataFilename={roadmapDataFilename} />;
        })}
      </div>
    </section>
  );
};

export default Roadmap;
