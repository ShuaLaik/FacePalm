import React from "react";
import { Link, Redirect } from "react-router-dom";


class LogInForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.user;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.HandleLogOut = HandleLogOut.bind(this);
    }

    componentWillUnmount(){
        this.props.removeErrors();
    }
    
    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value });
        };
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.logInUser(this.state);
    }
    renderErrors(errors) {
        return (
            <ul className="errors">
                {errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }


    render(){
        let disabled = "";
        this.props.location.pathname === "/signup"  ? disabled = "disabled": disabled = "";
        if (!this.props.session) {
        return <div>
            <div className="errors">
                {this.renderErrors(this.props.sessionErrors)}
            </div>
            <div className={disabled} id="log-in">
            <div className="LogIn">
                <div id="loginheader">
                    <h1>Facepalm</h1>
                    <p>A place for you and your friends to cringe</p>
                </div>
            </div>
                <div>
                    <form onSubmit={this.handleSubmit} id="loginform">
                        <label>
                            <input
                                disabled={disabled}
                                type="text"
                                value={this.state.email}
                                placeholder="Email"
                                onChange={this.update("email")}
                            />
                        </label>
                        <label>
                            <input
                                disabled={disabled}
                                type="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.update("password")}
                            />
                        </label>
                        <button value="submit" disabled={disabled}>Log In</button>
                        <hr size="1px" width="300px"/>
                        <div id="buttonContainer">
                            <Link className="sudoButton" to="/signup" disabled={disabled}>Create User</Link>
                        </div>
                    </form>
                    {this.HandleLogOut(this.props.session, this.props.logOutUser)}

                    </div>
                </div>
                </div>} else {
            return <Redirect to="/"/>
        }
    }
}

const HandleLogOut = (session, logOutUser) => {
    if (session !== null) {
        return <button onClick={() => logOutUser()}>LogOut</button>;
    } else {
        return <div></div>;
    }
}

export default LogInForm;