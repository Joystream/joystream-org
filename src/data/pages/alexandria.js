const goalsData = [
  {
    title: 'Cleaning up the membership module',
    text: `Tackling technical debt in the membership module and making it possible
    to transition to using memberships as the only core actor identifier in the
    system in future releases.`,
    state: 'inprogress',
  },
  {
    title: 'Start using Substrate v2.0.0 RC4',
    text: `We are transitioning to a new version of Substrate in order to stay up
    to date with a broad range of enhancements, and to limit how far behind we
    allow our growing codebase to become.`,
    state: 'inprogress',
  },
  {
    title: 'Enhancing our network testing',
    text: `Further maturing our network testing infrastructure to get one step
    closer to true end-to-end builds that secure an increasingly shorter
    development cycle.`,
    state: 'inprogress',
  },
];

const launchDate = '2020/09/15 15:00';

export { goalsData, launchDate };
