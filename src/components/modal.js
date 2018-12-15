import React from 'react';
import './modal.css';

export class Modal extends React.Component {
	render() {
		return (
			<div className="modal">
				<button id="myBtn">Open Modal</button>

				{/* The Modal  */}
				<div id="myModal" class="modal">

					{/* Modal content */}
					<div class="modal-content">
						<span class="close">&times;</span>
						<p>Some text in the Modal..</p>
					</div>

				</div>
			</div>
		);
	}
};


export default Modal;