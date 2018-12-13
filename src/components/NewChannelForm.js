import React from 'react';

class NewChannelForm extends React.Component {
	render() {
		return (
			<div className="new-room-form">
				<h1>New Channel From Component</h1>
				<form>
					<input
						type="text"
						placeholder="NewRoomForm"
						required />
					<button id="create-room-btn" type="submit">+</button>
				</form>
			</div>

		)
	}
}


export default NewChannelForm;