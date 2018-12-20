import React from 'react';
import { login } from '../actions/auth';
import { connect } from 'react-redux';

class DemoButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

    }



    handleClick() {
        const demoUser = {
            username: 'demoUser',
            password: '1234567890',
        }
        console.log(demoUser);
        return this.props.dispatch(login(demoUser.username, demoUser.password));
    };


    render() {
        return (
            <button className="button" onClick={this.handleClick}>
                DEMO
            </button>
        );
    }

}
const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(DemoButton);