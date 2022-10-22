import {CREATE_PRODUCT, FETCH_PRODUCTS, SHOW_LOADER, HIDE_LOADER} from './types'

export function createProducts(product) {
    return {
        type: CREATE_PRODUCT,
        payload: product
    }
}

export function showLoader() {
    return {
        type: SHOW_LOADER,
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER,
    }
}

export function fetchProducts() {
    return async dispatch => {
        dispatch(showLoader())

        const response = await fetch('http://localhost:3001/api/products/')
        const json = await response.json()
        console.log(json)
        dispatch({type: FETCH_PRODUCTS, payload: json})
        dispatch(hideLoader())
    }
}