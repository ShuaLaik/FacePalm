import React from "react";
import EditUserFormContainer from "./edit_user_modal_container";
import CreatePostFormContainer from "./create_post_form_container";
import EditPostFormContainer from "./edit_post_form_container";
import EditProfilePicContainer from "./edit_profile_pic_container"
class Modals extends React.Component {

    render(){
        if (this.props.form === "CreatePost"){
            return <div className="modal">
                <CreatePostFormContainer />
                  </div>
        } else if (this.props.form === "EditUser") {
            return <div className="modal">
                <EditUserFormContainer />
            </div>
        } else if (this.props.form === "EditPost") {
            return <div className="modal">  
                <EditPostFormContainer />
            </div>
        } else if (this.props.form === "EditProiflePic") {
           return  <div className="modal">
                <EditProfilePicContainer />
            </div>
        } else {
            return null
        }
    }
}

export default Modals;