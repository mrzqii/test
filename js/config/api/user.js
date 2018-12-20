import { env } from '../index';

const ROOT_URL = `${env.apiHost}/`;

export const UserApi = {
    login: {
        url: `${ROOT_URL}shop/api/shop/member-ext/login-ext.do`,
        method: 'POST'
    }
   
}
