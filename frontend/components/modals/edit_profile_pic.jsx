import React from "react";

class EditProfilePic extends React.Component{
    constructor(props){
        super(props)
        this.state={
            photoFile: this.props.user.avaterUrl,
            photoUrl: this.props.user.avatarUrl
        }
        this.handleClose = this.handleClose.bind(this)
        this.handleFile = this.handleFile.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleFile(e){
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = function () {
            this.setState({photoFile: file, photoUrl: fileReader.result})
        }.bind(this)
        if (file){
            fileReader.readAsDataURL(file);
        }
    }
    handleClose() {
        this.props.closeModal();
    }
    handleSubmit(e){
        e.preventDefault();
        
        let formData = new FormData();
        formData.append("user[avatar]", this.state.photoFile)
        formData.append("user[bio]", this.props.user.bio)
        formData.append("user[birthday]", this.props.user.birthday)
        formData.append("user[email]", this.props.user.email)
        formData.append("user[favorite_color]", this.props.user.favorite_color)
        formData.append("user[first_name]", this.props.user.first_name)
        formData.append("user[last_name]", this.props.user.last_name)
        formData.append("user[id]", this.props.user.id)
        this.props.updateUserPhoto(formData, this.props.user.id)
        this.props.closeModal();
    }
    render(){
        const photo = this.state.photoUrl
        return <div className="modal-post-form">
            <ul id="label">
                <h1>Profile Photo</h1>
                <h2 id="close-window" onClick={this.handleClose}>X</h2>
            </ul>
            <form onSubmit={this.handleSubmit} id="photo-form">
                <img src={photo} id="photo-preview"/>
                <input type="file" onChange={this.handleFile}/>
                <button>submit</button>
            </form>
        </div>
    }

}


export default EditProfilePic;