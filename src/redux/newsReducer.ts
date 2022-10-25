import {FETCH_NEWS} from './types'
import {ActionModel} from "./ActionModel";

const initialState = {
    news: []
}

export const newsReducer = (state = initialState, action: ActionModel) => {
    switch (action.type) {

        case FETCH_NEWS:
            return {...state, news: action.payload}

        default: return state
    }

    return state
}