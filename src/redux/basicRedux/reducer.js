import { combineReducers } from "redux";
export const oldReducer = function(state = {count: 0}, action) {
    if (action.type === 'INCREMENT') {
        return {count: state.count + 1};
    }
    return state;
}
export const oldReducer1 = function(state = {count: 0}, action) {
    if (action.type === 'INCREMENT') {
        return {count: state.count + 1};
    }
    return state;
}

export const combined = combineReducers({one: oldReducer, two: oldReducer1});