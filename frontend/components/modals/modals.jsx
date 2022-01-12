import React from "react";
import EditUserFormContainer from "./edit_user_modal_container";

class Modals extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: this.props.post.body,
            user_id: this.props.post.user_id,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

    update(form) {
        return e => (
            this.setState({ [form]: e.currentTarget.value })

        )
    }
    handleClose(){
        this.props.closeModal();
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.createPost(this.state);
        this.props.closeModal();
    }

    createPost(){
        
    }
    render(){
        if (this.props.form === "CreatePost"){
            return <div className="modal">
                    <div className="modal-post-form">
                        <ul id="label">
                            <h1>Create Post</h1>
                            <h2 id="close-window" onClick={this.handleClose}>X</h2>
                        </ul>
                        <ul id="ul">
                            <ul id="header">
                                <img id="profimg" src="https://nypost.com/wp-content/uploads/sites/2/2022/01/the-weeknd-new-album-2.jpg?quality=90&strip=all" />
                                <h4>{this.props.user.first_name}</h4>
                            </ul>
                            <ul id="post-right">
                        <form onSubmit={this.handleSubmit}>
                            <textarea 
                            onChange={this.update("body")} 
                            value={this.state.body} 
                            placeholder="Write Post..."/>
                            <input  
                            type="submit" 
                            value="Post"/>
                        </form>
                            </ul>
                        </ul>
                            <br />
                </div>
                    </div>
        } else if (this.props.form === "EditUser") {
            return <div className="modal">
                <EditUserFormContainer />
            </div>
        } else {
            return null
        }
    }
}

export default Modals;