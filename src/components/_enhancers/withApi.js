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
      const apiUrl = process.env.GATSBY_API_URL || 'https://status.joystream.app/';

      if (!apiUrl) {
        return;
      }

      try {
        const content = await axios.get(`${apiUrl}`);

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
