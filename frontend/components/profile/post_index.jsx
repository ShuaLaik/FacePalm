import React from "react";
import PostIndexItem from "./post_index_item"
import PostCreateFormContainer from "./post_create_form_container"
import Inbetween from "./inbetween";

class PostIndex extends React.Component{

    componentDidMount(){
        this.props.fetchPosts(this.props.pageUser.id)
    }
    componentDidUpdate(prevProps){
        if (prevProps.posts === this.props.posts) {
            this.props.fetchPosts(this.props.pageUser.id)
        }
    }
    render(){
        let { posts, pageUser, editPost, deletePost } = this.props
        posts.reverse();
        let postForm = <Inbetween postUser={pageUser} />;
        this.props.currentUser === pageUser.id ? postForm = <Inbetween postUser={pageUser} /> : postForm = <div></div>
        // if (posts.length === 0) {
        //     return <div className="right-container"> 
        //             <h1>No Posts to show!</h1>
        //         </div>
        // }
        return <div className="right-container">
            {postForm}
            {posts.map((post) => {
                return <PostIndexItem 
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