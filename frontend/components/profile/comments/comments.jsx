import React from "react";
import { Link } from "react-router-dom";
import CommentsItem from "./comments_item";

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
    }
    change(form){
        return e => this.setState({[form]: e.currentTarget.value})
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
        // this.props.comments.map(comment => {
        //     if (!users[comment.user_id]) {
        //         return this.props.fetchUser(comment.user_id)
        //     }
        // })
        if (!filteredComments) return null;
        if (this.state.showing) {
        return <div className="comment-section">
            <h2 onClick={() => this.handleSwitch()}className="comment-buttons show-button" >Show Less</h2>
            {filteredComments.map(comment => {
                return <CommentsItem 
                key={comment.id}
                comment={comment} 
                deleteComment={this.props.deleteComment}
                openModal={this.props.openModal}
                editComment={this.props.editComment}
                currentUser={this.props.currentUser}
                users={this.props.users}
                fetchUser={this.props.fetchUser}
                />
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