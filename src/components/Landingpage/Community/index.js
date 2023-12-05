import React from 'react';
import { ReactComponent as InformationIcon } from '../../../assets/svg/Information.svg';
import { ReactComponent as LinkIcon } from '../../../assets/svg/linkIcon.svg';
import './style.scss';

const Community = () => {
  return (
    <div className="community">
      <div className="title">
        <div>Community</div>
        <button>
          Copy link to this section
          <LinkIcon />
        </button>
      </div>
      <hr />
      <div className="flex flex-column gap-80">
        <div className="flex gap-24">
          <div className="council w-full">
            <div className="flex flex-column gap-24">
              <span className="fs-55 fw-600 fc-F4F6F8">Council</span>
              <span className="council_des">
                {' '}
                orem ipsum dolor sit amet consectetur. Parturient urna massa arcu mi. Habitant sagittis adipiscing
                tempus integer risus vel gravida adipiscing. Nec ipsum diam varius augue odio magna pharetra orci.
                Malesuada luctus sit volutpat faucibus.
              </span>
            </div>
            <div className="flex gap-24 justify-between">
              <div className="flex flex-column gap-24">
                <div className="flex .item-center">
                  <span className="fs-21 fw-400">Current term</span>
                  <InformationIcon />
                </div>
                <span className="fs-42 fw-600 fc-FFF">10</span>
              </div>
              <div className="flex flex-column gap-24">
                <div className="flex item-center">
                  <span className="fs-21 fw-400">Term length</span>
                  <InformationIcon />
                </div>
                <span className="fs-42 fw-600 fc-FFF">30 days</span>
              </div>
            </div>
          </div>
          <div className="council_info"></div>
        </div>
      </div>
    </div>
  );
};
export default Community;
