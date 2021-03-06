import { applyMiddleware, createStore } from "redux"
import RootReducer from "../reducers/root_reducer"
import thunk from "redux-thunk"
import logger from "redux-logger"

const configureStore = (preloadedState={}) => {
    return createStore(RootReducer, preloadedState, applyMiddleware(thunk))
}
export default configureStore;