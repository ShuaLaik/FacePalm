import { combineReducers } from "redux";
import EditPostReducer from "./edit_post_reducer";
import ModalReducer from "./modals";


const UiReducer = combineReducers({
    modal: ModalReducer,
    editPost: EditPostReducer
})

export default UiReducer;