import React from 'react';
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';

import PolicyItem from './index';

storiesOf('Components|PolicyItem', module)
  .addDecorator(centered)
  .add('default', () => (
    <PolicyItem title="1. What are Cookies?" style={{ maxWidth: '510px' }}>
      <>
        Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in
        your web browser and allows the Service or a third-party to recognise you and make your next visit easier and
        the Service more useful to you.
        <br />
        <br />
        Cookies can be persistent or session cookies.
      </>
    </PolicyItem>
  ))
  .add('without title', () => (
    <PolicyItem style={{ maxWidth: '510px' }}>
      <>
        Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in
        your web browser and allows the Service or a third-party to recognise you and make your next visit easier and
        the Service more useful to you.
        <br />
        <br />
        Cookies can be persistent or session cookies.
      </>
    </PolicyItem>
  ));
