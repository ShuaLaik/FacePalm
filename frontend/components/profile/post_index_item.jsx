import React from "react";
class PostIndexItem extends React.Component{
    render(){
        const {postUser, post} = this.props
        debugger
        return <div className="post-item">
            <ul>
                <ul id="post-left">
                    <img id="profimg"src="https://nypost.com/wp-content/uploads/sites/2/2022/01/the-weeknd-new-album-2.jpg?quality=90&strip=all"/>
                    <ol>
                        <h4>{postUser.first_name} {postUser.lastName}</h4>
                        <h2>{post.created_at}</h2>
                    </ol>
                </ul>
                <ul id="post-right">

                </ul>
            </ul>
            <br />
            <p>{post.body}</p>
        </div>
    }
}

export default PostIndexItem;