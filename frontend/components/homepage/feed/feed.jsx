import React, { Component } from 'react';
import PostIndexItem from '../../profile/posts/post_index_item';
import Inbetween from '../../profile/inbetween';
import { Link } from 'react-router-dom';
import AcquaintancesFeedContainer from '../../profile/acquaintances/acquaintances_feed_container';

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
        const user = this.props.users[currentUser]
        posts.reverse();
        return <div id="feed-container">
            <ul className="abcde">
                <Link className="a" to={`/profile/${user.id}`} >
                    <img id="banner-img" src={user.avatarUrl} />
                    <h1 className="banner-text">{user.first_name} {user.last_name}</h1>
                </Link>
                <Link className="a" to="https://github.com/ShuaLaik" target="_blank">
                    <img className="logos"src={window.githublogoURL}/>
                    <h1 className="banner-text">GitHub</h1>
                </Link>
                <Link className="a" to="https://www.linkedin.com/in/joshualaikowski/" target="_blank">
                    <img className="logos" src={window.linkedinlogoURL}/>
                    <h1 className="banner-text">LinkedIn</h1>
                </Link>
                <Link className="a" to="https://angel.co/u/joshua-laikowski" target="_blank">
                    <img className="logos" src={window.angellogoURL}/>
                    <h1 className="banner-text">Angel List</h1>
                </Link>
            </ul>
            <div id="feed">
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
            <AcquaintancesFeedContainer />
        </div>
    }
}


