import {applyMiddleware, combineReducers, createStore} from "redux";
import {galleryPageReducer} from "./galleryPageReducer";
import thunk from "redux-thunk";


const  rootReducer = combineReducers({
   galleryPage: galleryPageReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));


window.store = store