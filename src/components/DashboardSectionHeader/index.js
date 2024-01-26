import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import { string } from 'prop-types';

import { ReactComponent as CopyLinkIcon } from '../../assets/svg/dashboard/copy-link-icon.svg';

import './style.scss';

const propTypes = {
  sectionId: string.isRequired,
  sectionHeading: string.isRequired,
};

const timeLinkCopiedTooltipVisibleFor = 3000; // in ms

const DashboardSectionHeader = ({ sectionId, sectionHeading }) => {
  const [isLinkCopiedTooltipVisible, setIsLinkCopiedTooltipVisible] = useState(false);

  const onButtonCopyLinkClick = async () => {
    const location = window.location.href;
    const noHash = location.replace(/#.*/gm, '');
    await navigator.clipboard.writeText(`${noHash}#${sectionId}`);

    if (isLinkCopiedTooltipVisible) {
      return;
    }
    setIsLinkCopiedTooltipVisible(true);
  };

  useEffect(() => {
    if (!isLinkCopiedTooltipVisible) {
      return;
    }
    const linkCopiedTooltipVisibleTimeoutId = setTimeout(() => {
      setIsLinkCopiedTooltipVisible(false);
    }, timeLinkCopiedTooltipVisibleFor);
    return () => {
      clearTimeout(linkCopiedTooltipVisibleTimeoutId);
    };
  }, [isLinkCopiedTooltipVisible]);

  return (
    <div id={sectionId} className="dashboard-section-header">
      <h2 className="dashboard-section-header__heading">{sectionHeading}</h2>
      <button className="dashboard-section-header__button-copy-link" onClick={onButtonCopyLinkClick}>
        <span className="dashboard-section-header__button-copy-link_short-text">Copy link</span>
        <span className="dashboard-section-header__button-copy-link_text">Copy link to this section</span>
        <CopyLinkIcon className="dashboard-section-header__button-copy-link_icon" />
      </button>
      <div
        role="tooltip"
        className={cn('dashboard-section-header__tooltip', {
          'is-link-copied-tooltip-visible': isLinkCopiedTooltipVisible,
        })}
      >
        <p className="dashboard-section-header__tooltip-text">Link copied to the clipboard!</p>
      </div>
    </div>
  );
};

DashboardSectionHeader.propTypes = propTypes;

export default DashboardSectionHeader;
