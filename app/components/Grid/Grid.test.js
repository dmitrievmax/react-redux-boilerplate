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
		const wrapper = shallow(<Grid container gap={24} />);

		expect(wrapper.hasClass('grid-container--gap-24')).toBeTruthy();
	});

	it('should apply grid xs prop', () => {
		const wrapper = shallow(<Grid item xs={12} />);

		expect(wrapper.hasClass('grid-item--xs-12')).toBeTruthy();
	});

	it('should apply alignment prop', () => {
		const wrapper = shallow(<Grid grid alignItems="center" />);

		expect(wrapper.hasClass('grid-container--align-items-center')).toBeTruthy();
	});

	it('should apply justify prop', () => {
		const wrapper = shallow(<Grid grid justify="center" />);

		expect(wrapper.hasClass('grid-container--justify-center')).toBeTruthy();
	});

	it('should apply wrap prop', () => {
		const wrapper = shallow(<Grid grid wrap="wrap-reverse" />);

		expect(wrapper.hasClass('grid-container--wrap-wrap-reverse')).toBeTruthy();
	});
});
