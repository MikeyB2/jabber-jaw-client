import React from 'react';

class ChannelList extends React.Component {
	render() {
		console.log('Rooms: ', this.props.rooms)
		return (
			<div className="rooms-list">
				<ul>
					<h3 className="help-text">Channels</h3>
					{this.props.rooms.map(room => {
						return (
							<li key={room.id} className="room">
								<a
									onClick={() => this.props.subscribeToRoom(room.id)}
									href="#"># {room.name}</a>
							</li>
						)
					})}
				</ul>
			</div>
		)
	}
}


export default ChannelList;