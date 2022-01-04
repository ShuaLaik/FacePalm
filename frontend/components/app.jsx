import React from "react"
import { Route, Routes } from "react-router-dom"
import LogInFormContainer from "./sessions/log_in_form_container";
import SignUpFormContainer from "./sessions/sign_up_form_container"

const App = () => {
    
    return (<div className="LogIn">
        <div id="loginheader">
            <h1>Facepalm</h1>
            <p>A place for you and your friends to cringe</p>
        </div>
        <LogInFormContainer/>
        <Routes>
            <Route path="/signup" element={<SignUpFormContainer/>}/>
            {/* <Route path="/" element={<LogInFormContainer/>}/> */}
        </Routes>
    </div>)
}

export default App;