import React, { Component } from 'react';
import PostIndexItem from '../../profile/posts/post_index_item';
import Inbetween from '../../profile/inbetween';

export default class Feed extends Component {
    componentDidMount(){
        this.props.aqs.map(a => {
            this.props.fetchPosts(a)
            this.props.fetchUser(a)
        })    
        this.props.fetchPosts(this.props.currentUser)
    }
    componentDidUpdate(prevProps){
        if (prevProps !== this.props) {
            this.props.aqs.map(a => {
                if (!this.props.users[a]) {
                this.props.fetchPosts(a)
                this.props.fetchUser(a)
                }
            })    
        }
    }
    render(){
        let { posts, editPost, deletePost, fetchComments, openModal, currentUser } = this.props
        posts.reverse();
        return <div id="feed">
            <Inbetween postUser={this.props.users[this.props.currentUser]}/>
            {posts.map(post => {
                return <PostIndexItem 
                openModal={openModal}
                currentUser={currentUser}
                postUser={this.props.users[post.user_id]}
                fetchComments={fetchComments}
                post={post} 
                deletePost={deletePost}
                editPost={editPost}
                key={post.id}/>
            })}
        </div>
    }
}


