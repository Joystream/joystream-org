import React from 'react';
import { ReactComponent as LinkIcon } from '../../../assets/svg/linkIcon.svg';
import { mapData } from './roadMapData';

import './style.scss';

const RoadMap = () => {
  return (
    <div className="roadMap">
      <div className="title">
        <div>RoadMap</div>
        <button>
          Copy link to this section
          <LinkIcon />
        </button>
      </div>
      <hr />
      <div className="flex flex-column gap-24">
        {mapData.map(data => {
          return (
            <div className="flex flex-column gap-24">
              <div className="duration_time w-100">
                <span>{data.title}</span>
                <button>
                  <span>Open roadmap</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3 2C2.44772 2 2 2.44772 2 3V13C2 13.5523 2.44772 14 3 14H13C13.5523 14 14 13.5523 14 13V3C14 2.44772 13.5523 2 13 2H3ZM12.0001 9H10.0001V7.41421L6.70718 10.7071L5.29297 9.29289L8.58586 6H7.00008V4H12.0001V9Z"
                      fill="#F4F6F8"
                    />
                  </svg>
                </button>
              </div>
              <div className="display-grid">
                {data.content.map(list => {
                  return (
                    <div className="description">
                      <div className="des_img">{list.icon}</div>
                      <span className="subTitle"> {list.subTitle}</span>
                      <span className="sub_des">{list.description} </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RoadMap;
