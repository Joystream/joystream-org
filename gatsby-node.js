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

  rules.push({
    test: /\.(js|jsx)?$/,
    use: {
      loader: 'babel-loader',
      options: {
        plugins: [
            '@babel/plugin-proposal-class-properties',
          '@babel/plugin-proposal-class-static-block',
          ["@babel/plugin-proposal-private-property-in-object", { "loose": false }],
          // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
          'babel-plugin-remove-graphql-queries']
      }
    },
  })

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
