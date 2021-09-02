import '@testing-library/jest-dom'
import { getStatus } from '../../services/api';

describe('api test', () => {
    test('getStatus should string "ok" or "off" ', async () => {
        const apiserver = 'https://be-app-hiring-bixinf-test.apps.bi-x-ire.tftp.p1.openshiftapps.com/';
        const status = await getStatus(apiserver);
        expect(typeof status).toBe('string');
    })

    test('getStatus should string "off" if apiserver is undefined', async () => {
        const apiserver = undefined;
        const status = await getStatus(apiserver);
        expect(status).toBe('off');
    })

})

