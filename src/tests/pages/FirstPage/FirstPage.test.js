import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import FirstPage from '../../../pages/FirstPage/FirstPage';

describe('test <FirstPage /> ', () => {

    const wrapper = shallow(<FirstPage />)

    test('should show FirstPage correctly', () => {
         expect(wrapper).toMatchSnapshot();
    })

})

