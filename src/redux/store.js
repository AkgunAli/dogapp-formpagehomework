import {dogsReducer, notificationsReducer} from "./reducers";
import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

const reducers = combineReducers({
    dogsReducer: dogsReducer
});
//statey
//state.todoReducer //array
//state.notificationsReducer //obhect
//state.notificationsReducer.notificationText

export const store = createStore(reducers, applyMiddleware(thunk));