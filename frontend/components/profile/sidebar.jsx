import React from "react";

class Sidebar extends React.Component{
    render(){
        return <div className="left-container">
            <h1>Bio</h1>
            <p>{this.props.pageUser.bio}</p>
            <button>Edit Bio</button>
            <h4> ·  Favorite Color: {this.props.pageUser.favorite_color}</h4>
            <h4> ·  Birthday: {this.props.pageUser.birthday}</h4>
            <button>Edit Facts</button>
        </div>
    }
}

export default Sidebar;