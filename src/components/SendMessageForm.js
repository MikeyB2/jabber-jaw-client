import React from 'react';

class SendMessageForm extends React.Component {
	render() {
		return (
			<div>
				<h1>Send Message Form Component</h1>
				<form className="send-message-form">
					<input
						placeholder="SendMessageForm"
						type="text" />
				</form>
			</div>
		)
	}
}


export default SendMessageForm;