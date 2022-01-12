import React from "react";
import CommentsContainer from "./comments_container"

class PostIndexItem extends React.Component{
    constructor(props){
        super(props)
        this.handleEdit = this.handleEdit.bind(this)
        this.editPostButton = this.editPostButton.bind(this)
    }

    componentDidMount() {
        this.props.fetchComments(this.props.post.id)
    }

    handleEdit(){
        this.props.editPost(this.props.post.id);
        this.props.openModal("EditPost");
    }
    editPostButton(){
        if (this.props.currentUser === this.props.post.user_id) {
            return <ul className="post-right">
                <div className="three-dots"></div>
                <div className="dropdown">
                    <button onClick={this.handleEdit}>Edit Post</button>
                    <button onClick={() => this.props.deletePost(post.id)}>Delete Post</button>
                </div>
            </ul>
        } else {
            return null
        }
    }

    render(){
        const {postUser, post} = this.props
        return <div>
            <div className="post-item">
                <ul id="post-header">
                    <ul id="post-left">
                        <img id="profimg"src={postUser.avatarUrl}/>
                        <ol>
                            <h4>{postUser.first_name} {postUser.lastName}</h4>
                            <h2>{post.created_at}</h2>
                        </ol>
                        
                    </ul>
                    {this.editPostButton()}
                </ul>
                <br />
                <p>{post.body}</p>
            <CommentsContainer postId={post.id} />
            </div>
        </div>
    }
}

export default PostIndexItem;