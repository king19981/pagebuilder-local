import { mount } from 'enzyme';
import React from 'react';

import TestComponent from '.';

describe('OutputTypes', () => {
  it('should render one parent element', () => {
    const wrapper = mount(<TestComponent />);
    expect(wrapper.html()).toContain('<div>Test</div>');
  });
});
