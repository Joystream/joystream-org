import React from 'react';
// import axios from 'axios';

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
        // const content = await axios.get(`${process.env.GATSBY_API_URL}${apiPath}`);
        const content = {
          system: {
            chain: 'Joystream Testnet v2',
            name: 'joystream-node',
            version: '1.0.0',
            peerCount: 2,
          },
          block_height: 1183219,
          runtime_version: {
            spec_name: 'joystream-node',
            impl_name: 'joystream-node',
            spec_version: 4,
          },
          council: { members_count: 12, election_stage: 'Not Running' },
          validators: { count: 15, total_stake: '47548' },
          memberships: { platform_members: 172 },
          roles: { storage_providers: 10 },
          media: { media_files: 11 },
          forum: { posts: 15, threads: 8 },
        };

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
