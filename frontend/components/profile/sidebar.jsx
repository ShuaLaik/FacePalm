import React from "react";

class Sidebar extends React.Component{
    render(){
        let bio = this.props.pageUser.bio
        this.props.pageUser.bio === "null" ? bio = "" : null
        return <div className="left-container">
            <h1>Bio</h1>
            <p>{bio}</p>
            <button onClick={() => this.props.modal("EditUser")}>Edit Bio</button>
            <h4> ·  Favorite Color: {this.props.pageUser.favorite_color}</h4>
            <h4> ·  Birthday: {this.props.pageUser.birthday}</h4>
            <button onClick={() => this.props.modal("EditUser")}>Edit Facts</button>
        </div>
    }
}

export default Sidebar;