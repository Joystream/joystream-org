import React, { useEffect, useState } from 'react';
import { GIT_FOLDER, GIT_REPOSITY, GIT_USER_NAME } from '../../../../gitconfig';

import './style.scss';
import QuarterPanel from '../QuarterPanel';
import axios from 'axios';

function QuartersListData({ fileName }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://raw.githubusercontent.com/${GIT_USER_NAME}/${GIT_REPOSITY}/main/${GIT_FOLDER}/${fileName}`
      );
      setData(response.data);
      setLoading(false);
    };

    fetchData();
  }, [fileName]);

  return (
    <div className="QuarterList_main">
      {data.map((res, index) => {
        return (
          <QuarterPanel
            loading={loading}
            data={res}
            key={index}
            language={'English'}
          />
        );
      })}
    </div>
  );
}

export default QuartersListData;
