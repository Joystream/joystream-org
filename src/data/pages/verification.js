import React from 'react';

export const verifiedMembers = [
  {
    memberHandle: 'leet_joy',
    avatarUrl: 'https://raw.githubusercontent.com/Joystream/founding-members/main/avatars/primary-avatar/42.png',
    title: 'verification.title.marketingLead',
    socials: {
      telegram: '@el33t',
      twitter: '@leet_joy',
      email: 'leet@joy.stream',
      discord: '@joystream',
    },
    safety: {
      notAllowed: [
        { text: 'verification.safety.willNever.items.askForMoney' },
        { text: 'verification.safety.willNever.items.askForPasswordsOrSensitiveInformation' },
        { text: 'verification.safety.willNever.items.sendAnythingDangerous' },
        {
          text: 'verification.safety.willNever.items.askToVisitLinks',
          components: [<a href="https://www.joystream.org">Joystream.org</a>],
        },
      ],
      allowed: [{ text: 'verification.safety.can.items.inviteToYpp' }],
    },
  },
  {
    memberHandle: 'vikan#4315',
    substituteUserRoute: 'vikan',
    avatarUrl: 'https://raw.githubusercontent.com/Joystream/founding-members/main/avatars/primary-avatar/90.png',
    title: 'verification.title.outreachSpecialist',
    socials: {
      telegram: '@vikan393',
      twitter: '@jvikan1',
      email: 'vikan4joystream@gmail.com',
      discord: '@v.i.k.a.n',
    },
    safety: {
      notAllowed: [
        { text: 'verification.safety.willNever.items.askForMoney' },
        { text: 'verification.safety.willNever.items.askForPasswordsOrSensitiveInformation' },
        { text: 'verification.safety.willNever.items.sendAnythingDangerous' },
        {
          text: 'verification.safety.willNever.items.askToVisitLinks',
          components: [<a href="https://www.joystream.org">Joystream.org</a>],
        },
      ],
      allowed: [{ text: 'verification.safety.can.items.inviteToYpp' }],
    },
  },
];
