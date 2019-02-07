import React from 'react'
import WhosOnlineList from './WhosOnlineList'

class ChannelList extends React.Component {


	render() {

		console.log('Channel users: ', this.props)
		const orderedRooms = [...this.props.rooms].sort((a, b) => a.id - b.id)
		return (
			<div className="rooms-list">
				<h3>Choose Your Channel</h3>
				<hr></hr>
				<ul className="channel-list">
					{orderedRooms.map(room => {
						const active = this.props.roomId === room.id ? "active" : "";
						return (
							<li key={room.id} className={"room " + active}>

								<a
									onClick={() => this.props.subscribeToRoom(room.id)}
									href="#">
									# {room.name}
								</a>
							</li>

						)
					})}
				</ul>
				<hr></hr>
				<h2>Whos online</h2>
				<WhosOnlineList
					currentUser={this.props.currentUser}
				// users={this.props.currentRoom.users}
				/>
			</div>
		)
	}
}

export default ChannelList