import React from "react";

import "./style.scss";
import QuarterPanel from "../QuarterPanel";

function QuartersListData({ data, selectGlossary, scrollPosition }) {
  return (
    <div className="QuarterList_main">
      {data.map((res, index) => {
        return (
          <QuarterPanel
            loading={false}
            data={res}
            key={index}
            language={"English"}
            glossaryPanel={selectGlossary}
            scrollPosition={scrollPosition}
          />
        );
      })}
    </div>
  );
}

export default QuartersListData;