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
yarn start
```

Local server will start on `http://localhost:8000/`

3.  **Build**

To build Gatsby project run:

```sh
yarn build
```

After the process is complete, production files will be located in the `public` folder located in the root of the project.

## Branding

#### Assets

All Branding assets are available in [joystream design repository](https://github.com/Joystream/design/tree/master/). In case any of them changes, a script should be ran to include changes on the joystream branding page, and any changes introduced by it should be commited and deployed.

Assets refresh script:

```sh
yarn fetch-assets-data
```

## Roadmap data

Roadmap data can be found in the following file(s): `src/data/quarters/${roadmap-data-name}.json`

To update the data, just directly edit the file you want to change the data for.

To add a new version of the roadmap, you can follow these steps:
- Add new file in the aforementioned folder (e.g., `src/data/quarters/2024-2025.json`)
- The roadmap file should follow this structure:
  - ```js
      [{
          "language",
          "quarters": [{
            "year",
            "id",
            "deliveryMilestones": [{
              "icon",
              "title",
              "Content"
            }]
          }]
        }]
    ```
  - In case of doubts and to also get a better idea for how this data should look exactly, you can consult one of the roadmap files that are already there.
  - As for the "icon" values, these values represent icons that can be found in the assets of the project. More specifically, for the map of "key" (i.e., in this case the icon string value) to the "value" (i.e., the icon itself) you can consult the `iconMap` object in the following file: `src/data/quarters/index.js`.
- As the final step, the exported array within the `src/data/quarters/index.js` file needs to be expanded with an object following this structure: `{ "select": { "title", "subtitle" }, "name", "value", "isNewest" }`
  - Note: Only one object should have the `"isNewest"` property set to `true`.

## Glossary data

Glossary data can be found in the following file: `src/data/glossary/glossary.json`

When updating the glossary or adding new terms to it, this structure should be followed:
```js
  [{
    "language":
    "terms": [{
      "title",
      "tooltip",
      "content",
      "nodes": [{
        "title",
        "content": [""]
      }],
      "others": [{
        "title",
        "subtitle",
        "content": [""]
      }],
      "relatedTerms": [""]
    }]
  }]
```

Important note: The glossary is automatically populated into the roadmap at runtime. The way this is done is that the term title is checked for in the content of a roadmap item and replaced with an underlined item with a tooltip. It is therefore important to make sure that the spelling of each title term is correct.

## Verification data

Verification data can be found in the following file: `src/data/pages/verification.js`.

Within this file is an array with the name of `verifiedMembers`. To add new members one needs to expand the array with an object of the following structure:

```js
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
        components: [{ link: 'https://www.joystream.org', text: 'Joystream.org' }],
      },
    ],
    allowed: [{ text: 'verification.safety.can.items.inviteToYpp' }],
  },
},
```

To edit members, one just needs to update the objects that are already there to the new desired values.