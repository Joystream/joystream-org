import React from 'react';
import { ReactComponent as InformationIcon } from '../../../assets/svg/Information.svg';
import { ReactComponent as LinkIcon } from '../../../assets/svg/linkIcon.svg';
import { ReactComponent as OpenIcon } from '../../../assets/svg/Open_Icon.svg';
import { ReactComponent as ReadIcon } from '../../../assets/svg/Read.svg';
import { ReactComponent as TelelgramIcon } from '../../../assets/svg/Telegram.svg';
import { ReactComponent as TwitterIcon } from '../../../assets/svg/Twitter.svg';
import { ReactComponent as DiscordIcon } from '../../../assets/svg/Discord.svg';
import { ReactComponent as ArrowIcon } from '../../../assets/svg/arrow.svg';

import council_icon from '../../../assets/images/council_icon.png';
import storage_img from '../../../assets/images/storage_img.png';
import avatar_img from '../../../assets/images/avatar_img.png';
import member_avatar from '../../../assets/images/member_avatar.png';




import './style.scss';

const Community = () => {
  const Council_Card = () => {
    return (
      <div className="card">
        <div className="overlay">
          <img src={council_icon} alt="" />
        </div>
        <div className="card_info">
          <img src={council_icon} alt="" />
          <span className="fs-21 fs-600 mt-8 mb-8">chaso77</span>
          <div>
            <div className="info_style">
              <ReadIcon />
              <span className="fs-12 fw-500">chrlschwb77@gmail.com</span>
            </div>
            <div className="info_style">
              <TwitterIcon />
              <span className="fs-12 fw-500">Chaos77125</span>
            </div>
            <div className="info_style">
              <TelelgramIcon />
              <span className="fs-12 fw-500">Chaos77125</span>
            </div>
            <div className="info_style">
              <DiscordIcon />
              <span className="fs-12 fw-500">Chaos77125</span>
            </div>
          </div>
          <div className="flex justify-center item-center mt-24">
            <span className="fs-16 fw-400">Times served</span>
            <InformationIcon />
          </div>
          <span className="fs-24 fw-600 mt-8">7</span>
        </div>
      </div>
    );
  };

  const Group_Card = () => {
    return(
      <div className="group_card">
        <div>
          <div className="overlay">
            <img src={storage_img} alt="" />
          </div>
          <div className="storage_img">
            <img src={storage_img} alt="" />
          </div>
        </div>
        <div className="group_info">
          <span className="fs-32 fw-600 text-center">Storage</span>
          <div className="flex w-100">
            <div className="flex flex-column flex-1 gap-4">
              <span className="fs-6 fw-400 fc-B5C1C9">WG Lead:</span>
              <div className="flex gap-8">
                <img src={avatar_img} alt="" className="avatar_img"/>
                <span className="fs-24 fw-600">yyagi</span>
              </div>
            </div>
            <div className="flex flex-column flex-1 gap-8">
              <span className="fs-6 fw-400 fc-B5C1C9">Current budget:</span>
              <span className="fs-24 fw-600">28 109 JOY</span>
            </div>
          </div>
          <div className="flex flex-column gap-8">
            <span className="fs-6 fw-400 fc-B5C1C9">Workers(12)</span>
            <div className="flex flex-wrap gap-8">
              <div className="avatar">
                <img src={avatar_img} alt="" className="avatar_img"/>
                <span className="fs-12 fw-500">yyagi</span>
              </div>
              <div className="avatar">
                <img src={avatar_img} alt="" className="avatar_img"/>
                <span className="fs-12 fw-500">yyagi</span>
              </div><div className="avatar">
                <img src={avatar_img} alt="" className="avatar_img"/>
                <span className="fs-12 fw-500">yyagi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
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
        <div className="flex flex-column gap-24">
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
            <div className="flex flex-column gap-24 item-end">
              <div className="flex gap-24">
                <div className="flex flex-column gap-24">
                  <div className="flex item-center">
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
              <div className="view_btn w-60">
                <div className="fs-16">View past councils</div>
                <OpenIcon />
              </div>
            </div>
          </div>
          <div className="display-grid">
            <div className="council_plan">
              <div className="flex gap-8 item-center">
                <span className="fs-16 fw-600">Current council</span>
                <InformationIcon />
              </div>
              <div className="flex flex-column gap-40">
                <div className="flex flex-column">
                  <span className="fs-21 fc-B5C1C9">Elected on</span>
                  <span className="fs-32 fw-600 mt-8">28 Noc 2023</span>
                </div>
                <div className="flex flex-column gap-8">
                  <div className="progress_bg relative">
                    <div className="progress_bar"></div>
                  </div>
                  <div>
                    <span className="fs-21">12</span>
                    <span className="fc-B5C1C9 fs-21">Days until next election</span>
                  </div>
                </div>
                <div className="flex flex-column">
                  <span className="fs-21 fc-B5C1C9">Weekly councilor salary</span>
                  <span className="fs-32 fw-600 mt-8">300 000 JOY</span>
                </div>
                <div className="plan_view_btn">
                  <span className="fs-16 fw-600">Read council plan</span>
                  <OpenIcon />
                </div>
              </div>
            </div>
            <Council_Card />
            <Council_Card />
            <Council_Card />
          </div>
        </div>
        <div className="flex flex-column gap-24">
          <div className="groups_box">
            <span className="fs-55 fw-600">Working groups</span>
            <span className="fs-14 fw-400 w-40">Lorem ipsum dolor sit amet consectetur. Parturient urna massa arcu mi. Habitant sagittis adipiscing tempus integer risus vel gravida adipiscing. Nec ipsum diam varius augue odio magna pharetra orci. Malesuada luctus sit volutpat faucibus.</span>
          </div>
          <div>
            <div className="flex gap-24">
              <Group_Card/>
              <Group_Card/>
            </div>
          </div>
        </div>
        <div className="flex gap-24">
          <div className="member_Card_Des">
            <div className="flex flex-column justify-between h-100">
              <span className="fs-55 fw-600">Jsgenesis</span>
              <div className="flex flex-column gap-8">
                <div className="fs-14 fc-B5C1C9 w-70">
                  Lorem ipsum dolor sit amet consectetur. Parturient urna massa arcu mi. Habitant sagittis adipiscing tempus integer risus vel gravida adipiscing. Nec ipsum diam varius augue odio magna pharetra orci. Malesuada luctus sit volutpat faucibus.
                </div>
                <div className="flex item-center gap-8 ">
                  <span className="fs-16 fw0699 fc-6C6CFF">Read more</span>
                  <ArrowIcon/>
                </div>
              </div>
            </div>
          </div>
          <div className="member_Card">
            <div className="flex flex-column gap-12 justify-center item-center">
              <img src={member_avatar} alt=""/>
              <div className="flex flex-column">
                <span className="fs-12 fw-700 text-center">Co-Founder</span>
                <span className="fs-21 fw-600 mt-8">Bedeho Mender</span>
              </div>
              <div className="flex justify-center flex-wrap py-20 gap-8">
                <div className="info_style">
                  <ReadIcon />
                  <span className="fs-12 fw-500">chrlschwb77@gmail.com</span>
                </div>
                <div className="info_style">
                  <TwitterIcon />
                  <span className="fs-12 fw-500">Chaos77125</span>
                </div>
                <div className="info_style">
                  <TelelgramIcon />
                  <span className="fs-12 fw-500">Chaos77125</span>
                </div>
                <div className="info_style">
                  <DiscordIcon />
                  <span className="fs-12 fw-500">Chaos77125</span>
                </div>
              </div>
            </div>
          </div>
          <div className="member_Card">
            <div className="flex flex-column gap-12 justify-center item-center">
              <img src={member_avatar} alt=""/>
              <div className="flex flex-column">
                <span className="fs-12 fw-700 text-center">Co-Founder</span>
                <span className="fs-21 fw-600 mt-8">Bedeho Mender</span>
              </div>
              <div className="flex justify-center flex-wrap py-20 gap-8">
                <div className="info_style">
                  <ReadIcon />
                  <span className="fs-12 fw-500">chrlschwb77@gmail.com</span>
                </div>
                <div className="info_style">
                  <TwitterIcon />
                  <span className="fs-12 fw-500">Chaos77125</span>
                </div>
                <div className="info_style">
                  <TelelgramIcon />
                  <span className="fs-12 fw-500">Chaos77125</span>
                </div>
                <div className="info_style">
                  <DiscordIcon />
                  <span className="fs-12 fw-500">Chaos77125</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Community;
