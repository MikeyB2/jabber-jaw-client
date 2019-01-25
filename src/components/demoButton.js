import React from 'react';
import { login } from '../actions/auth';
import { connect } from 'react-redux';

class DemoButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        // this.handleClick2 = this.handleClick2.bind(this);

    }
    handleClick() {
        const demoUser = {
            username: 'demoUser',
            password: 'Password12',
        }
        return this.props.dispatch(login(demoUser.username, demoUser.password));
    };

    // handleClick2() {

    //     const demoUser2 = {
    //         username: 'Testuser',
    //         password: 'Testuser12',
    //     }
    //     return this.props.dispatch(login(demoUser2.username, demoUser2.password));
    // };


    render() {
        return (
            <div>
                <button className="button" onClick={this.handleClick}>
                    DEMO
            </button>
            </div>
        );
    }

}
const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(DemoButton);