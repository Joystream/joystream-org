import React, { Component } from 'react';
import { node } from 'prop-types';
import Plx from 'react-plx';

const propTypes = {
  children: node.isRequired,
};

const defaultProps = {};

const parallaxData = [
  {
    start: 'self',
    duration: 300,
    // end: 'self',
    properties: [
      {
        startValue: 0,
        endValue: 1,
        property: 'opacity',
      },
    ],
  },
];

class AnimatedList extends Component {
  state = {
    disabled: false,
  };

  render() {
    return (
      <Plx
        className="MyAwesomeParallax"
        parallaxData={parallaxData}
        disabled={this.state.disabled}
        onPlxEnd={() => this.setState({ disabled: true })}
        easing="easeInOut"
      >
        {this.props.children}
      </Plx>
    );
  }
}

AnimatedList.propTypes = propTypes;
AnimatedList.defaultProps = defaultProps;

export default AnimatedList;
