import React, { Component } from 'react';

export default class Button extends Component {
    constructor(props){
        super(props)
        this.buttonCheck = this.buttonCheck.bind(this)
        this.handleSendRequest = this.handleSendRequest.bind(this)
        this.handleRevokeRequest = this.handleRevokeRequest.bind(this)
        this.handleAcceptRequest = this.handleAcceptRequest.bind(this)
        this.handleDeleteAcquaintance = this.handleDeleteAcquaintance.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            type: "Acquaintance",
            action: this.handleSendRequest,
            argument: null
        }
        // this.buttonCheck()
    }
    componentDidMount(){
        this.buttonCheck()
    }
    componentDidUpdate(prevProps){
        if (prevProps.pageUser !== this.props.pageUser){
            this.buttonCheck()
        }
    }
    handleSendRequest(){
        const { currentUser, pageUser} = this.props;
        debugger
        this.props.createNotification({
            user_id: pageUser.id,
            notifier_id: currentUser,
            notif_type: "sent an Acquaintance Request!"
        })
    }
    handleRevokeRequest(notif){
        this.props.deleteNotification(notif.id)
    }
    handleAcceptRequest(notif){
        const { currentUser, pageUser} = this.props;
        this.props.deleteNotification(notif.id)
        this.props.addAcquaintance({
            user_id: currentUser,
            aq_id: pageUser.id
        })
    }
    handleDeleteAcquaintance(){
        this.props.deleteAcquaintance({
            user_id: this.props.currentUser, 
            aq_id: this.props.pageUser.id
        })
    }
    buttonCheck(){
        const { currentUser, pageUser} = this.props;
        let change = false;
        if (currentUser === pageUser.id) {
            change = true
            this.setState({ 
                type: "Edit User",
                action: () => this.props.modal("EditUser"), 
                argument: null
            })
            
        } else if (this.props.acqs.includes(pageUser.id)) {
            change = true
            this.setState({
                type: "Remove Acquaintance", 
                action: () => this.handleDeleteAcquaintance(), 
                argument: null
            })
        } else {
            const pn = Object.values(this.props.pendingNotifications)
            const n = Object.values(this.props.notifications)
            pn.map(pnotif => {
                if (pnotif.notifier_id === currentUser && pnotif.user_id === pageUser.id){
                    change = true
                    this.setState({
                        type: "Revoke Request",
                        action: () => this.handleRevokeRequest(),
                        argument: pnotif     
                    })
                    
                }
            })
            n.map(notif => {
                if (notif.user_id === currentUser && notif.notifier_id === pageUser.id){
                    change = true
                    this.setState({
                        type: "Accept Request",
                        action:  () => this.handleAcceptRequest(),
                        argument: notif
                    })
                }
            })
        }
        if (change === false){
            this.setState({
                type: "Acquaintance",
                action: this.handleSendRequest,
                argument: null
            })
        }
    }
    handleClick(){
        this.state.action(this.state.argument)
            .then(this.buttonCheck())
    }
    render() {
        return <button onClick={() => this.handleClick()} id="editbutton">{this.state.type}</button>;
    }
}
