import React from "react";

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.post
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

    update(form) {
        return e => (
            this.setState({ [form]: e.currentTarget.value })

        )
    }
    handleClose() {
        this.props.closeModal();
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state);
        this.props.closeModal();
    }

    render() {
    return <div className="modal-post-form">
            <ul id="label">
                <h1>Create Post</h1>
                <h2 id="close-window" onClick={this.handleClose}>X</h2>
            </ul>
            <ul id="ul">
                <ul id="header">
                    <img id="profimg" src="https://nypost.com/wp-content/uploads/sites/2/2022/01/the-weeknd-new-album-2.jpg?quality=90&strip=all" />
                    <h4>{this.props.user.first_name}</h4>
                </ul>
                <ul id="post-right">
                    <form onSubmit={this.handleSubmit}>
                        <textarea
                            onChange={this.update("body")}
                            value={this.state.body}
                            placeholder="Write Post..." />
                        <input
                            type="submit"
                            value={this.props.type} />
                    </form>
                </ul>
            </ul>
            <br />
        </div>
    }
}

export default PostForm;