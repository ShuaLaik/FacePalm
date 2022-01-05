import React from "react";

class Profile extends React.Component {



    componentDidMount(){
        this.props.fetchUser(this.props.pageUser.id)
    }
    render(){
        return <div id="profile-page">
            <div id="top-of-profile">
                <img src="https://i.ytimg.com/vi/ScPOKi2R-8Q/maxresdefault.jpg"/>
                    <h1>{this.props.pageUser.first_name}</h1>
                </div>
            </div>
    }
}

export default Profile;