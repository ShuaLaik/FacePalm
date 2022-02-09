import React from "react";
import { Link } from "react-router-dom";
import PostIndexContainer from "./post_index_container";
import SidebarContainer from "./sidebar_container";
import ModalsContainer from "../modals/modals_container";
import AcquaintancesContainer from "./acquaintances/acquaintances_container";

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
            button: <button onClick={() => this.handleSendRequest()} id="editbutton">Acquaintance</button>
        }
        this.handleSelect = this.handleSelect.bind(this)
        this.buttonCheck = this.buttonCheck.bind(this)
        this.handleSendRequest = this.handleSendRequest.bind(this)
        this.handleRevokeRequest = this.handleRevokeRequest.bind(this)
        this.handleAcceptRequest = this.handleAcceptRequest.bind(this)
        this.handleDeleteAcquaintance = this.handleDeleteAcquaintance.bind(this)
    }
    componentWillMount(){
        this.props.fetchNotifications()
        this.props.fetchPendingNotifcations()
        this.props.fetchAcquaintances(this.props.currentUser)
        setTimeout(() => this.buttonCheck(), 100);
        this.buttonCheck()
    }
    componentDidUpdate(prevProps){
        if (prevProps !== this.props){
            this.buttonCheck()
        }
        if (prevProps.pendingNotifications !== this.props.pendingNotifications) {
            this.buttonCheck()
        }
    }

    handleSelect(type){
        Object.keys(this.state).map(key => {
            if (type === key) {
                this.setState({[key]: "selected"})
            } else if (key !== "button"){
                this.setState({[key]: ""})
            } 
        })
    }
    handleProfileModal(){
        return this.props.modal("EditProfilePic")
    }
    handleSendRequest(){
        const { currentUser, pageUser} = this.props;
        const notif = {
            user_id: pageUser.id,
            notifier_id: currentUser,
            notif_type: "sent an Acquaintance Request!"
        }
        this.props.createNotification(notif)
        this.buttonCheck()
    }
    handleRevokeRequest(notif){
        this.props.deleteNotification(notif.id)
        this.buttonCheck()
    }
    handleAcceptRequest(notif){
        this.props.deleteNotification(notif.id)
        const { currentUser, pageUser} = this.props;
        const acquaint = {
            user_id: currentUser,
            aq_id: pageUser.id
        }
        this.props.addAcquaintance(acquaint)
    }
    handleDeleteAcquaintance(){
        this.props.deleteAcquaintance({user_id: this.props.currentUser, aq_id: this.props.pageUser.id})
    }
    buttonCheck(){
        const { currentUser, pageUser} = this.props;
        debugger
        if (currentUser === pageUser.id) {
            this.setState({ button: <button onClick={() => this.props.modal("EditUser")} id="editbutton">Edit Profile</button>})
        } else if (this.props.acqs.includes(pageUser.id)) {
            this.setState({ button: <button onClick={() => this.handleDeleteAcquaintance()} id="editbutton">Remove Acquaintance</button>})
        } else {
            const pn = Object.values(this.props.pendingNotifications)
            const n = Object.values(this.props.notifications)
            pn.map(pnotif => {
                if (pnotif.notifier_id === currentUser && pnotif.user_id === pageUser.id){
                    this.setState({ button: <button onClick={() => this.handleRevokeRequest(pnotif)} id="editbutton">Revoke Request</button>})
                }
            })
            n.map(notif => {
                if (notif.user_id === currentUser && notif.notifier_id === pageUser.id){
                    this.setState({ button: <button onClick={() => this.handleAcceptRequest(notif)} id="editbutton">Accept Request</button>})
                }
            })
        }
    }

    render(){
        const { currentUser, pageUser} = this.props;
        let bottomPage = <div id="bottom-profile"><SidebarContainer pageUser={pageUser}/><PostIndexContainer pageUser={pageUser}/></div>
        if (this.state.friends === "selected") {
            bottomPage = <div id="bottom-profile"><AcquaintancesContainer pageUser={pageUser}/></div>;
        } else if (this.state.posts !== "selected"){
            bottomPage = null
        }
        let camera = <div></div>
        if (currentUser === pageUser.id) {
            camera = <div id="camera">
                    <img onClick={() => this.props.modal("EditProiflePic")}  src={window.cameralogoURL} />
                </div>
        }
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
                {bottomPage}
            </div>
        </div>
    }
}

export default Profile;