import { photosReducer } from '../../reducers/photosReducer';
import { types } from '../../types/types';

describe('Test - reducers', () => {
    const initialState = {
        apiserver: null,
        user: null,
        password: null,
        api_status: false,
        img: null
    }
    
    test('If status server is ok => {"api_status": "ok"}', () => {
        const initState = {};
        const action = {
            type: types.apiStatus,
            payload: 'ok'
        };
        const state = photosReducer( initState, action );
        expect( state ).toEqual({"api_status": "ok"})
    })

    test('should reset state to initialState', () => {
        const initState = {};
        const action = {
            type: types.clear,
        };
        const state = photosReducer( initState, action );
        expect( state ).toEqual(initialState);
    })

    test('This should not make changes in the state', () => {

        const action = {
            type: 'any-action',
        };

        const state = photosReducer( initialState, action );

        expect( state ).toEqual( initialState );
 
    })
    

})
