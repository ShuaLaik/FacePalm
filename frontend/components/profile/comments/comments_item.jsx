import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CommentsItem extends Component {
    componentDidMount(){
        debugger
        this.props.fetchUser(this.props.comment.user_id)
    }
    handleEdit(commentId){
        this.props.editComment(commentId);
        this.props.openModal("EditComment");
    }

    handleDelete(id){
        this.props.deleteComment(id)
    }
    render() {
        const { comment } = this.props
        const commentAuthor = this.props.users[comment.user_id]
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
                                <h2 className="comment-buttons"
                                onClick={() => this.handleEdit(comment.id)}>Edit</h2>
                                <h2     
                                className="comment-buttons"
                                onClick={() => this.handleDelete(comment.id)}
                                >Delete</h2>
                            </div>
                            <h2 className="time">{comment.created_at}</h2>
                        </div>
                </div>
    }
}
