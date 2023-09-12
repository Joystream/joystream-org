import React from "react";

import "./style.scss";
function GlossaryBody({ data, selectCard }) {
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
              <ul className="GlossaryBody__node__content__item">
                {d.content.map((k, key) => (
                  <li key={key}> {k}</li>
                ))}
              </ul>
            </div>
          );
        })}
        <div className="GlossaryBody__main__line"></div>
        {data.others.map((d, index) => {
          return (
            <div key={index}>
              <div className="GlossaryBody__others__title">{d.title}</div>
              {d.subtitle ? (
                <div
                  className="GlossaryBody__others__subtitle"
                  dangerouslySetInnerHTML={{
                    __html: d.subtitle,
                  }}
                ></div>
              ) : (
                <></>
              )}
              {d.content ? (
                <ul className="GlossaryBody__node__content__item">
                  {d.content.map((item, key) => (
                    <li key={key}>{item}</li>
                  ))}
                </ul>
              ) : (
                <></>
              )}
            </div>
          );
        })}
      </div>
      <div className="GlossaryBody__card">
        <div className="GlossaryBody__card__title">Related Terms</div>
        {data.relatedTerms.map((item, key) => (
          <span
            key={key}
            className="GlossaryBody__card__item"
            onClick={() => selectCard(item)}
            onKeyPress={() => selectCard(item)}
            tabIndex={0}
            role="button"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default GlossaryBody;
