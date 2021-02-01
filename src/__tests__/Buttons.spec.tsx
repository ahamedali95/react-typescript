import React from 'react';
import { shallow , ShallowWrapper} from 'enzyme';
import { Buttons } from '../components/CLASS_BASED_IMPLEMENTATION_WITH_REDUX/Buttons';
import ButtonTypes from "../constants/ButtonTypes";

describe('Buttons.tsx',() => {
    const mockSetFearFactor: jest.Mock = jest.fn();
    const mockDestroy: jest.Mock = jest.fn();
    let wrapper: ShallowWrapper, buttonOk: ShallowWrapper, buttonDangerous: ShallowWrapper, buttonDestroy: ShallowWrapper;

    beforeAll(() => {
        wrapper = shallow(<Buttons setFearFactor={mockSetFearFactor} destroy={mockDestroy} />);
        buttonOk = wrapper.find('[data-test="buttons-component-ok"]');
        buttonDangerous = wrapper.find('[data-test="buttons-component-dangerous"]');
        buttonDestroy = wrapper.find('[data-test="buttons-component-destroy"]');
    });

    describe('Button Ok', () => {
        it('renders without error', () => {
            expect(buttonOk.exists()).toBeTruthy();
        });

        it('calls ~mockSetFearFactor~ with appropriate button value when onClick event is triggered', () => {
            buttonOk.simulate('click');
            expect(mockSetFearFactor).toBeCalledWith(ButtonTypes.ok);
            mockSetFearFactor.mockClear();
        })
    });

    describe('Button Dangerous', () => {
        it('renders without error', () => {
            expect(buttonDangerous.exists()).toBeTruthy();
        });

        it('calls ~mockSetFearFactor~ with appropriate button value when onClick event is triggered', () => {
            buttonDangerous.simulate('click');
            expect(mockSetFearFactor).toBeCalledWith(ButtonTypes.dangerous);
        })
    });

    describe('Button Destroy', () => {
        it('renders without error', () => {
            expect(buttonDestroy.exists()).toBeTruthy();
        });

        it('calls ~mockDestroy~ with appropriate button value when onClick event is triggered', () => {
            buttonDestroy.simulate('click');
            expect(mockDestroy).toHaveBeenCalled();
        })
    });
});