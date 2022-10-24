import {FETCH_PRODUCTS, SEARCH_PRODUCTS, SHOW_LOADER, HIDE_LOADER, FETCH_NEWS} from './types'

function fetchRequest(route, types) {
    return async dispatch => {
        dispatch(showLoader())
        const response = await fetch(`http://localhost:3001/api/${route}`)
        const json = await response.json()
        dispatch({type: types, payload: json})
        dispatch(hideLoader())
    }
}

export function fetchProducts() {
    return fetchRequest('products', FETCH_PRODUCTS)
}

export function fetchProductsOnSearch(name) {
    return fetchRequest(`products/search/${name}`, SEARCH_PRODUCTS)
}

export function fetchNews() {
    return fetchRequest(`news`, FETCH_NEWS)
}

// APPReducer
export function showLoader() {
    return {type: SHOW_LOADER}
}

export function hideLoader() {
    return {type: HIDE_LOADER}
}
