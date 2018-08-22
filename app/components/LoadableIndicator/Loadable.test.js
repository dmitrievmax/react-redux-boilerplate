import React from 'react';
import { shallow } from 'enzyme';
import LoadableIndicator from './index';

describe('<LoadableIndicator />', () => {
	it('should render div with text', () => {
		const wrapper = shallow(<LoadableIndicator retry={() => null} />);

		expect(wrapper.find('div').length).toBe(1);
		expect(wrapper.text()).toBe('Loading...');
	});

	it('should show fallback with retry button if error', () => {
		const fn = jest.fn();
		const error = {};
		const wrapper = shallow(<LoadableIndicator error={error} retry={fn} />);
		const button = wrapper.find('button');

		expect(button.length).toBe(1);
		expect(button.text()).toBe('Retry');

		button.simulate('click');
		expect(fn).toHaveBeenCalled();
	});
});
