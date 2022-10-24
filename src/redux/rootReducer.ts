import {combineReducers, Reducer} from "redux";
import {productsReducer} from "./productsReducer";
import {appReducer} from "./appReducer";
import {newsReducer} from './newsReducer';

interface reducers {
    products: Reducer,
    app: Reducer,
    news: Reducer,
}

export const rootReducer: reducers = combineReducers({
    products: productsReducer,
    app: appReducer,
    news: newsReducer,
})