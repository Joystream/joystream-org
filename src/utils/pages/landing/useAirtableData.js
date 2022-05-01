import { graphql, useStaticQuery } from 'gatsby';
import { useState, useEffect } from 'react';
import axios from 'axios';

// Icons
import { ReactComponent as ReferIcon } from '../../../assets/svg/available-activities-icons/refer.svg';
import { ReactComponent as BountiesIcon } from '../../../assets/svg/available-activities-icons/bounties.svg';
import { ReactComponent as CouncilMemberIcon } from '../../../assets/svg/available-activities-icons/council-member.svg';
import { ReactComponent as ContentCuratorIcon } from '../../../assets/svg/available-activities-icons/content-curator.svg';
import { ReactComponent as ContentCuratorLeadIcon } from '../../../assets/svg/available-activities-icons/content-curator-lead.svg';
import { ReactComponent as BuilderIcon } from '../../../assets/svg/available-activities-icons/builder.svg';
import { ReactComponent as BuilderLeadIcon } from '../../../assets/svg/available-activities-icons/builder-lead.svg';
import { ReactComponent as HRIcon } from '../../../assets/svg/available-activities-icons/hr.svg';
import { ReactComponent as HRLeadIcon } from '../../../assets/svg/available-activities-icons/hr-lead.svg';
import { ReactComponent as MarketerIcon } from '../../../assets/svg/available-activities-icons/marketer.svg';
import { ReactComponent as MarketerLeadIcon } from '../../../assets/svg/available-activities-icons/marketer-lead.svg';
import { ReactComponent as StorageProviderIcon } from '../../../assets/svg/available-activities-icons/storage-provider.svg';
import { ReactComponent as StorageProviderLeadIcon } from '../../../assets/svg/available-activities-icons/storage-provider-lead.svg';
import { ReactComponent as DistributorIcon } from '../../../assets/svg/available-activities-icons/distributor.svg';
import { ReactComponent as DistributorLeadIcon } from '../../../assets/svg/available-activities-icons/distributor-lead.svg';
import { ReactComponent as ValidatorIcon } from '../../../assets/svg/available-activities-icons/validator.svg';

const QUERY_URL = 'https://query.joystream.org/graphql';

export const REFERRAL_ACTIVITY = {
  title: "landing.availableActivities.activityTitles.referral",
  icon: ReferIcon
}

export const WORKER_ACTIVITIES = {
  "Bounty": {
    title: "landing.availableActivities.activityTitles.bounties",
    icon: BountiesIcon
  },
  "CouncilMember": {
    title: "landing.availableActivities.activityTitles.councilMember",
    icon: CouncilMemberIcon
  },
  "ContentDirectoryWorker": {
    title: "landing.availableActivities.activityTitles.contentCurator",
    icon: ContentCuratorIcon
  },
  "ContentDirectoryLead": {
    title: "landing.availableActivities.activityTitles.contentCuratorLead",
    icon: ContentCuratorLeadIcon
  },
  "BuildersWorker": {
    title: "landing.availableActivities.activityTitles.builder",
    icon: BuilderIcon
  },
  "BuildersLead": {
    title: "landing.availableActivities.activityTitles.builderLead",
    icon: BuilderLeadIcon
  },
  "HRWorker": {
    title: "landing.availableActivities.activityTitles.hr",
    icon: HRIcon
  },
  "HRLead": {
    title: "landing.availableActivities.activityTitles.hrLead",
    icon: HRLeadIcon
  },
  "MarketingWorker": {
    title: "landing.availableActivities.activityTitles.marketer",
    icon: MarketerIcon
  },
  "MarketingLead": {
    title: "landing.availableActivities.activityTitles.marketerLead",
    icon: MarketerLeadIcon
  },
  "StorageWorker": {
    title: "landing.availableActivities.activityTitles.storageProvider",
    icon: StorageProviderIcon
  },
  "StorageLead": {
    title: "landing.availableActivities.activityTitles.storageProviderLead",
    icon: StorageProviderLeadIcon
  },
  "ContentDeliveryWorker": {
    title: "landing.availableActivities.activityTitles.distributor",
    icon: DistributorIcon
  },
  "ContentDeliveryLead": {
    title: "landing.availableActivities.activityTitles.distributorLead",
    icon: DistributorLeadIcon
  },
  "Validator": {
    title: "landing.availableActivities.activityTitles.validator",
    icon: ValidatorIcon
  }
}

const MEMBERSHIPS_QUERY = `
{
  memberships(limit: 99999999) { 
    id,
    handle,
    isFoundingMember,
    referredBy {
      id
    },
    metadata {
      avatar { 
        __typename 
        ... on AvatarUri {
          avatarUri
        }
      }
    }
  }
}
`;

const QUERY = graphql`
query Query {
  rewardedData: allAirtable(
    filter: { table: { eq: "RewardedActivity" } }
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
        Network
        CouncilId
        ReferralJOYBonusPercentage
      }
    }
  }
}
`;

const JOY_PERCENTAGE_VALUE_MULTIPLIER = 600_000;

const getMembershipData = async () => {
  try {
    const res = await fetch(QUERY_URL, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ query: MEMBERSHIPS_QUERY }),
    });

    if(res.ok) {
      const { data: { memberships } } = await res.json();

      const memberAvatarsByHandle = {};
      const memberAvatarsById = {};
      const referredMembers = [];
      for(let membership of memberships) {
        const { isFoundingMember, referredBy, metadata, handle, id } = membership;

        if(referredBy) {
          referredMembers.push(metadata?.avatar?.avatarUri ? metadata?.avatar?.avatarUri : undefined);
        }
        
        memberAvatarsByHandle[handle] = metadata?.avatar?.avatarUri;
        memberAvatarsById[id] = metadata?.avatar?.avatarUri;
      }

      return { memberAvatarsById, memberAvatarsByHandle, referredMembers };
    }
  } catch(e) {
    console.log(e);
  }
}

const getPreviousCouncilTermRewards = async (rewardedData, previousCouncilId) => {
  // SETUP
  let tJoyDollarValue;
  try {
    tJoyDollarValue = (await axios.get("https://status.joystream.org/price")).data.price;
  } catch(e) {}

  // Building the final data object
  const previousCouncilTermRewards = rewardedData.nodes.reduce(
    (prev, { data: { Activity, TestnetCouncilIdInteger, JOYEarnedPercent, tJOYEarned } }) => {
      if (TestnetCouncilIdInteger != previousCouncilId) {
        return prev;
      }

      const amountEarned = tJoyDollarValue ? (
        (JOYEarnedPercent * JOY_PERCENTAGE_VALUE_MULTIPLIER) + (tJOYEarned * tJoyDollarValue)
      ) : 0;

      if (prev[Activity]) {
        prev[Activity].amountEarned += amountEarned;
      } else {
        prev[Activity] = { amountEarned };
      }

      return prev;
    },
    {}
  );

  return previousCouncilTermRewards;
}

const getRewardsRelatedIcons = (rewardedData, previousCouncilId, memberAvatarsById) => {
  return rewardedData.nodes.reduce(
    (prev, { data: { Activity, TestnetCouncilIdInteger, MemberId__from_PersonId_ } }) => {
      if (TestnetCouncilIdInteger != previousCouncilId || !MemberId__from_PersonId_) {
        return prev;
      }

      const memberId = MemberId__from_PersonId_[0];

      if (prev[Activity]) {
        prev[Activity].memberAvatars.push(memberAvatarsById?.[memberId]);
      } else {
        prev[Activity] = { memberAvatars: [memberAvatarsById?.[memberId]] };
      }

      return prev;
    },
    {}
  );
}

const useAirtableData = () => {
  const { rewardedData, lastCouncil }  = useStaticQuery(QUERY);

  const [activityAmounts, setActivityAmount] = useState({});
  const [activityIcons, setActivityIcons] = useState({});
  const [referralAmount, setReferralAmount] = useState(0);
  const [referralIcons, setReferralIcons] = useState();

  useEffect(() => {
    const previousCouncilId = lastCouncil.nodes[0].data.CouncilId;
    const referralAmount = lastCouncil.nodes[0].data.ReferralJOYBonusPercentage;

    setReferralAmount(Math.round(referralAmount * JOY_PERCENTAGE_VALUE_MULTIPLIER));

    const getRewardsAmountsData = async () => {
      const previousCouncilTermRewards = await getPreviousCouncilTermRewards(rewardedData, previousCouncilId);
      setActivityAmount(previousCouncilTermRewards);
    }

    const getRewardsIconsData = async() => {
      const { memberAvatarsById, referredMembers } = await getMembershipData();
      setActivityIcons(getRewardsRelatedIcons(rewardedData, previousCouncilId, memberAvatarsById));
      setReferralIcons(referredMembers);
    }
    
    getRewardsAmountsData();
    getRewardsIconsData();
  },[]);

  return { activityAmounts, referralAmount, activityIcons, referralIcons };
};

export default useAirtableData;
