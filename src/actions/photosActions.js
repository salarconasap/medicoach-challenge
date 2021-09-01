import { types } from '../types/types';

export const scanQR = ( qr ) => ({
    type: types.scanQR,
    payload: qr
});

export const apiStatus = ( status ) => ({
    type: types.apiStatus,
    payload: status
});

export const setImg = ( img ) => ({
    type: types.setImg,
    payload: img
});

export const setError = ( err ) => ({
    type: types.uiSetError,
    payload: err
});

export const removeError = () => ({
    type: types.uiRemoveError
});

export const startLoading = () => ({
    type: types.uiStartLoading
})
export const finishLoading = () => ({
    type: types.uiFinishLoading
})

