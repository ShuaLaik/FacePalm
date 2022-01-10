import React from "react";
import { Link } from "react-router-dom";
import PostIndexContainer from "./post_index_container";
import SidebarContainer from "./sidebar_container";

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
    // componentDidMount(){
    //     this.props.fetchUser(this.props.match.params.id)
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

    render(){
        const { currentUser, pageUser} = this.props;
        let button = "Acquaintance"
        currentUser === pageUser.id ? button = "Edit Profile" : null;
        return <div id="profile-page">
            <div id="top-profile">
                <img id="cover" src="https://i.ytimg.com/vi/ScPOKi2R-8Q/maxresdefault.jpg"/>
                <div id="main-ul">
                    <img id="profile" src="https://nypost.com/wp-content/uploads/sites/2/2022/01/the-weeknd-new-album-2.jpg?quality=90&strip=all"/>
                    <p>{pageUser.first_name} {pageUser.last_name}</p>
                    <ul>
                        <button disabled={true} id="editbutton">{button}</button>
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