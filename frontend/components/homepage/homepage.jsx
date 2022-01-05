import React from "react"

class Homepage extends React.Component{
    constructor(props){
        super(props)
        this.HandleLogOut = HandleLogOut.bind(this);
    }

    render(){
        const user = this.props.users[this.props.currentUser]
        return <div>
            <h1>{user.first_name} {user.last_name}</h1>
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

export default Homepage;