import React from "react";
import { Link } from "react-router-dom";
import PostIndexContainer from "./post_index_container";
import SidebarContainer from "./sidebar_container";
import ModalsContainer from "../modals/modals_container";

class Profile extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            posts: "selected",
            friends: "",
            and: "",
            more: "",
            to: "",
            come: "",
            pageUser: this.props.pageUser,
            button: <button onClick={() => this.props.modal("EditUser")} id="editbutton">Acquaintance</button>
        }
        this.handleSelect = this.handleSelect.bind(this)
        this.buttonCheck = this.buttonCheck.bind(this)
    }
    componentWillMount(){
        // this.props.fetchNotifications()
        // this.props.fetchPendingNotificaitons()
        this.buttonCheck()
    }
    componentDidUpdate(prevProps){
        if (prevProps.pageUser.id !== this.props.pageUser.id){
            this.buttonCheck()
        }
    }

    handleSelect(type){
        Object.keys(this.state).map(key => {
            if (type === key) {
                this.setState({[key]: "selected"})
            } else {
                this.setState({[key]: ""})
            }
        })
    }
    handleProfileModal(){
        return this.props.modal("EditProfilePic")
    }
    handleRequestSent(){
        
    }
    handleRequestRevoked(){

    }
    buttonCheck(){
        const { currentUser, pageUser} = this.props;
        if (currentUser === pageUser.id) {
            this.setState({ button: <button onClick={() => this.props.modal("EditUser")} id="editbutton">Edit Profile</button>})
        } else {
            const pn = Object.values(this.props.pendingNotifications)
            const n = Object.values(this.props.notifications)
            debugger
            pn.map(pnotif => {
                if (pnotif.notifier_id === currentUser && pnotif.user_id === pageUser.id){
                    this.setState({ button: <button onClick={() => this.props.modal("EditUser")} id="editbutton">Request Sent!</button>})
                }
            })
            n.map(notif => {
                debugger
                if (notif.user_id === currentUser && notif.notifier_id === pageUser.id){
                    this.setState({ button: <button onClick={() => this.props.modal("EditUser")} id="editbutton">Accept Request</button>})
                    debugger
                }
            })
        }
    }

    render(){
        const { currentUser, pageUser} = this.props;
        let camera = <div></div>
        if (currentUser === pageUser.id) {
            camera = <div id="camera">
                    <img onClick={() => this.props.modal("EditProiflePic")}  src={window.cameralogoURL} />
                </div>
        }
        debugger
        return <div id="profile-page">
            <div id="top-profile">
                <img id="cover" src="https://newevolutiondesigns.com/images/freebies/retro-facebook-cover-6.jpg"/>
                <div id="main-ul">
                    <ol>
                        <img id="profile" src={pageUser.avatarUrl}/>
                        {camera}
                        {this.state.button}
                    </ol>
                    <p>{pageUser.first_name} {pageUser.last_name}</p>
                    <ul>
                    </ul>
                </div>
                    <hr size="1px" width="925px" />
                    <div id="task-bar">
                    <ul className="options-bar">
                        <li
                            onClick={() => this.handleSelect("posts")}
                        className={this.state.posts}
                        >Posts</li>
                        <li
                            onClick={() => this.handleSelect("friends")}
                        className={this.state.friends}
                        >Friends</li>
                        <li
                            onClick={() => this.handleSelect("and")}
                            className={this.state.and}
                        >And</li>
                        <li
                            onClick={() => this.handleSelect("more")}
                            className={this.state.more}
                        >More</li>
                        <li
                            onClick={() => this.handleSelect("to")}
                            className={this.state.to}
                        >To</li>
                        <li
                            onClick={() => this.handleSelect("come")}
                            className={this.state.come}
                        >Come</li>
                    </ul>
                    </div>
            <div id="bottom-profile">
                <SidebarContainer pageUser={pageUser}/>
                <PostIndexContainer pageUser={pageUser}/>
            </div>
            </div>
        </div>
    }
}

export default Profile;