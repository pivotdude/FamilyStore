import {FETCH_PRODUCTS, SEARCH_PRODUCTS} from './types'
import {ProductModel} from "../Models";
import {ActionModel} from './ActionModel'


interface initialStateModel {
    fetchedProducts: Array<ProductModel>,
    SearchProducts: Array<ProductModel>,
    search: string,
}

const initialState: initialStateModel = {
    fetchedProducts: [],
    SearchProducts: [],
    search: ''
}

export const productsReducer = (state = <initialStateModel> initialState, action: ActionModel) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {...state, fetchedProducts: action.payload}

        case SEARCH_PRODUCTS:
            return {...state, SearchProducts: action.payload}

        default: return state
    }
}