import React from "react";
import { Link } from "react-router-dom";

class Comments extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            body: "",
            showing: false,
            user_id: this.props.currentUser.id,
            post_id: this.props.postId
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleSwitch = this.handleSwitch.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
    }
    change(form){
        return e => this.setState({[form]: e.currentTarget.value})
    }
    handleEdit(commentId){
        this.props.editComment(commentId);
        this.props.openModal("EditComment");
    }

    handleDelete(id){
        this.props.deleteComment(id)
    }
    handleSwitch(){
        this.state.showing === false ? this.setState({showing: true}) : this.setState({showing: false})
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.createComment(this.state)
        this.setState({body:""})
        this.setState({showing: true})
    }
    render(){
        let { comments, users } = this.props 
        const filteredComments = comments.filter(comment => comment.post_id === this.props.postId )
        this.props.comments.map(comment => {
            if (!users[comment.user_id]) {
                return this.props.fetchUser(comment.user_id)
            }
        })
        if (!filteredComments) return null;
        if (this.state.showing) {
        return <div className="comment-section">
            <h2 onClick={() => this.handleSwitch()}className="comment-buttons show-button" >Show Less</h2>
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
        }else {
            return <div className="comment-section">
                {filteredComments.length != 0 ? <h2 onClick={() => this.handleSwitch()}className="comment-buttons show-button">{filteredComments.length} Comments</h2> : null}
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

}

export default Comments;