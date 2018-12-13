import React from 'react';

const DUMMY_DATA = [
	{
		senderId: 'user1',
		text: 'Hey, how is it going?'
	},
	{
		senderId: 'user2',
		text: 'Great! How about you?'
	},
	{
		senderId: 'user1',
		text: 'That is good to hear!  I am doing well as well!'
	},
]

class MessageList extends React.Component {
	render() {
		return (
			<div className="message-list">
				{DUMMY_DATA.map((message, index) => {
					return (
						<div key={index} className="message">
							<div className="message-username">{message.senderId}</div>
							<div className="message-text">{message.text}</div>
						</div>

					)
				})}
			</div>
		)
	}
}


export default MessageList;