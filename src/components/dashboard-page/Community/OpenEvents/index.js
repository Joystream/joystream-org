import React, { useMemo } from 'react';
import { string, instanceOf, arrayOf, shape, bool, number } from 'prop-types';

import DashboardWigetHeading from '../../../DashboardWidgetHeading';
import DashboardCarousel from '../../../DashboardCarousel';
import useDashboardMedia from '../../../../utils/useDashboardMedia';

import { ReactComponent as SoundIcon } from '../../../../assets/svg/dashboard/sound.svg';

import { eventsDateTimeFormat, eventsShortDateTimeFormat, isToday, isTomorrow, isSameDate } from '../utils';

import './style.scss';

const eventPropTypes = {
  name: string.isRequired,
  date: instanceOf(Date).isRequired,
  description: string.isRequired,
  discordVoice: string.isRequired,
  withDateLabel: bool,
  eventsOnDateCount: number,
};

const Event = ({ name, date, description, discordVoice, withDateLabel, eventsOnDateCount }) => {
  const { currentBreakpoints } = useDashboardMedia();
  const gap = useMemo(() => {
    switch (currentBreakpoints) {
      case 'xxs':
      case 'xs':
      case 'sm':
        return 16;
      default:
        return 24;
    }
  }, [currentBreakpoints]);

  const formattedDate = eventsDateTimeFormat.format(date);
  const formattedDateLabel = `${formattedDate.split(',').join(' at')} CEST`;

  const formattedShortDate = eventsShortDateTimeFormat.format(date);

  return (
    <div className="dashboard-community-open-events__event">
      <div className="dashboard-community-open-events__event-picture"></div>
      <div className="dashboard-community-open-events__event-descr-container">
        <div className="dashboard-community-open-events__event-descr-wrapper">
          <h4 className="dashboard-community-open-events__event-name">{name}</h4>
          <p className="dashboard-community-open-events__event-date">{formattedDateLabel}</p>
          <p className="dashboard-community-open-events__event-descr">{description}</p>
        </div>
        <div className="dashboard-community-open-events__event-discord-descr">
          <SoundIcon />
          <p className="dashboard-community-open-events__event-discord-voice">{discordVoice}</p>
        </div>
      </div>
      {withDateLabel && (
        <div
          className="dashboard-community-open-events__event-date-label"
          style={
            eventsOnDateCount > 1
              ? { width: `calc(${eventsOnDateCount * 100}% + ${(eventsOnDateCount - 1) * gap}px)` }
              : {}
          }
        >
          <p>{isToday(date) ? 'Today' : isTomorrow(date) ? 'Tomorrow' : formattedShortDate}</p>
        </div>
      )}
    </div>
  );
};

Event.propTypes = eventPropTypes;

const openEventsPropTypes = {
  events: arrayOf(shape(eventPropTypes)),
};

const OpenEvents = ({ events }) => {
  return (
    <div className="dashboard-community-open-events">
      <DashboardWigetHeading heading="Open events" headingWrapperCn="dashboard-community-open-events__heading" />
      <DashboardCarousel withLgSlides carouselCn="dashboard-community-open-events__carousel">
        {events.map((e, index) => {
          const firstEventOnDateIdx = events.findIndex(openEvent => isSameDate(openEvent.date, e.date));
          const eventsOnDateCount = events.filter(openEvent => isSameDate(openEvent.date, e.date)).length;

          return (
            <Event
              key={index}
              {...e}
              withDateLabel={index === firstEventOnDateIdx}
              eventsOnDateCount={eventsOnDateCount}
            />
          );
        })}
      </DashboardCarousel>
    </div>
  );
};

OpenEvents.propTypes = openEventsPropTypes;

export default OpenEvents;
