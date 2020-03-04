import React from "react";
import Modal from 'react-modal';

Modal.setAppElement("#root")

export default function CustomModal({ Component, isOpen, onRequestClose, ...rest }) {
    return (
        <React.Fragment>
            <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
                <Component {...rest} />
            </Modal>
        </React.Fragment>
    )
}