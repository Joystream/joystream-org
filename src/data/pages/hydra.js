import React from 'react';

// Hero Image
import HydraHero from '../../assets/svg/hydra-hero.svg';

// Code Snippet
import { ReactComponent as Snippet } from '../../assets/svg/snippet.svg';

// Icons
import { ReactComponent as TelegramIcon } from '../../assets/svg/telegram.svg';
import { ReactComponent as GithubIcon } from '../../assets/svg/github.svg';
import { ReactComponent as PlaygroundIcon } from '../../assets/svg/telegram.svg';
import { ReactComponent as DocumentIcon } from '../../assets/svg/document.svg';

// svg
import SlowFetching from '../../assets/svg/slow-fetching.svg';
import SlowProcessing from '../../assets/svg/slow-processing.svg';
import ComplexClient from '../../assets/svg/complex-client.svg';
import NoSearch from '../../assets/svg/no-search.svg';
import Costly from '../../assets/svg/costly.svg';
import OverFetching from '../../assets/svg/over-fetching.svg';
import BloatedRuntime from '../../assets/svg/bloated-runtime.svg';

import CommandJSIcon from '../../assets/svg/command-js.svg';

export default {
  Hero: {
    title: <>Hydra - A Substrate query node framework</>,
    text: (
      <p className="Hero__Paragraph">
        Inspired by The Graph, it gives a smooth way to provide powerful GraphQL queries to app developers over your
        Substrate blockchain state and history.
      </p>
    ),
    image: HydraHero,
  },
  ValueProp: {
    title: 'We make it simple',
    subtitle:
      'Building great apps talking directly to a Substrate full node is impossible, and simply trying is slow and hard.',
    sections: [
      {
        image: SlowFetching,
        text: (
          <>
            <h1>Slow Fetching</h1>
            <p>
              Doing multiple read operations across multiple block heights is often required, and the pure latency of
              fetching the data is very bad. Some reads may depend on the result of prior ones, which results in
              sequential reads, which is even slower.
            </p>
          </>
        ),
      },
      {
        image: SlowProcessing,
        text: (
          <>
            <h1>Slow Processing</h1>
            <p>
              The client has to do all the work of filtering, sorting, paginating or otherwise computing on the
              resulting data, and this takes time, resulting in a slow client experience and CPU load on the user
              device.
            </p>
          </>
        ),
      },
      {
        image: ComplexClient,
        text: (
          <>
            <h1>Complex Client</h1>
            <p>
              The fetching and processing logic is reproduced in all apps, and adds to the complexity of application
              development.
            </p>
          </>
        ),
      },
      {
        image: NoSearch,
        text: (
          <>
            <h1>No Search</h1>
            <p>
              Your chain may have transactional or state commitments to free-text data, but doing real full-text search
              client-side is not an option.
            </p>
          </>
        ),
      },
      {
        image: OverFetching,
        text: (
          <>
            <h1>Over-Fetching</h1>
            <p>
              You cannot select the data you want, you have to read full state objects as they are, wasting both
              connection and full node capacity.
            </p>
          </>
        ),
      },
      {
        image: Costly,
        text: (
          <>
            <h1>Costly Archival Nodes</h1>
            <p>
              User requests which involve multiple read operations. To fetch a consistent dataset, you will often have
              to read at some specific block height, as always reading at the tip can break atomicity. This means such
              read requests will depend on the full node being archival. As your user base scales, that will become a
              very costly infrastructure.
            </p>
          </>
        ),
      },
      {
        image: BloatedRuntime,
        text: (
          <>
            <h1>Bloated Runtime State</h1>
            <p>
              Some put their query or search indexes in their storage to alleviate some of these problems, but this has
              its own costs. Results in more complex runtime logic, bloated storage state, lack of flexibility across
              apps, and making runtime migrations very hard due to the size of the state.
            </p>
          </>
        ),
      },
    ],
  },
  Snippet: {
    snippet: Snippet,
    title: 'Powerful queries in GraphQL',
    subtitle: 'Provide application developers a powerful GraphQL API for your blockchain state and history',
  },
  GraphQL: {
    title: 'Powerful queries in GraphQL',
    subtitle: 'Provide application developers a powerful GraphQL API for your blockchain state and history',
    code: {
      input: (
        <pre>
          {`{
	hero  {
		name
		# Queries can have comments!
		friends {
			name
		}
	}
}`}
        </pre>
      ),
      result: (
        <pre>
          {`{
	"data" :  {
		"hero" :  {
			"name" : "R2-D2",
			"friends" :  [
			  {
				"name" :  "Luke Skywalker"
			  },
			  {
				"name" :  "Han Solo"
			  },`}
        </pre>
      ),
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
    title: 'Play a video tutorial',
    video: {
      src: 'https://www.youtube.com/watch?v=kIqBch8wO7I',
    },
  },
  GetStarted: {
    title: 'Get started with Hydra now!',
    subtitle: <p>Use the following links to connect with us and find out even more. </p>,
    links: [
      {
        name: 'Documentation',
        icon: DocumentIcon,
        link: {
          to: 'https://app.gitbook.com/@dzhelezov/s/hydra-docs/v/query_node_spec/query-node/docs',
          as: 'Documentation',
        },
      },
      {
        name: 'Github Repository',
        icon: GithubIcon,
        link: {
          to: 'https://github.com/Joystream/joystream/tree/query_node/query-node/substrate-query-framework/cli',
          as: 'Github repo',
        },
      },
      {
        name: 'Kusama Playground',
        icon: PlaygroundIcon,
        link: {
          to: 'https://hakusama.joystream.app/graphql',
          as: 'Go to the Playground',
        },
      },
      {
        name: 'Telegram Channel',
        icon: TelegramIcon,
        link: {
          to: '#',
          as: 'Go to the Channel',
        },
      },
    ],
  },
  Features: {
    title: 'Hydra Features',
    features: [
      {
        name: 'Full-text Search',
        text:
          'Decorate any number of String fields in the input schema with @fulltext(query: "myquery") to seach across different fields and entities.',
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
        name: 'Filtering',
        text:
          'Any entity field can be used for OpenCRUD filtering',
        code: `
        query {
          proposals(where: { bond_gt: "10000", value_gt: "800000000000000", status_eq: REJECTED }) {
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
        name: 'Pagination',
        text:
          'Each GraphQL query supports pagination out-of-the-box',
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
        name: 'Ordering',
        text:
          'Order by any primitive field',
        code: `
        query {
          proposals(limit: 5, orderBy:  value_ASC) {
            value
            status
          }
        }`,
      },
      {
        name: 'Polymorphism',
        text:
          'Native support of GraphQL interfaces and type inline fragments',
        code: `
        query {
          profiles(limit: 5, offset: 5, orderBy: about_ASC, where: { about_eq: "joystreamer" }) {
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
        name: 'Algebraic Types',
        text:
          'Construct rich and queriable algebraic types with @variant directive',
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
