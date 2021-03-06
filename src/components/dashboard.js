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
            joinedRooms: [],
            currentUser: {},
            currentRoom: {},
            usersWhoAreTyping: [],
        }
        this.sendMessage = this.sendMessage.bind(this)
        this.subscribeToRoom = this.subscribeToRoom.bind(this)
        this.getRooms = this.getRooms.bind(this)
        this.createRoom = this.createRoom.bind(this)
        this.sendTypingEvent = this.sendTypingEvent.bind(this)
    }

    sendTypingEvent() {
        console.log("typing event");
        // this.state.currentUser
        //     .isTypingIn({ roomId: this.state.currentRoom.id })
        //     .catch(error => console.error('error', error))
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
                // console.log('Currentuser: ', currentUser.presenceStore.store)
                this.currentUser = currentUser
                this.setState({ currentUser })
                // TODO: show users online 

                // onPresenceChange: () => this.forceUpdate(),
                // onUserJoined: () => this.forceUpdate(),
                // console.log("current user logger: ", this.currentUser);
                this.getRooms()
                console.log('Successful connection')
                return currentUser.subscribeToRoom({
                    roomId: '19376565',
                    messageLimit: 100,
                })
            })
            .then(currentRoom => {
                this.setState({ currentRoom })
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
        this.state.currentUser.sendMessage({
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
                },
                onUserStartedTyping: user => {
                    this.setState({
                        usersWhoAreTyping: [...this.state.usersWhoAreTyping, user.name],
                    })
                },
                onUserStoppedTyping: user => {
                    this.setState({
                        usersWhoAreTyping: this.state.usersWhoAreTyping.filter(
                            username => username !== user.name
                        ),
                    })
                },
                onPresenceChange: () => this.forceUpdate(),
                onUserJoined: () => this.forceUpdate(),
            }
        })
            .then(currentRoom => {
                this.setState({
                    currentRoom,
                    roomId: currentRoom.id
                })
                this.getRooms()
            })

            .catch(err => console.log('error on subscribing to channel: ', err))
    }
    // createRoom(name, isPrivate)
    createRoom(name, isPrivate) {
        this.currentUser.createRoom({
            name,
            private: isPrivate
        })
            .then(room => this.subscribeToRoom(room.id))
            .catch(err => console.log('error on createRoom: ', err))
    }



    render() {

        console.log('This: ', this)
        console.log('this.state: ', this.state)
        console.log('this.state.currentRoom: ', this.state.currentRoom)
        console.log('this.state.currentUser.presenceStore: ', this.state.currentUser.presenceStore);
        // console.log('GETTER: ', aUser);

        return (
            <div className="dashboard">
                <ChannelList
                    roomId={this.state.roomId}
                    subscribeToRoom={this.subscribeToRoom}
                    rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]}
                    currentUser={this.state.currentUser}
                    users={this.state.currentUser.users}
                />
                <MessageList
                    messages={this.state.messages}
                    roomId={this.state.roomId}
                    className={this.state.className} />
                <SendMessageForm
                    sendMessage={this.sendMessage}
                    onChange={this.sendTypingEvent} />
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
