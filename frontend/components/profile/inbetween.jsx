import PostCreatFormContainer from "./posts/post_create_form_container";
import React from "react";

class Inbetween extends React.Component{
    render(){
        return <PostCreatFormContainer postUser={this.props.postUser} />
    }
}

export default Inbetween;