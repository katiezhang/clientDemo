import React from 'react';
import Modal from 'react-bootstrap'

export default class DeleteModalBody extends React.Component {
    render() {
        return (
            <Modal.Body>
                Are you sure to delete this user?
            </Modal.Body>
        )
    }
}

