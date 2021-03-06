import React from 'react';

class SendMessageForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			message: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		// console.log(e.target.value);
		this.setState({
			message: e.target.value
		})
		// if (this.props.onChange) {
		// 	this.props.handleChange()
		// }
	}

	handleSubmit(e) {
		e.preventDefault();
		// send message
		this.props.sendMessage(this.state.message)
		this.setState({
			message: ''
		})
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit} className="send-message-form">
				<input
					onChange={this.handleChange}
					value={this.state.message}
					placeholder="Type your message and hit enter"
					type="text" />
				{/* <button id="" type="submit"><i class="fas fa-share-square"></i></button> */}
			</form>
		)
	}
}


export default SendMessageForm;