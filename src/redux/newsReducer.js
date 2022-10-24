import {FETCH_NEWS} from './types'

const initialState = {
    news: []
}

export const newsReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_NEWS:
            return {...state, news: action.payload}

        default: return state
    }

    return state
}