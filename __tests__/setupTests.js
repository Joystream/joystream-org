import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as jest from 'jest';

// This is to get rid of this error while running tests:
// "You will need to pass in an i18next instance by using initReactI18next"
jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: key => key }),
}));

configure({ adapter: new Adapter() });
