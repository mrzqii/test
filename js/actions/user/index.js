import types from '../../constants'
import { UserApi } from '../../config/api/user'



export const loginStatus = () => {
    return {
        type: types.user.USER_STATUS_CHANGE
    }
}
// 退出登陆
export const loginOutAction = () => {
    return {
        type: types.user.USER_LOGIN_OUT
    }
}
export const isLoding = () => {
    console.warn('typesuser::', types.user);
    return {
        type: types.user.USER_LODING
    }
}
export const alreadyLogin = (json) => {
    return {
        type: types.user.UPDATE_USER_INFO,
        userInfo: json
    }
}
 
// 可以异步的action
export const asyncLoging = ({ username, password }) => {
    return dispatch => {
        dispatch(isLoding())
        let formdata = new FormData();
        formdata.append("username", username);
        formdata.append("password", password);
        return fetch(UserApi.login.url, {
            method: "POST",
            body: formdata
        }).then(function (response) {
            console.warn('1::', response);
            return response.json()
        }).then(res => {
            console.warn('2::', res);
            if (res.result == 1) {
                dispatch(loginStatus())
                dispatch(alreadyLogin(res.data))
                return "success"
            }

        })
            .catch((e) => {
                console.warn('e::', e);
                return "error"
            })
    }
}