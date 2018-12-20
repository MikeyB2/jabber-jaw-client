import React from 'react';
import HeaderBar from './header-bar';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import DeomButton from './demoButton';

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard

    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div>
            <HeaderBar />
            <div className="home">
                <div id="about">
                    <h2>What is Jabber Jaw?</h2>
                    <p>Jabber Jaw is a Messaging app that lets you create your own channel/room.</p>
                    <p>You can talk with friends or talk with people that are in the same channel as you.</p>
                    <p>Making it easier for you to keep intouch with friends and family whenever or wherever you can.</p>
                    <p>It is very simple to use.  You just have click/subscribe to a channel.</p>
                    <p>Or you can create your own channel and chat with people in your channel.</p>
                    <p>If you type in the message bar and hit enter it will send a message to the channel that everyone that is part of the channel will be able to read.</p>
                </div>
                <div id="demo">
                    <h2>Want to Demo Jabber Jaw?</h2>
                    <p>Click the Demo Button below to try Jabber Jaw.</p>
                    <p>After you click the DEMO button please open another browser in another window.  </p>
                    <p>Either a different browser from the one you are currently using or use chrome incognito mode.</p>
                    <p>Then use the below Username and Password to login as another user to see how you can interact with other users.</p>
                    <DeomButton />
                    <p><strong>Username:</strong> Testuser</p>
                    <p><strong>Password:</strong> 1234567890</p>

                </div>
            </div >
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
