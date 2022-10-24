import {FETCH_PRODUCTS, SEARCH, SEARCH_PRODUCTS} from './types'

const initialState = {
    products: [],
    fetchedProducts: [],
    SearchProducts: [],
    search: ''
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {...state, fetchedProducts: action.payload}

        case SEARCH_PRODUCTS:
            return {...state, SearchProducts: action.payload}

        default: return state
    }

    return state
}