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

    handleSubmit(e){
        e.preventDefault();
        this.props.FormAction(this.state)
    }

    render(){
        return <div id="signupform">
            <h1>Sign Up</h1>
            <form onSubmit={this.handleSubmit} >
                <ul className="names">
                    <label>
                        <input
                            type="text"
                            placeholder="First Name"
                            value={this.state.first_name}
                            onChange={this.update("first_name")}
                            />
                    </label>
                    <label>
                        <input
                            type="text"
                            placeholder="Last Name"
                            value={this.state.last_name}
                            onChange={this.update("last_name")}
                        />
                    </label>
                </ul>
                <ul className="names">
                <label>
                    <input
                        type="text"
                        placeholder="Email"
                        value={this.state.email}
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
                </ul>
                
                <label>
                    <input
                        type="date"
                        value={this.state.birthday}
                        onChange={this.update("birthday")}
                    />
                </label>
                <hr size="1px" width="300px" />
                <button value="submit">Create Profile</button>
            </form>
        </div>
    }
}

export default SignUpForm