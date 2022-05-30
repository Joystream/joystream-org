import { graphql, useStaticQuery } from 'gatsby';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { JOY_PERCENTAGE_VALUE_MULTIPLIER } from '../../constants';

// TODO: The Activity string needs to be updated as soon as new referrals are actually added
const QUERY = graphql`
query ReferrerDataQuery {
  rewardedData: allAirtable(
    filter: { table: { eq: "RewardedActivity" }, data: {Activity: { eq: "Referral" }}},
  ) {
    nodes {
      data {
        RewardedActivityId
        Activity
        TestnetCouncilIdInteger
      	tJOYEarned
        JOYEarnedPercent
        MemberId__from_PersonId_
      }
    }
  },
  lastCouncil:
  	allAirtable(
      filter: {table: {eq: "TestnetCouncil"}, data: {CouncilId: {ne: null}}}
    	sort: { fields: data___CouncilId, order: DESC}
    	limit: 1
    ) {
    nodes {
      data {
        ReferralJOYBonusPercentage
      }
    }
  }
}
`;

const useReferrerData = () => {
  const { rewardedData, lastCouncil }  = useStaticQuery(QUERY);
  const [referrerReward, setReferrerReward] = useState();
  const [paidOutToReferrers, setPaidOutToReferrers] = useState();
  
  useEffect(() => {
    const referralAmount = lastCouncil.nodes[0].data.ReferralJOYBonusPercentage;
    setReferrerReward(Math.round(referralAmount * JOY_PERCENTAGE_VALUE_MULTIPLIER));

    const sumOfEarnedJOY = rewardedData.nodes.reduce((prev, { data: { JOYEarnedPercent } }) => {
      return prev + JOYEarnedPercent;
    }, 0);
    
    const paidOutToReferrers = sumOfEarnedJOY * JOY_PERCENTAGE_VALUE_MULTIPLIER;
    setPaidOutToReferrers(paidOutToReferrers);
    
    // TODO:
    // 1. Add up all of the things and multiply by the constant to figure out the dollar value.
    // 2. Figure out what to do with the referee value.
  }, []);

  return { referrerReward, paidOutToReferrers };
};

export default useReferrerData;