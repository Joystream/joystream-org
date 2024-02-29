import { bool, node } from 'prop-types';

const propTypes = {
  disabled: bool,
  children: node.isRequired,
};

const Feature = ({ disabled, children }) => {
  return disabled ? null : children;
};

Feature.propTypes = propTypes;

export default Feature;
