import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { types } from '../../types/types';
import { scanQR, apiStatus } from '../../actions/photosActions';
 
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    apiserver: null,
    user: null,
    password: null,
    api_status: false,
    img: null
};

let store = mockStore(initState);


describe('Test - Redux Actions', () => {
    beforeEach( () => {
        store = mockStore(initState);
    });

    test('should return action with correctly payload', async() => {
        const data_qr = {
            apiserver: 'http://apiserver',
            user: 'santiago',
            password: '123456'
        }

        await store.dispatch( scanQR(data_qr) );
        const actions = store.getActions();

        expect( actions[0] ).toEqual({
            type: types.scanQR,
            payload: {
                apiserver: 'http://apiserver',
                user: 'santiago',
                password: '123456'
            }
        });
    })

    test('should return action with correctly payload 2', async() => {
        await store.dispatch( apiStatus('off') );
        const actions = store.getActions();
        expect( actions[0] ).toEqual({
            type: types.apiStatus,
            payload: 'off'
        });
    })
    
})
