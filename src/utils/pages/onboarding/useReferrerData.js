import { useState, useEffect } from 'react';
import { airtable } from '../../airtable';

import { JOY_PERCENTAGE_VALUE_MULTIPLIER } from '../../constants';

const useReferrerData = () => {
  const [referrerReward, setReferrerReward] = useState();
  const [refereeReward, setRefereeReward] = useState();
  const [paidOutToReferrers, setPaidOutToReferrers] = useState(0);
  
  useEffect(() => {
    const getAirtableData = async () => {
      const councilData = await airtable("TestnetCouncil").select({
        sort: [
          { field: "TestnetCouncilId", direction: "desc" }
        ]
      }).all();

      // TODO: Update 2 to 1 here
      const councilForProcessing = councilData[2].fields;

      setReferrerReward(Math.round(councilForProcessing.ReferralJOYBonusPercentage * JOY_PERCENTAGE_VALUE_MULTIPLIER))

      // TODO: Uncomment after referee rewards have been implemented:
      // setReferrerReward(Math.round(councilForProcessing.RefereeJOYBonusPercentage * JOY_PERCENTAGE_VALUE_MULTIPLIER))

      const referralRewardData = (await airtable("RewardedActivity").select({
        // TODO: The Activity string needs to be updated if it
        // doesn't match when new referrals are actually added.
        filterByFormula: `Activity="Referral"`
      }).all()).map(activity => activity.fields);

      const sumOfEarnedJOY = referralRewardData.reduce((prev, { JOYEarnedPercent }) => {
        return prev + JOYEarnedPercent;
      }, 0);

      const paidOutToReferrers = sumOfEarnedJOY * JOY_PERCENTAGE_VALUE_MULTIPLIER;
      setPaidOutToReferrers(Math.floor(paidOutToReferrers));
    }

    getAirtableData();
  }, []);

  return { referrerReward, paidOutToReferrers };
};

export default useReferrerData;
