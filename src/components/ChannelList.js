import React from 'react'

class ChannelList extends React.Component {
	render() {
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
									href="nolink">
									# {room.name}
								</a>
							</li>
						)
					})}
				</ul>
			</div>
		)
	}
}

export default ChannelList