import React from 'react';

import storageWorkingGroupLogo from '../../../assets/images/dashboard/working-groups/storage.png';
import contentWorkingGroupLogo from '../../../assets/images/dashboard/working-groups/content.png';
import membershipWorkingGroupLogo from '../../../assets/images/dashboard/working-groups/membership.png';
import appsWorkingGroupLogo from '../../../assets/images/dashboard/working-groups/apps.png';
import buildersWorkingGroupLogo from '../../../assets/images/dashboard/working-groups/builders.png';
import distributionWorkingGroupLogo from '../../../assets/images/dashboard/working-groups/distribution.png';
import forumWorkingGroupLogo from '../../../assets/images/dashboard/working-groups/forum.png';
import hrWorkingGroupLogo from '../../../assets/images/dashboard/working-groups/hr.png';
import marketingWorkingGroupLogo from '../../../assets/images/dashboard/working-groups/marketing.png';

import bedehoAvatar from '../../../assets/images/dashboard/founders/bedeho.png';
import mokhtarAvatar from '../../../assets/images/dashboard/founders/mokhtar.png';

import { ReactComponent as MailIcon } from '../../../assets/svg/dashboard/mail.svg';
import { ReactComponent as TwitterLogo } from '../../../assets/svg/dashboard/twitter-logo.svg';
import { ReactComponent as TelegramLogo } from '../../../assets/svg/dashboard/telegram-logo.svg';
import { ReactComponent as DiscordLogo } from '../../../assets/svg/dashboard/discord-logo.svg';

import { withFallbackNumVal } from '../../../utils/withFallbackVal';

export const founders = [
  {
    name: 'Bedeho Mender',
    avatar: bedehoAvatar,
    socialMediaUsernames: [
      {
        socialMedia: 'email',
        username: 'bedeho@jsgenesis.com',
      },
      {
        socialMedia: 'twitter',
        username: 'bedeho',
      },
      {
        socialMedia: 'telegram',
        username: 'bedeho',
      },
      {
        socialMedia: 'discord',
        username: 'bedeho',
      },
    ],
  },
  {
    name: 'Mokhtar Naamani',
    avatar: mokhtarAvatar,
    socialMediaUsernames: [
      {
        socialMedia: 'email',
        username: 'mokhtar@jsgenesis.com',
      },
      {
        socialMedia: 'twitter',
        username: 'Mokhtar',
      },
      {
        socialMedia: 'telegram',
        username: 'Mokhtar',
      },
      {
        socialMedia: 'discord',
        username: 'Mokhtar',
      },
    ],
  },
];

export const renderSocialMediaLogo = socialMedia => {
  switch (socialMedia) {
    case 'email':
      return <MailIcon />;
    case 'twitter':
      return <TwitterLogo />;
    case 'telegram':
      return <TelegramLogo />;
    case 'discord':
      return <DiscordLogo />;
    default:
      return null;
  }
};

export const parseCouncilTermLength = (data = {}) => `${withFallbackNumVal(data?.termLength)} days`;

const desiredSocialMediaOrder = {
  email: 0,
  twitter: 1,
  telegram: 2,
  discord: 3,
};

export const parsePastCouncils = (councils = []) =>
  councils.map(c => ({
    linkToPioneerProfile: c.link,
    username: c.handle,
    avatar: c.avatar,
    socialMediaUsernames: c.socials
      .map(social => ({
        socialMedia: social.type.toLowerCase(),
        username: social.value,
      }))
      .sort((a, b) => desiredSocialMediaOrder[a.socialMedia] - desiredSocialMediaOrder[b.socialMedia]),
    timesServed: c.timesServed,
  }));

export const getWorkingGroupName = key => {
  const groupName = key.replace(/workingGroup/gi, '');
  // Assuming there is single uppercase char (e.g. operationsAlpha), so not using g flag
  const caps = groupName.match(/[A-Z]/);
  const hasUppercase = !caps;

  if (hasUppercase) {
    return groupName;
  }

  const capsPart = groupName.substring(groupName.indexOf(caps[0]));
  return groupName.replace(capsPart, ` ${capsPart}`);
};

const workingGroupsLogos = {
  appWorkingGroup: appsWorkingGroupLogo,
  contentWorkingGroup: contentWorkingGroupLogo,
  distributionWorkingGroup: distributionWorkingGroupLogo,
  forumWorkingGroup: forumWorkingGroupLogo,
  membershipWorkingGroup: membershipWorkingGroupLogo,
  operationsWorkingGroupAlpha: buildersWorkingGroupLogo,
  operationsWorkingGroupBeta: hrWorkingGroupLogo,
  operationsWorkingGroupGamma: marketingWorkingGroupLogo,
  storageWorkingGroup: storageWorkingGroupLogo,
};

const getWorkingGroupLead = (workers = []) => {
  const lead = workers.find(w => w.isLead);
  return {
    avatar: lead?.avatar,
    username: lead?.handle,
  };
};

export const parseWorkingGroups = (workingGroups = {}) => {
  const parsed = [];
  const keys = Object.keys(workingGroups);
  for (const key of keys) {
    const group = workingGroups[key];
    const lead = getWorkingGroupLead(group.workers);

    if (!group.budget || !group.workers.length || !lead.username) {
      continue;
    }

    parsed.push({
      link: `https://pioneerapp.xyz/#/working-groups/${
        group.name === 'Human Resources' ? 'hr' : group.name.toLowerCase()
      }`,
      name: group.name,
      logo: workingGroupsLogos[key],
      // French locale uses space as a separator
      currentBudget: `${Math.round(group.budget).toLocaleString('fr-FR')} JOY`,
      lead,
      workers: group.workers.map(w => ({
        avatar: w.avatar,
        username: w.handle,
      })),
    });
  }

  return parsed;
};

export const jsgenesisLink = 'http://www.jsgenesis.com/';
