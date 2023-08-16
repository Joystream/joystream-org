import { useState, useEffect } from 'react';

const QUERY_URL = 'https://query.joystream.org/graphql';
const WORKERS_QUERY = `
{
  workers (limit: 999999, where: { isActive_eq: true }) {
    id,
    groupId,
    membership {
      id,
      metadata {
        avatar{
          __typename
          ... on AvatarUri {
            avatarUri
          }
        }
      }
    }
  }
}
`;

const useWorkingGroups = () => {
  const [workers, setWorkers] = useState({ isLoading: true, error: false, groups: {
    storage: [],
    operations: [],
    content: [],
    distribution: [],
  } });

  // fetch data
  useEffect(() => {
    const getWorkerData = async () => {
      try {
        const res = await fetch(QUERY_URL, {
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify({ query: WORKERS_QUERY }),
        });

        if (res.ok) {
          const { data: { workers } } = await res.json();

          const mappedWorkers = workers.map(worker => ({
            groupId: worker.groupId,
            workerId: worker.id,
            memberId: worker.membership.id,
            avatar: worker.membership.metadata.avatar.avatarUri,
          }));

          const storage = mappedWorkers.filter(({ groupId }) => groupId === 'storageWorkingGroup');
          const operations = mappedWorkers.filter(({ groupId }) =>
            ['operationsWorkingGroupAlpha', 'operationsWorkingGroupBeta', 'operationsWorkingGroupGamma'].includes(
              groupId
          ));
          const content = mappedWorkers.filter(({ groupId }) => groupId === 'contentWorkingGroup');
          const distribution = mappedWorkers.filter(({ groupId }) => groupId === 'distributionWorkingGroup');

          console.log({ storage, operations, distribution, content });

          setWorkers({
            isLoading: false,
            error: false,
            groups: {
              storage,
              operations,
              content,
              distribution,
            },
          });

        }
      } catch (e) {
        console.log(e);
      }
    };
    getWorkerData();
  }, []);

  return { workers };
};

export default useWorkingGroups;
