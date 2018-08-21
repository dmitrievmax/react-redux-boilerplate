import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

// example
describe('<App />', () => {
	it('should render h1 with text', () => {
		const component = shallow(<App />);

		expect(component.find('h1').length).toBe(1);
	});
});
