import {combineReducers} from "redux";
import {productsReducer} from "./productsReducer";
import {appReducer} from "./appReducer";
import {newsReducer} from './newsReducer';
import {authorizationReducer} from './authorizationReducer'

export const rootReducer: Function = combineReducers({
    products: productsReducer,
    app: appReducer,
    news: newsReducer,
    authorization: authorizationReducer
})