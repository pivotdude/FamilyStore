import {HIDE_LOADER, SHOW_SUBMIT, SHOW_INFO, SHOW_LOADER, SHOW_WARNING, SHOW_QUESTION} from "./types";
import {ActionModel} from "./ActionModel";

const initialState = {
    loading: false,
    informations_notifications: [],
    questions_notifications: [],
    warnings_notifications: [],
    submits_notifications: [],
}

export const appReducer = (state = initialState, action: ActionModel) => {
    switch (action.type) {
        case SHOW_LOADER:
            return {...state, loading: true}
        case HIDE_LOADER:
            return {...state, loading: false}

        case SHOW_INFO:
            return {...state, informations_notifications: action.payload}
        case SHOW_QUESTION:
            return {...state, questions_notifications: action.payload}
        case SHOW_WARNING:
            return {...state, warnings_notifications: action.payload}
        case SHOW_SUBMIT:
            return {...state, submits_notifications: action.payload}


        default: return state
    }
}