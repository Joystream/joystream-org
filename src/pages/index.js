import React from 'react';

import Navbar from '../components/Navbar';
import HeroCard from '../components/HeroCard';
import TitleWrapper from '../components/TitleWrapper';

const IndexPage = () => (
  <div>
    <Navbar />
    <HeroCard date="2019/06/27 17:50" />
    <TitleWrapper title="Test">content</TitleWrapper>
  </div>
);

export { IndexPage };
export default IndexPage;
