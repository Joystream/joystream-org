import React from 'react';
import problemImage from '../../assets/svg/problem.svg';
import goalImage from '../../assets/images/goal.png';
import thesisImage from '../../assets/svg/thesis.svg';
import wedgeImage from '../../assets/svg/the-wedge.svg';
import accountabilityImage from '../../assets/svg/accountability.svg';
import voiceImage from '../../assets/svg/voice.svg';
import exitImage from '../../assets/svg/door.svg';
import { sharedData } from './';

export default {
  header: 'The Joystream Manifesto',
  subtitle: (
    <>
      Our Manifesto sets out both the problems we believe are associated with digital media platforms in their current
      form as well as our proposed solution to these concerns.
    </>
  ),
  sections: {
    problem: {
      title: 'Problem',
      image: problemImage,
      text: (
        <>
          <p>
            We believe that art, be it as literature, music, film, games or performance, is a critical tool through
            which societies establish a shared understanding of what is common knowledge among all members. These
            expressions define values and narratives that end up shaping culture, faith and even public policy. It
            therefore matters deeply how it is financed, distributed and paid for.
          </p>
          <p>
            Digital media has become the primary medium through which such expression is distributed, and digital media
            platforms have become the key institutions organizing this activity.
          </p>
          <blockquote>
            Unfortunately, due to network effects, economies of scale, regulations and political interests, we are today
            left with handful of massive institutions which set the terms for how this happens. They are almost entirely
            unaccountable to normal market and political mechanisms.
          </blockquote>
          <p>
            As a result, our stories, expressions and interactions are managed and filtered on their terms. This
            continues to generate an ever changing set of problems, be it
          </p>
          <blockquote>
            inflexible monetization, censorship of controversial speech, inequitable sharing of gains with creators and
            audience, low platform innovation or lack of credibility with third party developers.
          </blockquote>
        </>
      ),
    },
    goal: {
      title: 'Goal',
      image: goalImage,
      text: (
        <>
          <p>
            We call for an arrangement where media platforms are accountable to the people they impact, which are
            primarily their users, be it as consumers, creatives, third party developer or workers.
          </p>
          <blockquote>
            It is the absence of such accountability which is the fundamental source of any particular problem at any
            particular time.
          </blockquote>
        </>
      ),
    },
    thesis: {
      title: 'Thesis',
      image: thesisImage,
      text: (
        <p>
          Our core thesis is that there are two basic challenges which must be addressed to achieve this goal, and that
          an appropriate application of contemporary distributed systems technology, including blockchains, smart
          contracts and tokens, is the right means to do so.
        </p>
      ),
    },
  },
  groupSections: {
    wedge: {
      title: 'The Wedge',
      image: wedgeImage,
      text: (
        <>
          <p>
            First is the question of how to create an alternative from scratch in the face of platform externalities
            which make any new platform nearly useless, regardless of any of its inherent characteristics. The process
            of doing this sort of bootstrapping has historically been mostly an art, where success has rarely been
            reproducible.
          </p>
          <blockquote>
            We believe that blockchain tokens, earned by and issued to early participants, have been shown to be
            extremely effective at mobilizing, integrating and motivating an international and dynamic community.
          </blockquote>
          <p>
            This has now repeatedly allowed nascent communities, like the Bitcoin community, to overcome the initial
            network effect hurdle [1, 2, 3]. There is no certainty that this will be sufficient, but we believe this
            mechanism is as promising as anything which is likely to have a chance in a long time.
          </p>
        </>
      ),
    },
    accountability: {
      title: 'Accountability at scale',
      image: accountabilityImage,
      text: (
        <>
          <p>
            Second is the question of how to create and sustain accountability in such a platform when it actually
            reaches scale.
          </p>
          <blockquote>
            We understand there to be two fundamental ways that participants can hold institutions of any kind
            accountable: Voice and exit, in the tradition of Hirschman A. O. [4].
          </blockquote>
        </>
      ),
    },
    voice: {
      title: 'Voice',
      image: voiceImage,
      text: (
        <>
          <p>
            Voice is the approach of attempting to improve or reform the functioning of an institution from within. The
            effectiveness of this depends on some capacity to both share reliable information with other members, and
            have some impact on internal governance processes. Current media platforms provide users no effective way of
            doing either.
          </p>
          <p>
            We believe that blockchains provide an organizational and economic infrastructure which can address both
            problems. The public, verifiable and immutable history of economic and administrative records, provides an
            excellent basis for users to understand the current and past state of the platform. This allows anyone to
            make incontestable claims about relevant facts and circumstances.
          </p>
          <blockquote>
            Further, blockchain tokens allow us to make use and control of a platform inseparable, giving users an
            automatic seat at the table in deliberating over platform level decisions.
          </blockquote>
          <p>
            All that is required to establish, exercise or transfer the capacity to participate in such activity, is the
            ability to sign messages with identifiable cryptographic keys. Perfectly reliable contracting gives a large,
            dynamic and unrestricted set of users the means of governing the platform. This can serve a wide range of
            purposes, such as undertaking projects, regulating participation in different formally specified roles, or
            even updating the institutional rules themselves. This integration of reliable contracting into the economic
            rails provides an organizational infrastructure much more in line with our objectives of inclusive control
            than the normal jurisdictional trust based infrastructure.
          </p>
        </>
      ),
    },
    exit: {
      title: 'Exit',
      image: exitImage,
      text: (
        <>
          <p>
            Exit is the approach of entirely ending participation in an institution in favor of either joining or
            creating an alternative. The effectiveness of this depends on costs of leaving, and either joining or
            creating an alternative, all being low compared to the deprivation in the existing institution. This is
            currently not the case.
          </p>
          <p>
            By building platforms based on free & open source software, open protocols and open data — as is the case
            with Blockchain systems, one dramatically lowers these costs. Since users control their own data, identity
            and assets, they have a much easier time joining new platforms, and even taking their peers with them.
          </p>
          <blockquote>
            Open protocols and data will make multi homing interfaces abundant, where users may not even need to switch,
            but instead use multiple platforms simultaneously, which encourages platform level competition [5].
          </blockquote>
          <p>
            Even more dramatically, reliance on open source means that all the software capital of a platform can easily
            be reused, and since the entire organizational state is also public, entire ecosystems can be forked to
            create new alternative platforms with modified policies and objectives.
          </p>
        </>
      ),
    },
  },
  callToAction: (
    <>
      This plan still has room for more people, so get involved by sending an{' '}
      <a href={`mailto:${sharedData.defaultEmail}`}>email</a> or joining us on{' '}
      <a href={sharedData.social.discordLink} target="_blank" rel="noopener noreferrer">
        Discord
      </a>{' '}
      or{' '}
      <a href={sharedData.social.redditLink} target="_blank" rel="noopener noreferrer">
        Reddit
      </a>
      .
    </>
  ),
  references: {
    header: 'References',
    text: (
      <>
        <p>[1] Ersam, F. Blockchain Tokens and the dawn of the Decentralized Business Model. Medium. Aug 1, 2016.</p>
        <p>[2] Srinivasan, B. S. Thoughts on Tokens. Medium. May 27, 2017.</p>

        <p>[3] Dixon, C. Crypto Tokens: A Breakthrough in Open Network Design. Medium. June 1, 2017.</p>
        <p>
          [4] Hirschman, Albert O. Exit, voice, and loyalty: Responses to decline in firms, organizations, and states.
          Vol. 25. Harvard university press, 1970.
        </p>
        <p>
          [5] Rochet, Jean‐Charles, and Jean Tirole. “Platform competition in two‐sided markets.” Journal of the
          european economic association 1.4 (2003): 990–1029.
        </p>
      </>
    ),
  },
};
