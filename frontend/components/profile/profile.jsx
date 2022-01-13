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
            pageUser: this.props.pageUser
        }
        this.handleSelect = this.handleSelect.bind(this)
    }
    // componentDidUpdate(){
    //     window.scrollTo(0,0);
    // }

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

    render(){
        const { currentUser, pageUser} = this.props;
        let button = "Acquaintance"
        let camera = <div></div>
        if (currentUser === pageUser.id) {
            button = "Edit Profile"
            camera = <div id="camera">
                    <img onClick={() => this.props.modal("EditProiflePic")}  src={window.cameralogoURL} />
                </div>
        }
        return <div id="profile-page">
            <div id="top-profile">
                <img id="cover" src="https://i.ytimg.com/vi/ScPOKi2R-8Q/maxresdefault.jpg"/>
                <div id="main-ul">
                    <ol>
                        <img id="profile" src={pageUser.avatarUrl}/>
                        {camera}
                        <button onClick={() => this.props.modal("EditUser")} id="editbutton">{button}</button>
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