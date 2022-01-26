import React from "react";
import EditUserFormContainer from "./edit_user_modal_container";
import CreatePostFormContainer from "./create_post_form_container";
import EditPostFormContainer from "./edit_post_form_container";
import EditProfilePicContainer from "./edit_profile_pic_container"
import EditCommentFormContainer from "./edit_comment_form_container";
class Modals extends React.Component {
    handleClick(){
        return e => this.props.closeModal()
    }
    render(){
        if (this.props.form === "CreatePost"){
            return <div className="modal" onClick={this.handleClick}>
                <CreatePostFormContainer />
                  </div>
        } else if (this.props.form === "EditUser") {
            return <div className="modal" onClick={this.handleClick}>
                <EditUserFormContainer />
            </div>
        } else if (this.props.form === "EditPost") {
            return <div className="modal" onClick={this.handleClick}>  
                <EditPostFormContainer />
            </div>
        } else if (this.props.form === "EditProiflePic") {
           return  <div className="modal" onClick={this.handleClick}>
                <EditProfilePicContainer />
            </div>
        } else if (this.props.form === "EditComment") {
           return  <div className="modal" onClick={this.handleClick}>
                <EditCommentFormContainer />
            </div>
        } else {
            return null
        }
    }
}

export default Modals;