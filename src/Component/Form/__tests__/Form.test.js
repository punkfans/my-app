import {shallow} from 'enzyme';
import React from 'react';
import Form from '../Form';

describe('Clock component test', () => {
    let form;
    beforeEach(() => {
        form = shallow(<Form />);
    });

    describe('initial display', () => {

        it('should render 1 input', () => {
            expect(form.find('input').length).toBe(1);
        });

        it('should render 1 select', () => {
            expect(form.find('select').length).toBe(1);
        });

        it('should render 1 button', () => {
            expect(form.find('button').length).toBe(1);
        });
    });

    describe('click submit', () => {
        let mockFunction = jest.fn();
        beforeEach(() => {
            form.find('#submitButton').simulate('click', {preventDefault: mockFunction});
        });

        it('should prevent default', () => {
            expect(mockFunction).toHaveBeenCalled();
        });
    });

    describe('input field onchange', () => {
        beforeEach(() => {
            form.find('input').simulate('change', {target: {value: 'test', name: 'name'}});
        });

        it('should prevent default', () => {
            expect(form.state('name')).toBe('test');
        });
    });
});