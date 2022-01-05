import React from "react"
import { Route, Switch } from "react-router-dom"
import LogInFormContainer from "./sessions/log_in_form_container";
import SignUpFormContainer from "./sessions/sign_up_form_container"
import HomepageContainer from "./homepage/homepage_container"
import { AuthRoute } from "../util/route_util";
import Profile from "./profile/profile";

const App = ( { store } ) => {
    return (<div>
        <Route path="/" component={LogInFormContainer}/>
        <Route path="/signup" component={SignUpFormContainer}/>
        <Switch>
            <AuthRoute exact path="/profile/:id" component={Profile}/>
            <AuthRoute exact path="/" component={HomepageContainer} />
        </Switch>
    </div>)
}

export default App;