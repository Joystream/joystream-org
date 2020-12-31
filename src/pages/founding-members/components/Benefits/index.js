import React from 'react';
import ParticipationPayout from '../../../../assets/svg/joy-token.svg';
import MembershipStatus from '../../../../assets/svg/membership-status.svg';
import HandcraftedAvatar from '../../../../assets/svg/handcrafted-avatar.svg';
import TakePart from '../TakePart';

import './style.scss';

const BenefitsItem = ({ imageSrc, text, title }) => (
  <div className="FoundingMembersPage__benefit">
    <img src={imageSrc} alt='benefit-item'/>
    <h3 className='FoundingMembersPage__benefit__title'>{title}</h3>
    <p>{text}</p>
  </div>
);

const Benefits = () => (
  <div className="FoundingMembersPage__benefits">
    <div className="FoundingMembersPage__benefits__explanation">
      <h2 className="FoundingMembersPage__benefits__explanation__title">
        What is a founding <br /> member program <br /> and why it exists?
      </h2>
      <div className="FoundingMembersPage__benefits__explanation__text">
        <p>
          One of the prerequisites for successfully launching the Joystream system is that a sufficiently large,
          effective and motivated community of users is ready to occupy all the different roles required to run, evolve
          and grow the platform. The purpose of the founding member program is to serve this end.
        </p>
        <p className='FoundingMembersPage__benefits__explanation__quote'>
          "A founding member does have the freedom to opt out of any of these as desired."
        </p>
        <p>
          <span>A founding member does have the freedom to opt out of any of these as desired. </span> A new official community member
          status, called founding member, will be made available.
        </p>
      </div>
    </div>
    <h2 className="FoundingMembersPage__benefits__title">Benefits</h2>
    <h2 className='FoundingMembersPage__benefits__alternate-title'>Benefits of becoming a founding member</h2>

    <div className="FoundingMembersPage__benefits__container">
      <BenefitsItem
        imageSrc={ParticipationPayout}
        title={'Tokens'}
        text={
          'allocated tokens in the genesis block of the Joystream mainnet as a result of high quality participation and recruiting other participants'
        }
      />
      <BenefitsItem
        imageSrc={MembershipStatus}
        title={'Membership status'}
        text={
          'special status membership in genesis block, which will have a visually distinguished presentation in Pioneer and other products'
        }
      />
      <BenefitsItem
        imageSrc={HandcraftedAvatar}
        title={'Handcrafted avatar'}
        text={
          'receive a handcrafted premium membership avatar and be honoured on official Joystream website and social media leading up to mainnet'
        }
      />
    </div>

    <TakePart />
  </div>
);

export default Benefits;
