import React from 'react';
import Message from './Message';
import ReactDOM from 'react-dom';

class MessageList extends React.Component {

	componentWillUpdate() {
		const node = ReactDOM.findDOMNode(this)
		this.shouldScrollToBottom = node.scrollTop + node.clientHeight + 100 >= node.scrollHeight
	}

	componentDidUpdate() {
		if (this.shouldScrollToBottom) {
			const node = ReactDOM.findDOMNode(this)
			node.scrollToop == node.scrollHeight
		}
	}

	render() {
		if (!this.props.roomId) {
			return (
				<div className="message-list">
					<img className="image" src="jabberJawLogo.png" alt="Jabber Jaw Logo" />
					<div className="join-room">
						&larr; Join a Channel or Create One of your own!
					</div>
				</div>
			)
		}
		return (
			<div className="message-list">
				{this.props.messages.map((message, index) => {
					return (
						<Message key={index} username={message.senderId} text={message.text} />
					)
				})}
			</div>
		)
	}
}


export default MessageList;