import { combineReducers } from "redux";
import user from "./user";

const rootReducer = combineReducers({
    app: combineReducers({
        user
    })
})


export default rootReducer;