export const linkPropTypes = {
  to: (props, propName, componentName) => {
    if (!props.to && !props.href) {
      return new Error(`One of props 'to' or 'href' was not specified in '${componentName}'.`);
    }
  },
  href: (props, propName, componentName) => {
    if (!props.to && !props.href) {
      return new Error(`One of props 'href' or 'to' was not specified in '${componentName}'.`);
    }
  },
};
