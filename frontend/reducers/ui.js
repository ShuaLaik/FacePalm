import { combineReducers } from "redux";
import ModalReducer from "./modals";


const UiReducer = combineReducers({
    modal: ModalReducer
})

export default UiReducer;