import {combineReducers, legacy_createStore, legacy_createStore as createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({
    profile:profileReducer,
    message:dialogsReducer,
    usersPage:usersReducer,
    auth: authReducer,
})

let store = legacy_createStore(reducers)
export default store

window.store = store