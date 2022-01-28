import React from 'react';
import './style.scss';

const TasksInfo = ({ t, title, data }) => {
  return (
    <div className="TasksInfo__wrapper">
      {title && <h2 className="TasksInfo__title">{t(title)}</h2>}
      <div className="TasksInfo__content">
        {data &&
          data.map((item, index) => {
            return (
              <div key={index} className="TasksInfo__item">
                {item.image}
                <div className="TasksInfo__item__text__wrapper">
                  <div className="TasksInfo__item__title">{t(item.title)}</div>
                  <div className="TasksInfo__item__text">{t(item.text)}</div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TasksInfo;
