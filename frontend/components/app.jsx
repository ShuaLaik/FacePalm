import React from "react"
import { Route, Switch } from "react-router-dom"
import LogInFormContainer from "./sessions/log_in_form_container";
import SignUpFormContainer from "./sessions/sign_up_form_container"
import HomepageContainer from "./homepage/homepage_container"
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import ProfileContainer from "./profile/profile_container";
import ModalsContainer from "./modals/modals_container";

const App = ( { store } ) => {
    return (<div>
        <ModalsContainer />
        <AuthRoute path="/" component={HomepageContainer} />
        <AuthRoute path="/" component={ModalsContainer}/>
        <ProtectedRoute path="/" component={LogInFormContainer}/>
        <ProtectedRoute path="/signup" component={SignUpFormContainer}/>
        <Switch>
            <AuthRoute path="/profile/:id" component={ProfileContainer}/>
        </Switch>
    </div>)
}

export default App;