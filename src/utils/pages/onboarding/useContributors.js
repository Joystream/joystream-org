import { useState, useEffect } from 'react';

const useContributors = () => {
  const [role, setRole] = useState();

  useEffect(() => {
    setRole(localStorage.getItem('JoystreamRole'));
  }, []);

  const roleSuffixes = {
    builder: {
      title: 'onboarding.readyToContribureRoles.builder.title',
      text: 'onboarding.readyToContribureRoles.builder.text',
    },
    techie: {
      title: 'onboarding.readyToContribureRoles.techie.title',
      text: 'onboarding.readyToContribureRoles.techie.text',
    },
    marketer: {
      title: 'onboarding.readyToContribureRoles.marketer.title',
      text: 'onboarding.readyToContribureRoles.marketer.text',
    },
    organiser: {
      title: 'onboarding.readyToContribureRoles.organiser.title',
      text: 'onboarding.readyToContribureRoles.organiser.text',
    },
    curator: {
      title: 'onboarding.readyToContribureRoles.curator.title',
      text: 'onboarding.readyToContribureRoles.curator.text',
    },
    videocreator: {
      title: 'onboarding.readyToContribureRoles.videoCreator.title',
      text: 'onboarding.readyToContribureRoles.videoCreator.text',
    },
  };

  const contributorUrls = {
    builder: 'builder',
    techie: 'techie',
    marketer: 'marketer',
    organiser: 'organiser',
    curator: 'curator',
    videocreator: 'video-creator',
  };

  const getContributorPageUrl = selectedRole => {
    if (selectedRole) {
      return `/contribute/${contributorUrls[selectedRole.toLowerCase().replaceAll(' ', '')]}`;
    }
    if (role) {
      return `/contribute/${contributorUrls[role.toLowerCase().replaceAll(' ', '')]}`;
    }
    return undefined;
  };

  return { roleSuffixes, getContributorPageUrl };
};

export default useContributors;
