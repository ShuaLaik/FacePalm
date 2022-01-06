import React from "react";

class Profile extends React.Component {



    componentDidMount(){
        this.props.fetchUser(this.props.pageUser.id)
    }
    render(){
        return <div id="profile-page">
            <div id="top-of-profile">
                <img id="cover" src="https://i.ytimg.com/vi/ScPOKi2R-8Q/maxresdefault.jpg"/>
                <div id="main-ul">
                    <img id="profile" src="https://nypost.com/wp-content/uploads/sites/2/2022/01/the-weeknd-new-album-2.jpg?quality=90&strip=all"/>
                    <p>{this.props.pageUser.first_name}</p>
                </div>
                </div>
            </div>
    }
}

export default Profile;