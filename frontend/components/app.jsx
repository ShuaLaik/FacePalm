import React from "react"
import { Route, Routes } from "react-router-dom"
import LogInFormContainer from "./sessions/log_in_form_container";
import SignUpFormContainer from "./sessions/sign_up_form_container"

const App = () => (
    <div>
        <header>
            <h1>Facepalm</h1>
        </header>
        <Routes>
            <Route path="/" element={<SignUpFormContainer/>}/>
            {/* <Route path="/" element={<LogInFormContainer/>}/> */}
        </Routes>
    </div>
)

export default App;