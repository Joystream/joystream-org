import React from "react";

import "./style.scss";
function GlossaryBody({ data }) {
  return (
    <div className="GlossaryBody">
      <div className="GlossaryBody__main">
        <div className="GlossaryBody__main__title">{data.title}</div>
        <div className="GlossaryBody__main__content">{data.content}</div>
        <div className="GlossaryBody__main__line"></div>
        <div className="GlossaryBody__node__title">Node</div>
        {data.nodes.map((d, index) => {
          return (
            <div key={index}>
              <div className="GlossaryBody__node__content__title">
                {d.title}
              </div>
              <div className="GlossaryBody__node__content__item">
                {d.content.map((k, key) => (
                  <li key={key}> {k}</li>
                ))}
              </div>
            </div>
          );
        })}
        <div className="GlossaryBody__main__line"></div>
        {data.others.map((d, index) => {
          return (
            <div key={index}>
              <div className="GlossaryBody__others__title">{d.title}</div>
              {d.subtitle ? (
                <div className="GlossaryBody__others__subtitle">
                  {d.subtitle}
                </div>
              ) : (
                <></>
              )}
              {d.content ? (
                <div className="GlossaryBody__node__content__item">
                  {d.content.map((item, key) => (
                    <li key={key}>{item}</li>
                  ))}
                </div>
              ) : (
                <></>
              )}
            </div>
          );
        })}
      </div>
      <div className="GlossaryBody__card">
        {data.relatedTeams.map((item, key) => (
          <span key={key} className="GlossaryBody__card__item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default GlossaryBody;
