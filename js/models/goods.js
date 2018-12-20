import { GoodsApi } from '../config/api/goods'
import Fetch from "../util/fetchRequest";

export default class Goods {
    static goodSearch(param) {
        return Fetch.fetchGet(GoodsApi.goodSearch, param )
        .catch ((error)=>{
            console.warn('error::搜索错误',error);
            return false
        })
    }
}