/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  let rules = [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
  ]
  if(stage === 'build-html'){
    rules.push({
      test: /openpgp/,
      use: loaders.null()
    })
  }

  actions.setWebpackConfig({
    resolve: {
      extensions: ['*', '.mjs', '.jsx', '.js', '.json'],
    },
    module: {
      rules: [
        ...rules
      ]
    },
  });
};
