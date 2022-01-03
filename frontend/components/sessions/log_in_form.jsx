import React from "react";

class LogInForm extends React.Component {
    constructor(props){
        super(props)
        this.state = this.props.user
        this.handleSubmit()
    }
    
    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(){
        this.props.logInUser(this.state)
    }

    render(){
        return <div>
            <form onSubmit={this.handleSubmit}>
                <label>Email
                    <input
                        type="text"
                        value={this.state.email}
                        onChange={this.update("email")}
                    />
                </label>
                <label>Password
                    <input
                        type="password"
                        value={this.state.password}
                        onChange={this.update("password")}
                    />
                </label>
                <input type="submit" value="Log In"/>
            </form>
        </div>
    }
}

export default LogInForm;