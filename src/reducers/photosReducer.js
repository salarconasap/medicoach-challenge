import { types } from '../types/types';

const initialState = {
    apiserver: null,
    user: null,
    password: null,
    api_status: false,
    img: null
}

export const photosReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case types.scanQR:
            return {
                ...state,
                apiserver: action.payload.apiserver,
                user: action.payload.user,
                password: action.payload.password,
            }
        case types.apiStatus:
            return {
                ...state,
                api_status: action.payload
            }
        case types.setImg:
            return {
                ...state,
                img: action.payload
            }
        case types.clear:
            return {
                ...state,
                apiserver: null,
                user: null,
                password: null,
                api_status: false,
                img: null
            }
        default:
            return state;
    }

}