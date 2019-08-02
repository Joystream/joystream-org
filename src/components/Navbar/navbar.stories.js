import React from 'react';

import { storiesOf } from '@storybook/react';
import { ScrollProvider } from '../_enhancers/ScrollContext';


import Navbar from './index';

storiesOf('Section|Navbar', module).add('default', () => <ScrollProvider><Navbar /></ScrollProvider>);
