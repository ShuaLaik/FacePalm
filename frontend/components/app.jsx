import React from "react"
import { Route, Routes } from "react-router-dom"
import SignUpFormContainer from "./sessions/sign_up_form_container"

const App = () => (
    <div>
        <header>
            <h1>Facepalm</h1>
        </header>
        <Routes>
            <Route path="/" element={<SignUpFormContainer/>}/>
        </Routes>
    </div>
)

export default App;