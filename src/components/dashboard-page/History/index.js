import React, { useState } from 'react';
import ReactModal from 'react-modal';
import cn from 'classnames';
import { string, func, number, arrayOf, shape } from 'prop-types';

import SectionHeader from '../SectionHeader';
import Carousel from '../Carousel';
import Markdown from './Markdown';
import ArrowButton from '../ArrowButton';

import { ReactComponent as WhiteCrossIcon } from '../../../assets/svg/dashboard/white-cross.svg';
import { ReactComponent as PrevStoryPointer } from '../../../assets/svg/dashboard/prev-story-pointer.svg';
import { ReactComponent as NextStoryPointer } from '../../../assets/svg/dashboard/next-story-pointer.svg';

import { historyStages } from './data';

import './style.scss';

ReactModal.setAppElement('#___gatsby');

const dashboardHistoryStagePropTypes = {
  img: string.isRequired,
  date: string.isRequired,
  shortDescr: string.isRequired,
  longDescr: string,
  onClick: func,
};

const DashboardHistoryStage = ({ img, date, shortDescr, longDescr, onClick }) => {
  return (
    <div
      style={{ flexShrink: 0 }}
      className={cn('dashboard-history__stage', { 'card-interactive': !!longDescr })}
      role="button"
      tabIndex={0}
      onKeyPress={() => {}}
      onClick={onClick}
    >
      <div className="dashboard-history__stage-img-wrapper">
        <img className="dashboard-history__stage-img" src={img} alt="joystream-history-stage-img" />
        <div className="dashboard-history__stage-img-overlay"></div>
      </div>
      <div className="dashboard-history__stage-descr-wrapper">
        <div className="dashboard-history__stage-short-descr-wrapper">
          <h4 className="dashboard-history__stage-date">{date}</h4>
          <p className="dashboard-history__stage-descr">{shortDescr}</p>
        </div>
        {!!longDescr && <ArrowButton text="Read more" buttonCn="dashboard-history__button-read-more" />}
      </div>
    </div>
  );
};

DashboardHistoryStage.propTypes = dashboardHistoryStagePropTypes;

const dashboardHistoryModalContentPropTypes = {
  onModalClose: func.isRequired,
  stages: arrayOf(
    shape({
      img: string.isRequired,
      date: string.isRequired,
      shortDescr: string.isRequired,
      longDescr: string,
    })
  ).isRequired,
  stageIdx: number.isRequired,
};

const DashboardHistoryModalContent = ({ onModalClose, stages, stageIdx }) => {
  const [currentStageIdx, setCurrentStageIndex] = useState(stageIdx);
  const showPrevStage = () => setCurrentStageIndex(prevStageIdx => prevStageIdx - 1);
  const showNextStage = () => setCurrentStageIndex(prevStageIdx => prevStageIdx + 1);

  const currentStage = stages[currentStageIdx];
  const stagesQuantity = stages.length;
  const isShowPrevStageBtnDisabled = currentStageIdx === 0;
  const isShowNextStageBtnDisabled = currentStageIdx === stagesQuantity - 1;

  return (
    <div className="dashboard-history__modal-content">
      <button className="dashboard-history__button-close-modal dashboard-history__button" onClick={onModalClose}>
        <WhiteCrossIcon />
      </button>
      <div
        style={{ backgroundImage: `url(${currentStage.img})` }}
        className="dashboard-history__modal-img-wrapper"
      ></div>
      <div className="dashboard-history__modal-long-descr-wrapper">
        <p className="dashboard-history__modal-long-descr-title">
          {currentStage.date}
          &nbsp;
          <span className="dashboard-history__modal-long-descr-title_regular">•</span>
          &nbsp;
          {currentStage.shortDescr}
        </p>
        <Markdown content={currentStage.longDescr} />
      </div>
      <div className="dashboard-history__modal-actions">
        <button
          className="dashboard-history__button-modal-action dashboard-history__button"
          disabled={isShowPrevStageBtnDisabled}
          onClick={showPrevStage}
        >
          <PrevStoryPointer />
          Read previous
        </button>
        <p className="dashboard-history__stages-count">
          <span className="dashboard-history__stages-count_current">{currentStageIdx + 1}</span>
          {` / ${stagesQuantity}`}
        </p>
        <button
          className="dashboard-history__button-modal-action dashboard-history__button"
          disabled={isShowNextStageBtnDisabled}
          onClick={showNextStage}
        >
          Read next
          <NextStoryPointer />
        </button>
      </div>
    </div>
  );
};

DashboardHistoryModalContent.propTypes = dashboardHistoryModalContentPropTypes;

const DashboardHistory = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [interactiveStageIdx, setInteractiveStageIdx] = useState(0);

  const interactiveStages = historyStages.filter(historyStage => !!historyStage.longDescr);

  const onModalOpen = historyStage => {
    if (!historyStage.longDescr) {
      return;
    }

    const stageIdx = interactiveStages.findIndex(stage => historyStage.date === stage.date);
    setInteractiveStageIdx(stageIdx);

    return setModalOpen(true);
  };

  const onModalClose = () => setModalOpen(false);

  return (
    <>
      <section className="dashboard-history">
        <div className="dashboard-history__container">
          <SectionHeader sectionId="history" sectionHeading="History" />
          <Carousel>
            {historyStages.map((historyStage, index) => {
              return <DashboardHistoryStage key={index} {...historyStage} onClick={() => onModalOpen(historyStage)} />;
            })}
          </Carousel>
        </div>
      </section>
      <ReactModal
        className="dashboard-history__modal"
        overlayClassName="dashboard-history__modal-overlay"
        isOpen={modalOpen}
        onRequestClose={onModalClose}
        shouldCloseOnEsc
        shouldCloseOnOverlayClick
        shouldReturnFocusAfterClose={false}
      >
        <DashboardHistoryModalContent
          onModalClose={onModalClose}
          stages={interactiveStages}
          stageIdx={interactiveStageIdx}
        />
      </ReactModal>
    </>
  );
};

export default DashboardHistory;
