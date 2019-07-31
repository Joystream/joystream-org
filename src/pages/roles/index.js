import React from 'react';
import ReactDOM from 'react-dom';

import BaseLayout from '../../components/_layouts/Base';
import LayoutWrapper from '../../components/LayoutWrapper';
import Sidebar from '../../components/Sidebar';
import Hero from '../../components/Hero';
import RoleOverview from '../../components/RoleOverview';

import { ReactComponent as RolesImage } from '../../assets/svg/roles-hero.svg';

import { rolesData } from '../../data/pages/roles';

import './style.scss';

class RolesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elementInViewport: 'validator',
    };
  }

  goToElement = id => {
    this.setState({
      elementInViewport: id,
    });
    const target = ReactDOM.findDOMNode(this[id]);
    window.scrollTo({ top: target.offsetTop - 40, behavior: 'smooth' });
  };

  render() {
    return (
      <BaseLayout>
        <Hero image={RolesImage} title="Discover various roles on the platform">
          <p className="RolesPage__hero-paragraph">
            Explore available roles and pick the one that suits you the most.
            Influence platforms development earning Monero in the process.
          </p>
        </Hero>

        <LayoutWrapper gradient>
          <Sidebar
            onElementChange={this.goToElement}
            currentElement={this.state.elementInViewport}
            data={rolesData}
          />
          <div className="RoleOverview__Wrapper">
            {Object.keys(rolesData).map(key =>
              rolesData[key].map(role => (
                <RoleOverview
                  {...role}
                  type={key}
                  key={role.title}
                  ref={ref => (this[role.id] = ref)}
                />
              )))}
          </div>
        </LayoutWrapper>
      </BaseLayout>
    );
  }
}

export default RolesPage;
