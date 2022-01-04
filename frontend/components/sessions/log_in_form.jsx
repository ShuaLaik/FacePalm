import React from "react";
import { Link } from "react-router-dom";

class LogInForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.user;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.HandleLogOut = HandleLogOut.bind(this);
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


    render(){
        return <div>
            <form onSubmit={this.handleSubmit} id="loginform">
                <label>
                    <input
                        type="text"
                        value={this.state.email}
                        placeholder="Email"
                        onChange={this.update("email")}
                    />
                </label>
                <label>
                    <input
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.update("password")}
                    />
                </label>
                <button value="submit">Log In</button>
                <hr size="1px" width="300px"/>
                <div id="buttonContainer">
                    <Link className="sudoButton"to="/signup">Create User</Link>
                </div>
            </form>
            {this.HandleLogOut(this.props.session, this.props.logOutUser)}

        </div>
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