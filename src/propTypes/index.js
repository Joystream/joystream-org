import { number, oneOf, shape, string } from 'prop-types';

export const linkPropTypes = {
  to: (props, propName, componentName) => {
    if (!props.to && !props.href) {
      return new Error(
        `One of props 'to' or 'href' was not specified in '${componentName}'.`
      );
    }
  },
  href: (props, propName, componentName) => {
    if (!props.to && !props.href) {
      return new Error(
        `One of props 'href' or 'to' was not specified in '${componentName}'.`
      );
    }
  },
};

export const mapPropTypes = {
  location: oneOf(['athens', 'acropolis', 'sparta']).isRequired,
};

export const pagePropTypes = {
  content: shape({
    block_height: number,
    council: shape({
      election_stage: string,
      members_count: number,
    }),
    forum: shape({
      posts: number,
      threads: number,
    }),
    media: shape({
      media_files: number,
    }),
    memberships: shape({
      platform_members: number,
    }),
    roles: shape({
      storage_providers: number,
    }),
    runtime_version: shape({
      impl_name: string,
      spec_name: string,
      spec_version: number,
    }),
    system: shape({
      chain: string,
      name: string,
      peerCount: number,
      version: string,
    }),
    validators: shape({
      count: number,
      total_stake: string,
    }),
  }).isRequired,
};
