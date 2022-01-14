import React from "react";
import { Link } from "react-router-dom";

class Comments extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            body: "",
            user_id: this.props.currentUser.id,
            post_id: this.props.postId
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    change(form){
        return e => this.setState({[form]: e.currentTarget.value})
    }

    handleDelete(){
        return 
    }
    handleEdit(){

    }
    handleSubmit(e){
        e.preventDefault()
        this.props.createComment(this.state)
        this.setState({body:""})
    }
    render(){
        let { comments, users, deleteComment} = this.props 
        const filteredComments = comments.filter(comment => comment.post_id === this.props.postId )
        this.props.comments.map(comment => {
            if (!users[comment.user_id]) {
                return this.props.fetchUser(comment.user_id)
            }
        })
        if (!filteredComments) return null;
        return <div className="comment-section">

            {filteredComments.map(comment => {
                const commentAuthor = users[comment.user_id];
                if (!commentAuthor) return null;
                return <div key={comment.id} className="full-comment">
                    <div className="inbetween"> 
                        <div className="comment">
                            <img src={commentAuthor.avatarUrl} />
                            <div className="names">
                                <ul>
                                    <ol>
                                        <Link to={`/profile/${commentAuthor.id}`}>{commentAuthor.first_name} {commentAuthor.last_name}</Link>
                                    </ol>
                                </ul>
                                <p>{comment.body}</p>
                            </div>
                            </div> 
                                <div id="comment-buttons-div">
                                    <h2 className="comment-buttons">Edit</h2>
                                    <h2     
                                    className="comment-buttons"
                                    >Delete</h2>
                                </div>
                                <h2 className="time">{comment.created_at}</h2>
                        </div>
                    </div>

            })}
            <div id="comment-form">
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Leave a comment..."
                        value={this.state.body}
                        onChange={this.change("body")}
                    />
                </form>
            </div>
        </div>

    }
}

export default Comments;