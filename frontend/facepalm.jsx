import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root"


document.addEventListener("DOMContentLoaded", () => {
    let preloadedState = {};
    if (window.currentUser) {
        preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            sessions: { id: window.currentUser.id }
        };
    }
    const store = configureStore(preloadedState);
    window.getState = store.getState;
    window.dispath = store.dispatch;
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root)
})