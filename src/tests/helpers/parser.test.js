import '@testing-library/jest-dom'
import { QR_resp_to_Json } from '../../helpers/parser';

describe('parser', () => {
    test('should return an object from qr', () => {
        const str_qr = 'apiserver:https://be-app-hiring-bixinf-test.apps.bi-x-ire.tftp.p1.openshiftapps.com/;user:admin;password:secret';
        const e = {
            apiserver: 'https://be-app-hiring-bixinf-test.apps.bi-x-ire.tftp.p1.openshiftapps.com/',
            user: 'admin',
            password: 'secret'
        }
        const obj = QR_resp_to_Json(str_qr);
        expect(typeof obj).toBe('object')
        expect(obj).toEqual(e);
    })

    test('should return empty object if qr is "" ', () => {
        const str_qr = '';
        const obj = QR_resp_to_Json(str_qr);
        expect(typeof obj).toBe('object')
        expect(obj).toEqual({});
    })

    test('should return empty object if qr is null', () => {
        const str_qr = null;
        const obj = QR_resp_to_Json(str_qr);
        expect(typeof obj).toBe('object')
        expect(obj).toEqual({});
    })
})


