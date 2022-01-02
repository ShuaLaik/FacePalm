import React from "react";
import ReactDOM from "react-dom";
import { createUser } from "./util/users_util";


document.addEventListener("DOMContentLoaded", () => {
    window.createUser = createUser;
    const root = document.getElementById("root");
    ReactDOM.render(<h1>Its Working!</h1>, root)
})