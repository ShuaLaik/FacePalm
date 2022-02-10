import React from "react"
import { Link } from "react-router-dom";
import NotificationsContainer from "./notifications/notifications_container";

class Homepage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            active: false
        }
        this.HandleLogOut = HandleLogOut.bind(this);
        this.handleClick = this.handleClick.bind(this);
        props.fetchAcquaintacnes({user_id: props.currentUser})
        props.fetchPendingNotifcations()
        props.fetchNotifications()
    }

    handleClick(){
        this.state.active === true ? this.setState({active: false}) : this.setState({active: true})
    }
    render(){
        const user = this.props.users[this.props.currentUser]
        if (!user) return null;
        return <div id="nav-banner">
            <ul className="inner-banner">
            <Link to="/">
            <img id="logo" src={window.smlogoURL}/></Link>
                <form>
                    <input type="text" disabled={true} placeholder="Search - Not Implemented"/>
                </form>
            </ul>
            <ul className="inner-banner x2">
                <a className="a" href="https://github.com/ShuaLaik" target="_blank">
                    <img className="logos"src={window.githublogoURL}/>
                </a>
                <a className="a" href="https://www.linkedin.com/in/joshualaikowski/" target="_blank">
                    <img className="logos" src={window.linkedinlogoURL}/>
                </a>
            </ul>
            <ul className="inner-banner">
                <Link className="a" to={`/profile/${user.id}`} >
                    <img id="banner-img" src={user.avatarUrl} />
                    <h1 className="banner-text">{user.first_name}</h1>
                </Link>
                <img id="notiflogo" 
                onClick={() => this.handleClick()} 
                className={this.state.active === true ? "active" : ""}
                src={window.notiflogoURL}/>
                {this.state.active === true ? <ul onClick={() => this.handleClick()} className="notif-dropdown"><NotificationsContainer /></ul> : null}
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