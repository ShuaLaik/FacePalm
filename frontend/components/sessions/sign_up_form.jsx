import React from "react";


class SignUpForm extends React.Component {

    constructor(props){
        super(props)
        this.state = this.props.user
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field){
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(){
        this.props.formAction(this.state)
    }

    render(){
        return <div id="signupform">
            <h1>Sign Up</h1>
            <form onSubmit={this.handleSubmit} >
                <label>First Name
                    <input
                        type="text"
                        value={this.state.first_name}
                        onChange={this.update("first_name")}
                        />
                </label>
                <label>Last Name
                    <input
                        type="text"
                        value={this.state.last_name}
                        onChange={this.update("last_name")}
                    />
                </label>
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
                <label> Birthday
                    <input
                        type="date"
                        value={this.state.birthday}
                        onChange={this.update("birthday")}
                    />
                </label>
            </form>
        </div>
    }
}

export default SignUpForm