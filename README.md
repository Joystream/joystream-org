![Joystream Website](./website_new.svg)

## Installation

To install all local dependencies located in `package.json` use:

```bash
yarn
```

## Website

1. **ENVs**

To populate project with environment variables create files `.env.development` for local development and `.env.production` for final build.

2.  **Local development**

```sh
gatsby develop
```

Local server will start on `http://localhost:8000/`

3.  **Build**

To build Gatsby project run:

```sh
yarn build
```

After the process is complete, production files will be located in the `public` folder located in the root of the project.

4.  **Test**

Joystream uses [Jest](https://jestjs.io/) for writing tests. Please make sure to write unit and snapshot tests (update if needed). Pre-commit hook won't allow you committing unless all the tests, linters passes.

Pre-commit hook contains three command for testing: `lint`, `stylelint` and `test`, which will test your `scss`, `js` and `test` files.

Please use this command to run tests locally:

```sh
yarn test
```

## Storybook

1.  **Local development**

This project uses [Storybook](https://storybook.js.org/) for development purposes.
Components are divided into several categories: `Components`, `Layout`, `Section`, `Assets`, `Pages` and by default `Other` if no category is specified.

Run `gatsby develop` or `gatsby build` at least once before running Storybook to generate static files usef in the project.
To run the storybook on `http://localhost:6006/` use:

```sh
yarn storybook
```

2.  **Build**

To build storybook run:

```sh
yarn build-storybook
```

After the process is complete, production files will be located in the `storybook-static` folder located next to other files in the root of the project.

## Branding

#### Assets

All Branding assets are available in [joystream design repository](https://github.com/Joystream/design/tree/master/). In case any of them changes, a script should be ran to include changes on the joystream branding page, and any changes introduced by it should be commited and deployed.

Assets refresh script:

```sh
yarn fetch-assets-data
```
