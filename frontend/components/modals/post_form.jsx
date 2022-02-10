import React from "react";

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, this.props.post, {errors: []})
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
        if (this.state.body === ""){
            this.setState({errors: ["Post should not be empty!"]})
        } else {
            this.props.action(this.state);
            this.props.closeModal();
        }
    }

    render() {
        const { user } = this.props
    return <div className="modal-post-form">
            {this.state.errors.map(e => {
                return <h1 id="error">{e}</h1>
            })}
            <ul id="label">
                <h1>Create Post</h1>
                <h2 id="close-window" onClick={this.handleClose}>X</h2>
            </ul>
            <ul id="ul">
                <ul id="header">
                    <img id="profimg" src={user.avatarUrl} />
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