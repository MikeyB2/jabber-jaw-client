import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { fetchProtectedData } from '../actions/protected-data';


import Chatkit from '@pusher/chatkit-client';
import MessageList from './MessageList';
import SendMessageForm from './SendMessageForm';
import ChannelList from './ChannelList';
import NewChannelForm from './NewChannelForm';

import { tokenUrl, instanceLocator } from '../config';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());

        const chatManager = new Chatkit.ChatManager({
            instanceLocator,
            userId: 'tester',
            tokenProvider: new Chatkit.TokenProvider({
                url: tokenUrl
            })
        })
        chatManager.connect()
            .then(currentUser => {
                currentUser.subscribeToRoom({
                    roomId: '19375563',
                    hooks: {
                        onNewMessage: message => {
                            console.log('message.text: ', message.text);
                        }
                    }
                })
            })
    }

    render() {
        return (
            <div className="dashboard">
                <div className="dashboard-username">
                    Username: {this.props.username}
                </div>
                <div className="dashboard-name">Name: {this.props.name}</div>
                <div className="dashboard-protected-data">
                    Protected data: {this.props.protectedData}
                </div>
                <ChannelList />
                <MessageList />
                <SendMessageForm />
                <NewChannelForm />
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
