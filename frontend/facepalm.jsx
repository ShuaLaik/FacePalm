import React from "react";
import ReactDOM from "react-dom";
import { createUser, logInUser, logOutUser } from "./util/user_auth_util";


document.addEventListener("DOMContentLoaded", () => {
    window.createUser = createUser;
    window.logInUser = logInUser;
    window.logOutUser = logOutUser;
    const root = document.getElementById("root");
    ReactDOM.render(<h1>Its Working!</h1>, root)
})