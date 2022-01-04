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
    console.log(preloadedState)
    const store = configureStore(preloadedState);
    // delete window.currentUser;
    window.getState = store.getState;
    window.dispath = store.dispatch;
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root)
    // ReactDOM.render(<h1>It worked!</h1>, root)
})