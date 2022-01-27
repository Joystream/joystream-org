import React from 'react';
import { ReactComponent as Council } from '../../../assets/svg/council.svg';
import { ReactComponent as WorkingGroup } from '../../../assets/svg/working-group.svg';
import { ReactComponent as Bounty } from '../../../assets/svg/bounty.svg';
import { ReactComponent as MakeBounty } from '../../../assets/svg/create-bounty.svg';
import './style.scss';

const TasksInfo = ({ t }) => {
  return (
    <div className="TasksInfo__wrapper">
      <h2 className="TasksInfo__title">{t('onboarding.page3.tasksInfo.title')}</h2>
      <div className="TasksInfo__content">
        <div className="TasksInfo__item">
          <Council className="TasksInfo__item__image" />
          <div className="TasksInfo__item__text__wrapper">
            <div className="TasksInfo__item__title">{t('onboarding.page3.tasksInfo.task1.title')}</div>
            <div className="TasksInfo__item__text">{t('onboarding.page3.tasksInfo.task1.text')}</div>
          </div>
        </div>
        <div className="TasksInfo__item">
          <WorkingGroup className="TasksInfo__item__image" />
          <div className="TasksInfo__item__text__wrapper">
            <div className="TasksInfo__item__title">{t('onboarding.page3.tasksInfo.task2.title')}</div>
            <div className="TasksInfo__item__text">{t('onboarding.page3.tasksInfo.task2.text')}</div>
          </div>
        </div>
        <div className="TasksInfo__item">
          <Bounty className="TasksInfo__item__image" />
          <div className="TasksInfo__item__text__wrapper">
            <div className="TasksInfo__item__title">{t('onboarding.page3.tasksInfo.task3.title')}</div>
            <div className="TasksInfo__item__text">{t('onboarding.page3.tasksInfo.task3.text')}</div>
          </div>
        </div>
        <div className="TasksInfo__item">
          <MakeBounty className="TasksInfo__item__image" />
          <div className="TasksInfo__item__text__wrapper">
            <div className="TasksInfo__item__title">{t('onboarding.page3.tasksInfo.task4.title')}</div>
            <div className="TasksInfo__item__text">{t('onboarding.page3.tasksInfo.task4.text')}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasksInfo;
