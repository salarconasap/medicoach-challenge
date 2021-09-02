import { types } from '../../types/types';

describe('Test with types', () => {

    test('should have these types', () => {

        expect( types ).toEqual({
            scanQR: 'Scan-qr',
            apiStatus: 'Api-status',
            setImg: 'Set-img',
            uiSetError: 'Set-Error',
            uiRemoveError: 'Remove-Error',
            uiStartLoading: 'Start-loading',
            uiFinishLoading: 'Finish-loading',
            clear: 'Clear'
        })
        
    })
    

    
})
