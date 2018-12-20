export default class Fetch {
    static fetchGet(api, param) {
        const { url, method } = api
        return fetch(url + "?" + toQueryString(param), {
            method: method,
        })
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                return responseJson;
            })
            .catch(error => {
                console.warn(`error:${error}`);
            });
    }
    static  fetchPost(api, param) {
        const { url, method } = api
        return fetch(url, {
            method: method,
            headers: Object.assign({},
                {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }),
            body: JSON.stringify(param)
        })
            .then(response => {
                console.warn(`response:${response}`)
                return response
            })
            .then(responseJson => {
                console.warn(`responseJson:${responseJson}`)
                return responseJson;
            })
            .catch(error => {
                console.warn(`error::${error}`);
            });
    }
}

function toQueryString(obj) {
    return obj
        ? Object.keys(obj)
            .map((key) => {
                var val = obj[key];
                if (val) {
                    return encodeURIComponent(key) +
                        "=" +
                        encodeURIComponent(val);
                } else {
                    return encodeURIComponent(key) + "=";
                }
            })
            .join("&")
        : "";
}