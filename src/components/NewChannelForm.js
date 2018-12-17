import React from 'react';

class NewChannelForm extends React.Component {
	constructor() {
		super()
		this.state = {
			roomName: ''
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(e) {
		this.setState({
			roomName: e.target.value
		})
	}

	handleSubmit(e) {
		e.preventDefault()
		this.props.createRoom(this.state.roomName)
		this.setState({ roomName: '' })
	}
	render() {
		return (
			<div className="new-room-form">
				<form onSubmit={this.handleSubmit}>
					<input
						value={this.state.roomName}
						onChange={this.handleChange}
						type="text"
						placeholder="Create a Channel"
						required />
					<button id="create-room-btn" type="submit"><i class="fas fa-plus"></i></button>
				</form>
			</div>

		)
	}
}


export default NewChannelForm;