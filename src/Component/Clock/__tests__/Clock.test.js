import {shallow} from 'enzyme';
import React from 'react';
import Clock from '../Clock';
describe('Clock component test', () => {
    let clock;
    beforeEach(() => {
        clock = shallow(<Clock location="Chicago"/>);
    });

    it('should render 3 div', () => {
        expect(clock.find('div').length).toBe(3);
    });
});