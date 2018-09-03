import React from 'react';
import { shallow } from 'enzyme';
import Grid from './index';

describe('<Grid />', () => {
	it('should render grid container with custom class', () => {
		const customClass = 'custom-class';
		const wrapper = shallow(<Grid container className={customClass} />);

		expect(wrapper.hasClass('grid-container')).toBeTruthy();
		expect(wrapper.hasClass(customClass)).toBeTruthy();
	});

	it('should render grid item', () => {
		const wrapper = shallow(<Grid item />);

		expect(wrapper.hasClass('grid-item')).toBeTruthy();
	});

	it('should apply prop spacing', () => {
		const wrapper = shallow(<Grid container spacing={24} />);

		expect(wrapper.hasClass('grid-container--spacing-24'));
	});
});
