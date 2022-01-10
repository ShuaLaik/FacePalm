import React from "react";

class PostForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            body: this.props.post.body,
            user_id: this.props.post.user_id,
            visible: "invisible"
        }
        this.props.post;
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
    }

    update(form){
        return e => (
            this.setState({ [form]: e.currentTarget.value})
            
        )
    }
    handleSelect(form){
        return e => (
            this.setState({ visible: "" })

        )
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.action(this.state);
        
    }

    render(){
        
        // debugger;
        const { postUser } = this.props
        return <div className="post-item">
            <ul>
                <ul id="post-left">
                    <img id="profimg" src="https://nypost.com/wp-content/uploads/sites/2/2022/01/the-weeknd-new-album-2.jpg?quality=90&strip=all" />
                </ul>
                <ul id="post-right">
            <form onSubmit={this.handleSubmit}>
                <textarea 
                onChange={this.update("body")} 
                value={this.state.body} 
                onSelect={this.handleSelect()}
                placeholder="Write Post..."/>
                <input className={this.state.visible} 
                type="submit" 
                value={this.props.formType}/>
            </form>

                </ul>
            </ul>
            <br />
        </div>
    }
}

export default PostForm;