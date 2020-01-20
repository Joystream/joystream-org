import React from 'react';
import { Link } from 'gatsby';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from './';

configure({ adapter: new Adapter() });

describe('Button component', () => {
  it('renders as a "a" tag', () => {
    const wrapper = shallow(<Button href="/">Home link</Button>);
    expect(wrapper.type()).toEqual('a');
  });

  it('renders as a Link tag', () => {
    const wrapper = shallow(<Button to="/">Home link</Button>);
    expect(wrapper.type()).toEqual(Link);
  });

  it('renders correct text inside a Button', () => {
    const wrapper = shallow(<Button>Button label</Button>);
    expect(wrapper.text()).toEqual('Button label');
  });

  it('composes classes correctly based on props', () => {
    const wrapper = shallow(
      <Button reversed secondary large light>
        Button label
      </Button>
    );
    expect(wrapper.hasClass('Button--reversed')).toEqual(true);
    expect(wrapper.hasClass('Button--secondary')).toEqual(true);
    expect(wrapper.hasClass('Button--large')).toEqual(true);
    expect(wrapper.hasClass('Button--light')).toEqual(true);
  });

  it('has additional class passed with className prop', () => {
    const wrapper = shallow(<Button className="Header__button">Button label</Button>);
    expect(wrapper.prop('className')).toEqual('Header__button Button');
  });
});
