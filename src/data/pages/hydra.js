import React from 'react';

// Hero Image
import HydraHero from '../../assets/svg/hydra-hero.svg';

// Code Snippet
import { ReactComponent as Snippet } from '../../assets/svg/snippet.svg';

// Icons
import { ReactComponent as DiscordIcon } from '../../assets/svg/discord.svg';
import { ReactComponent as GithubIcon } from '../../assets/svg/github.svg';
import { ReactComponent as PlaygroundIcon } from '../../assets/svg/kusama.svg';
import { ReactComponent as DocumentIcon } from '../../assets/svg/document.svg';

// svg
import SlowFetching from '../../assets/svg/slow-fetching.svg';
import SlowProcessing from '../../assets/svg/slow-processing.svg';
import ComplexClient from '../../assets/svg/complex-client.svg';
import NoSearch from '../../assets/svg/no-search.svg';
import Costly from '../../assets/svg/costly.svg';
import OverFetching from '../../assets/svg/over-fetching.svg';
import CommandJSIcon from '../../assets/svg/command-js.svg';

export default {
  Hero: {
    image: HydraHero,
  },
  ValueProp: {
    sections: [
      {
        image: SlowFetching,
        key: 'hydra.value.values.slowFetching',
      },
      {
        image: SlowProcessing,
        key: 'hydra.value.values.slowProcessing',
      },
      {
        image: ComplexClient,
        key: 'hydra.value.values.complexClient',
      },
      {
        image: NoSearch,
        key: 'hydra.value.values.noSearch',
      },
      {
        image: OverFetching,
        key: 'hydra.value.values.overFetching',
      },
      {
        image: Costly,
        key: 'hydra.value.values.costlyNodes',
      },
    ],
  },
  Snippet: {
    snippet: Snippet,
  },
  GraphQL: {
    title: 'Powerful queries in GraphQL',
    subtitle: 'Provide application developers a powerful GraphQL API for your blockchain state and history',
    code: {
      input: `
      {
        hero  {
          name
          # Queries can have comments!
          friends {
            name
          }
        }
      }
      `,
      result: `
      {
        "data" :  {
          "hero" :  {
            "name" : "R2-D2",
            "friends" :  [
              {
              "name" :  "Luke Skywalker"
              },
              {
              "name" :  "Han Solo"
              },
      `,
    },
  },
  YourOwnNode: {
    title: 'Your own query node',
    subtitle: 'Creating your own query node could not be easier',
    steps: [
      {
        title: 'Write event handlers',
        subtitle: 'Provide the business logic to process events in your runtime that update your query index database.',
        code: CommandJSIcon,
      },
    ],
  },
  Video: {
    video: {
      src: 'https://www.youtube.com/watch?v=kIqBch8wO7I',
    },
  },
  GetStarted: {
    links: [
      {
        name: 'hydra.getStarted.links.documentation.name',
        icon: DocumentIcon,
        link: {
          to: 'https://dzhelezov.gitbook.io/hydra/',
          as: 'hydra.getStarted.links.documentation.link',
        },
      },
      {
        name: 'hydra.getStarted.links.githubRepository.name',
        icon: GithubIcon,
        link: {
          to: 'https://github.com/Joystream/hydra',
          as: 'hydra.getStarted.links.githubRepository.link',
        },
      },
      {
        name: 'hydra.getStarted.links.kusamaPlayground.name',
        icon: PlaygroundIcon,
        link: {
          to: 'https://indexer-kusama.joystream.app/graphql',
          as: 'hydra.getStarted.links.kusamaPlayground.link',
        },
      },
      {
        name: 'hydra.getStarted.links.discord.name',
        icon: DiscordIcon,
        link: {
          to: 'https://discord.gg/DE9UN3YpRP',
          as: 'hydra.getStarted.links.discord.link',
        },
      },
    ],
  },
  Features: {
    features: [
      {
        name: 'hydra.features.values.fullTextSearch.title',
        text: 'hydra.features.values.fullTextSearch.text',
        code: `
        # Input schema
        type Post @entity {
          text: String @fulltext(query: "forum-text-query"),
          title: String @fulltext(query: "forum-text-query")
        }
       
        type Comment @entity {
          text: String @fulltext(query: "forum-text-query"),
          title: String @fulltext(query: "forum-text-query")
        }
        `,
      },
      {
        name: 'hydra.features.values.filtering.title',
        text: 'hydra.features.values.filtering.text',
        code: `
        query {
          proposals(where: { 
            bond_gt: "10000",
            value_gt: "800000000000000",
            status_eq: REJECTED
          }) {
            proposer
            version
            value
            status
            beneficiary
            bond
          }
        }
        `,
      },
      {
        name: 'hydra.features.values.pagination.title',
        text: 'hydra.features.values.pagination.text',
        code: `
        query {
          proposals(offset: 10, limit: 5) {
            proposer
            version
            value
            status
            beneficiary
            bond
          }
        }`,
      },
      {
        name: 'hydra.features.values.ordering.title',
        text: 'hydra.features.values.ordering.text',
        code: `
        query {
          proposals(limit: 5, orderBy:  value_ASC) {
            value
            status
          }
        }`,
      },
      {
        name: 'hydra.features.values.polymorphism.title',
        text: 'hydra.features.values.polymorphism.text',
        code: `
        query {
          profiles(
            limit: 5,
            offset: 5,
            orderBy: about_ASC,
            where: { about_eq: "joystreamer" }
          ) {
              about
              __typename 
              ... on Member {
                handle
              }
              ... on Account {
                accountId
              }
            }
          }`,
      },
      {
        name: 'hydra.features.values.algebraicTypes.title',
        text: 'hydra.features.values.algebraicTypes.text',
        code: `
        type Noob @variant {
          follows: Influencer!
          hates: Influencer!
        }
        
        union Influencer = Degen | Whale 
        
        type Degen @variant {
          leverege: BigInt
        }
        
        type Whale @variant {
          amount: BigInt
          ticker: String
        }
        
        union Status = Noob | Degen | Whale`,
      },
    ],
  },
};
