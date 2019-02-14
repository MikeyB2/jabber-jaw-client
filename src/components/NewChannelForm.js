import React from 'react';

class NewChannelForm extends React.Component {
	constructor() {
		super()
		this.state = {
			roomName: '',
			private: false
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handlePrivate = this.handlePrivate.bind(this)
	}

	handleChange(e) {
		this.setState({
			roomName: e.target.value
		})
	}

	handlePrivate(e) {
		if (e.target.value === "true") {
			this.setState({
				private: true
			})
		}
		else {
			this.setState({
				private: false
			})
		}
	}

	handleSubmit(e) {
		e.preventDefault()
		this.props.createRoom(this.state.roomName, this.state.private)
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
						placeholder="Enter Channel Name"
						required />
					<div className="private"><strong>Private Room</strong></div>
					<input onClick={this.handlePrivate} type="radio" name="private" id="radioTrue" value="true" className="radio" required />
					<label htmlFor="radioTrue">Yes</label>
					<input onClick={this.handlePrivate} type="radio" name="private" id="radioFalse" value="false" className="radio" required />
					<label htmlFor="radioFalse" checked>No</label>
					<button id="create-room-btn" type="submit"><i className="fas fa-plus"></i></button>
				</form>
			</div>

		)
	}
}


export default NewChannelForm;