import React from 'react';
import axios from 'axios';

export default function withApi(WrappedComponent, apiPath) {
  return class extends React.Component {
    mounted = true;

    state = {
      content: {},
    };

    componentDidMount() {
      this.getData();
    }

    componentWillUnmount() {
      this.mounted = false;
    }

    getData = async () => {
      try {
        const content = await axios.get(
          `${process.env.GATSBY_API_URL}${apiPath}`
        );

        if (this.mounted) {
          this.setState({
            content: content.data,
          });
        }
      } catch (error) {
        console.error(error);
      }
    };

    render() {
      const { content } = this.state;

      return <WrappedComponent content={content} {...this.props} />;
    }
  };
}
