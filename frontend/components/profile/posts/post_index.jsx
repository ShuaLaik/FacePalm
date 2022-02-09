import React from "react";
import PostIndexItem from "./post_index_item"
import PostCreateFormContainer from "./post_create_form_container"
import Inbetween from "../inbetween"; 


class PostIndex extends React.Component{

    componentDidMount(){
        this.props.fetchPosts(this.props.pageUser.id)
    }
    componentDidUpdate(prevProps){
        if (prevProps.posts === this.props.posts || prevProps.pageUser !== this.props.pageUser) {
            this.props.fetchPosts(this.props.pageUser.id)
        }
    }
    render(){
        let { posts, pageUser, editPost, deletePost, fetchComments, openModal, currentUser } = this.props
        posts.reverse();
        const filteredPosts = posts.filter(post => post.user_id === pageUser.id)
        let postForm = <Inbetween postUser={pageUser} />;
        this.props.currentUser === pageUser.id ? postForm = <Inbetween postUser={pageUser} /> : postForm = <div></div>
        // if (posts.length === 0) {
        //     return <div className="right-container"> 
        //             <h1>No Posts to show!</h1>
        //         </div>
        // }
        return <div className="right-container">
            {postForm}
            {filteredPosts.map((post) => {
                return <PostIndexItem 
                openModal={openModal}
                currentUser={currentUser}
                fetchComments={fetchComments}
                post={post} 
                postUser={pageUser} 
                deletePost={deletePost}
                editPost={editPost}
                key={post.id}/>
            })}
        </div>
    }
}
export default PostIndex