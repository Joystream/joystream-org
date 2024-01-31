/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

import path from 'path';
import { verifiedMembers } from './src/data/pages/verification.js';

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  let rules = [
    {
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    },
  ];

  actions.setWebpackConfig({
    resolve: {
      extensions: ['*', '.mjs', '.jsx', '.js', '.json'],
    },
    module: {
      rules: [...rules],
    },
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const verificationTemplate = path.resolve(`src/templates/verification.js`);

  verifiedMembers.forEach(user => {
    const { substituteUserRoute, memberHandle } = user;
    createPage({
      path: `/${substituteUserRoute === undefined ? memberHandle : substituteUserRoute}`,
      component: verificationTemplate,
      context: {
        user,
        otherMembers: verifiedMembers.filter(member => member.memberHandle !== user.memberHandle),
      },
    });
  });
};
