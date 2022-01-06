import React from "react"
import { Link } from "react-router-dom";

class Homepage extends React.Component{
    constructor(props){
        super(props)
        this.HandleLogOut = HandleLogOut.bind(this);
    }

    render(){
        const user = this.props.users[this.props.currentUser]
        return <div id="nav-banner">
            <ul className="inner-banner">
            <Link to="/">
            <img id="logo" src={window.smlogoURL}/></Link>
                <form>
                    <input type="text" disabled={true} placeholder="Search - Not Implemented"/>
                </form>
            </ul>
            <ul className="inner-banner">
            </ul>
            <ul className="inner-banner">

                <Link to={`/profile/${this.props.currentUser}`} >
                    <img id="banner-img" src="https://nypost.com/wp-content/uploads/sites/2/2022/01/the-weeknd-new-album-2.jpg?quality=90&strip=all" />
                    <h1 className="banner-text">{user.first_name}</h1>
                    </Link>
                <img id="notiflogo" src={window.notiflogoURL}/>
                {this.HandleLogOut(this.props.session, this.props.logOutUser)}
            </ul>
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