import React from 'react';

export default function(ChildComponent) {
  return class extends React.Component {
    state = {
      scrollPosition: 0,
      isScrollUp: true,
    };

    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
      const { scrollPosition } = this.state;

      const currentScrollPos = window.pageYOffset;
      const isScrollUp = scrollPosition > currentScrollPos;

      this.setState({
        scrollPosition: currentScrollPos,
        isScrollUp,
      });
    };

    render() {
      return (
        <ChildComponent isScrollUp={this.state.isScrollUp} {...this.props} />
      );
    }
  };
}
