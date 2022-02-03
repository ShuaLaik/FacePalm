
import { combineReducers } from "redux";
import AcquaintanceReducer from "./aquaintances_reducer";
import CommentsReducer from "./comments_reducer";
import NotificationsReducer from "./notifications_reducer";
import PendingNotificationsReducer from "./pending_notifications_reducer";
import PostsReducer from "./posts_reducer";
import usersReducer from "./users_reducer";

const EntitiesReducer = combineReducers({
    users: usersReducer,
    posts: PostsReducer,
    comments: CommentsReducer,
    acquaintances: AcquaintanceReducer,
    notifications: NotificationsReducer,
    pendingNotifications: PendingNotificationsReducer
})

export default EntitiesReducer;