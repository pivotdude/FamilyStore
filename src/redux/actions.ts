import {
    FETCH_PRODUCTS,
    SEARCH_PRODUCTS,
    SHOW_LOADER,
    HIDE_LOADER,
    FETCH_NEWS,
    AUTHORIZATION,
    REGISTRATION,
    LOGOUT, SHOW_SUBMIT, SHOW_WARNING
} from './types'

function fetchGETRequest(route: string, types: string):Object {
    return async (dispatch: Function) => {
        dispatch(showLoader())
        const response = await fetch(`http://localhost:3001/api/${route}`)
        const json = await response.json()
        console.log(json)
        dispatch({type: types, payload: json})
        dispatch(hideLoader())
    }
}

function fetchPostRequest(route: string, types: string, data:object) {
    return async (dispatch: Function) => {
        dispatch(showLoader())
        const response = await fetch(`http://localhost:3001/api/${route}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const json = await response.json()
        dispatch({type: types, payload: json})
        dispatch(hideLoader())
    }
}

export function fetchProducts():Object {
    return fetchGETRequest('products', FETCH_PRODUCTS)
}
export function fetchProductsOnSearch(name:string):object {
    return fetchGETRequest(`products/search/${name}`, SEARCH_PRODUCTS)
}
export function fetchNews():object {
    return fetchGETRequest(`news`, FETCH_NEWS)
}

// APPReducer
export function showLoader():object {
    return {type: SHOW_LOADER}
}

export function hideLoader():object {
    return {type: HIDE_LOADER}
}

export function authAction(data: object):object {
    console.log(data)
    return fetchPostRequest('login', AUTHORIZATION, data)
}
export function regAction(data: object):object {
    console.log(data)
    return fetchPostRequest('registration', REGISTRATION, data)
}

export function LogoutAction():Object {
    return {type: LOGOUT}
}

export function clearAuth():Object {
    return {type: AUTHORIZATION, payload: {}}
}
export function clearReg():Object {
    return {type: REGISTRATION, payload: {}}
}

export function setNotifWarning(arr: Array<string>) {
    return {type: SHOW_WARNING, payload: arr}
}
export function setNotifSubmit(arr: Array<string>) {
    return {type: SHOW_SUBMIT, payload: arr}
}