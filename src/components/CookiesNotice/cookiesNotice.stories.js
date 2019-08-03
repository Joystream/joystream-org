import React from 'react';
import { storiesOf } from '@storybook/react';

import CookiesNotice from './index';

storiesOf('Section|CookiesNotice', module).add('Deafult', () => <CookiesNotice actionless />);
