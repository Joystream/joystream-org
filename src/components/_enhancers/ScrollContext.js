import React from 'react';

const ScrollContext = React.createContext(true);

export class ScrollProvider extends React.Component {
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
    const { children } = this.props;

    return (
      <ScrollContext.Provider value={{ isScrollUp: this.state.isScrollUp }}>
        {children}
      </ScrollContext.Provider>
    );
  }
}

export const ScrollConsumer = ScrollContext.Consumer;
