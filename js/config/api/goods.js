import { env } from '../index';

const ROOT_URL = `${env.apiHost}/`;

export const GoodsApi = {
    goodSearch: {
        url: `${ROOT_URL}shop/api/shop/goods/search.do`,
        method: 'GET'
    }
   
}
