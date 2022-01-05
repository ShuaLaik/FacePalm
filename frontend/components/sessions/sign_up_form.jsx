import React from "react";
import { Link } from "react-router-dom";


class SignUpForm extends React.Component {

    constructor(props){
        super(props)
        this.state = this.props.user
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount(){
        this.props.removeErrors();
    }
    componentWillUnmount(){
        this.props.removeErrors();
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
            <ul className="head">
            <ul>
                <h4>Sign Up</h4>
                <p>It's quick and easy</p>
            </ul>
            <Link to="/" className="closeWindow" >X</Link>
            </ul>
            <hr size="1px" width="418px" />
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
                <ul className="names" id="emailpassword">
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
                    <h3>Birthday:</h3>
                    <input
                        type="date"
                        value={this.state.birthday}
                        onChange={this.update("birthday")}
                    />
                </label>
                <h5>By Signing up, you agree to all of the following terms: none. All rights reserved©</h5>
                <button value="submit">Create Profile</button>
            </form>
        </div>
    }
}

export default SignUpForm