import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import Chatkit from '@pusher/chatkit-client';
import { tokenUrl, instanceLocator } from '../config';
import { fetchProtectedData } from '../actions/protected-data';
import MessageList from './MessageList';
import SendMessageForm from './SendMessageForm';
import ChannelList from './ChannelList';
import NewChannelForm from './NewChannelForm';

export class Dashboard extends React.Component {

    constructor() {
        super();
        this.state = {
            roomId: null,
            messages: [],
            joinableRooms: [],
            joinedRooms: []
        }
        this.sendMessage = this.sendMessage.bind(this)
        this.subscribeToRoom = this.subscribeToRoom.bind(this)
        this.getRooms = this.getRooms.bind(this)
        this.createRoom = this.createRoom.bind(this)
    }

    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
        const username = localStorage.getItem('username')
        const chatManager = new Chatkit.ChatManager({
            instanceLocator,
            userId: username,
            tokenProvider: new Chatkit.TokenProvider({
                url: tokenUrl
            })
        })


        chatManager.connect()
            .then(currentUser => {
                this.currentUser = currentUser
                this.getRooms()
                console.log('Successful connection')
            })
            .catch(err => {
                console.log('Error on connection', err)
            })
    }

    getRooms() {
        this.currentUser.getJoinableRooms()
            .then(joinableRooms => {
                this.setState({
                    joinableRooms,
                    joinedRooms: this.currentUser.rooms
                })
            })
            .catch(err => console.log('error on joinableRooms: ', err))
    }

    sendMessage(text) {
        this.currentUser.sendMessage({
            text,
            roomId: this.state.roomId,
            className: "currentUser",
        })
    }

    subscribeToRoom(roomId) {
        this.setState({ messages: [] })
        this.currentUser.subscribeToRoom({
            roomId: roomId,
            hooks: {
                onMessage: message => {
                    this.setState({
                        messages: [...this.state.messages, message]
                    })
                }
            }
        })
            .then(room => {
                this.setState({
                    roomId: room.id
                })
                this.getRooms()
            })
            .catch(err => console.log('error on subscribing to channel: ', err))
    }

    createRoom(name) {
        this.currentUser.createRoom({
            name
        })
            .then(room => this.subscribeToRoom(room.id))
            .catch(err => console.log('error on createRoom: ', err))
    }

    render() {
        return (
            <div className="dashboard">
                <ChannelList
                    roomId={this.state.roomId}
                    subscribeToRoom={this.subscribeToRoom}
                    rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]} />
                <MessageList
                    messages={this.state.messages}
                    roomId={this.state.roomId}
                    className={this.state.className} />
                <SendMessageForm sendMessage={this.sendMessage} />
                <NewChannelForm createRoom={this.createRoom} />

            </div>
        );
    }
}

const mapStateToProps = state => {
    const { currentUser } = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        protectedData: state.protectedData.data

    };

};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));


{/* <div className="dashboard-username">
                    Username: {this.props.username}
                </div>
                <div className="dashboard-name">Name: {this.props.name}</div>
                <div className="dashboard-protected-data">
                    Protected data: {this.props.protectedData}
                </div> */}