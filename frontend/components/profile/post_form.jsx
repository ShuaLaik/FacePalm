import React from "react";

class PostForm extends React.Component{

    render(){
        const { postUser } = this.props
        return <div className="post-item">
            <ul>
                <ul id="post-left">
                    <img id="profimg" src={postUser.avatarUrl} />
                </ul>
                <ul id="post-right">
                    <button className="sudo-text" onClick={() => this.props.modal("CreatePost")}>Write Post...</button>
                </ul>
            </ul>
            <br />
        </div>
    }
}

export default PostForm;