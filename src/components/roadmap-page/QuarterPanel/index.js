import React from 'react';

import { ReactComponent as PlayIcon } from '../../../assets/svg/icon-play.svg';
import { ReactComponent as LinkIcon } from '../../../assets/svg/connect_disable.svg';
import './style.scss';

function QuarterPanel({ data, loading, error, language }) {
  const result = data.language === language ? data : false;

  if (!result) return <></>;

  if (loading) {
    return (
      <div className="QuarterPanel__main">
        <div className="QuarterPanel__main__title">
          <div className="QuarterPanel__main__subtitle__loading" />
          <div className="QuarterPanel__main__discription__loading" />
        </div>
        <div className="QuarterPanel__main__timeline">
          <div className="QuarterPanel__main__line"></div>
        </div>
        <div>
          <div className="QuarterPanel__main__panel__loading"></div>
        </div>
      </div>
    );
  }

  console.log(result);
  return (
    <div>
      {result.quarters.map((res, index) => {
        return (
          <div className="QuarterPanel__main" key={index}>
            <div className="QuarterPanel__main__title">
              <div className="QuarterPanel__main__subtitle">{data.year}</div>
              <div className="QuarterPanel__main__quarters">{res.id}</div>
            </div>
            <div className="QuarterPanel__main__timeline">
              <div className="QuarterPanel__main__line"></div>
            </div>
            <div>
              {res.deliveryMilestones.map((milestones) => {
                return (
                  <div className="QuarterPanel__main__panel">
                    <div className="QuarterPanel__main__link">
                      <div className="QuarterPanel__main__playIcon">
                        <PlayIcon />
                      </div>
                      <div className="QuarterPanel__main__linkIcon">
                        <LinkIcon />
                      </div>
                    </div>
                    <div className="QuarterPanel__main__panel__title">
                      {milestones.title}
                    </div>
                    <div className="QuarterPanel__main__panel__content">
                      {milestones.Content}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default QuarterPanel;
