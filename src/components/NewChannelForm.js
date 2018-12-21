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
		console.log(this.state);
	}

	handlePrivate(e) {
		this.setState({
			private: e.target.value
		})
		console.log(this.state);
	}

	handleSubmit(e) {
		e.preventDefault()
		console.log('is the room private: ', this.state.private)
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
					{/* <label>Private Room</label>
					<input onClick={this.handlePrivate} type="radio" name="private" id="radioTrue" value="true" className="radio" />
					<label htmlFor="radioTrue">Yes</label>
					<input onClick={this.handlePrivate} type="radio" name="private" id="radioFalse" value="false" className="radio" />
					<label htmlFor="radioFalse" checked>No</label> */}
					<button id="create-room-btn" type="submit"><i className="fas fa-plus"></i></button>
				</form>
			</div>

		)
	}
}


export default NewChannelForm;