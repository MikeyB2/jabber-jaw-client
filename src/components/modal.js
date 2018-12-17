import React from 'react';
import './modal.css';

export class Modal extends React.Component {
	render() {
		return (
			<div>test</div>
			// <div>
			// 	<div className="modal-overlay-div" style={overlayStyle} />
			// 	<div className="modal-content-div" style={contentStyle} onClick={this.onOverlayClick.bind(this)}>
			// 		<div className="modal-dialog-div" style={dialogStyle} onClick={this.onDialogClick}>
			// 			{this.props.children}
			// 		</div>
			// 	</div>
			// </div>
		);
	}
};


export default Modal;