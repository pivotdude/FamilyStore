import {CREATE_PRODUCT, FETCH_PRODUCTS} from './types'

const initialState = {
    products: [],
    fetchedProducts: []
}
export const ProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_PRODUCT:
            return {...state, products: [action.payload]}

        case FETCH_PRODUCTS:
            return {...state, fetchedProducts: action.payload}
        default: return state
    }

    return state
}