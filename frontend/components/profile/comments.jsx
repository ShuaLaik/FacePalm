import React from "react";
import { Link } from "react-router-dom";

class Comments extends React.Component {

    render(){
        let { comments, users} = this.props 
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
                return <div className="full-comment">
                    <div className="comment">
                        <img src="https://nypost.com/wp-content/uploads/sites/2/2022/01/the-weeknd-new-album-2.jpg?quality=90&strip=all" />
                    <div className="names">
                    <ul >
                        <ol>
                            <Link to={`/profile/${commentAuthor.id}`}>{commentAuthor.first_name} {commentAuthor.lastName}</Link>
                        </ol>
                    </ul>
                    <p>{comment.body}</p>
                    </div>
                </div> 
                    <h2 className="time">{comment.created_at}</h2>
                </div>

            })}
        </div>
    }
}

export default Comments;