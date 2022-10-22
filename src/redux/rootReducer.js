import {combineReducers} from "redux";
import {ProductsReducer} from "./ProductsReducer";
import {appReducer} from "./appReducer";

export const rootReducer = combineReducers({
    products: ProductsReducer,
    app: appReducer
})