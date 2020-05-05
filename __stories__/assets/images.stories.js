import React from 'react';
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';

import AthensImage from '../../src/assets/images/athens.png';
import SpartaImage from '../../src/assets/images/sparta.png';
import RomeImage from '../../src/assets/images/rome.png';
import ConstantinopleImage from '../../src/assets/images/constantinople.png';
import FaviconImage from '../../src/assets/images/favicon.png';

const imageStyle = { height: '50vh', maxWidth: '100%' };

storiesOf('Assets|Images', module)
  .addDecorator(centered)
  .add('Athens map', () => <img src={AthensImage} alt="Athens" style={imageStyle} />)
  .add('Sparta map', () => <img src={SpartaImage} alt="Sparta" style={imageStyle} />)
  .add('Rome map', () => <img src={RomeImage} alt="Rome" style={imageStyle} />)
  .add('Constantinople map', () => <img src={ConstantinopleImage} alt="Constantinople" style={imageStyle} />)
  .add('favicon', () => <img src={FaviconImage} alt="JoyStream" style={imageStyle} />);
