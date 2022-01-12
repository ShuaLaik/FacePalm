import React from "react";

class EditUserModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.user;
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

    update(form) {
        return e => (
            this.setState({ [form]: e.currentTarget.value })

        )
    }
    handleSelect(form) {
        return e => (
            this.setState({ visible: "" })

        )
    }
    handleClose() {
        this.props.closeModal();
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.updateUser(this.state);
        this.props.closeModal(); 

    }

    render() {
        let dis = "";
        { this.state.email === "user@example.com" ? dis = "disabled" : dis = "" }
        return <div className="modal-post-form">
            <ul id="label">
                <h1>Update Info</h1>
                <h2 id="close-window" onClick={this.handleClose}>X</h2>
            </ul>
            <form onSubmit={this.handleSubmit} id="tdf">
                <div id="modal-edit">
                <ul id="editinfo">
                    <label>
                        <h3>First name:</h3>
                        <input
                            type="text"
                            placeholder="First Name"
                            value={this.state.first_name}
                            onChange={this.update("first_name")}
                            disabled={dis}
                        />
                    </label>
                    <label>
                    <h3>Last name:</h3>
                        <input
                            type="text"
                            placeholder="Last Name"
                            value={this.state.last_name}
                            onChange={this.update("last_name")}
                            disabled={dis}
                            
                        />
                    </label>
                    <label>
                <h3>Email</h3>
                        <input
                            type="text"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.update("email")}
                            disabled={dis}
                        />
                    </label>
                    <label>
                    <h3>Favorite Color:</h3>
                        <input
                            type="text"
                            placeholder="Favorite Color"
                            value={this.state.favorite_color}
                            onChange={this.update("favorite_color")}
                        />
                    </label>
                <label>
                    <h3>Birthday:</h3>
                    <input
                        type="date"
                        value={this.state.birthday}
                        onChange={this.update("birthday")}
                    />
                </label>
            </ul>
            <ul>
                <h3>Bio:</h3>
                <textarea
                placeholder="Write Bio Here..."
                value={this.state.bio}
                onChange={this.update("bio")}
                />
            </ul>
                </div>
                <button value="submit">Update Profile</button>
            </form>
        </div>
    }
}

export default EditUserModal;
