import React from 'react';
import { array } from 'prop-types';

import GoalItem from '../GoalItem';
import Animated from '../AnimatedComponent';

const propTypes = {
  data: array.isRequired,
};

const GoalList = ({ data }) => {
  return (
    <>
      {data.map(({ title, text, state }) => {
        return (
          <Animated animation="fadeIn" key={title}>
            <GoalItem state={state} title={title}>
              {text}
            </GoalItem>
          </Animated>
        );
      })}
    </>
  );
};

GoalList.propTypes = propTypes;

export default GoalList;
