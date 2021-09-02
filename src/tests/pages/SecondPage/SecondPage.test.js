import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import { SecondPage } from '../../../pages/SecondPage';
// import { apiStatus } from '../../../actions/photosActions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {};

let store = mockStore(initState);
store.dispatch = jest.fn();

const state = {
    apiserver: null,
    user: null,
    password: null,
    api_status: false,
    img: null
};

const wrapper = () => mount( 
    <Provider store={ store }>
        <SecondPage { ...state }  /> 
    </Provider>
)

describe('test <SecondPage />', () => {
    test('should show correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    });
})
