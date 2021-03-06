import React from "react";
import { Link } from "react-router-dom";
import PostIndexContainer from "./posts/post_index_container";
import SidebarContainer from "./sidebar_container";
import ModalsContainer from "../modals/modals_container";
import AcquaintancesContainer from "./acquaintances/acquaintances_container";
import ButtonContainer from "./profile_button/button_container";

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
        this.props.fetchNotifications()
        this.props.fetchPendingNotifcations()
        this.props.fetchAcquaintances(this.props.currentUser)
    }
    componentDidUpdate(prevProps){
        if (prevProps.pageUser !== this.props.pageUser){
            this.handleSelect("posts")
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
                        <ButtonContainer pageUser={pageUser}/>
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