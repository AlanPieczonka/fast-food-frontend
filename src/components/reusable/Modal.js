import React from "react";
import Modal from 'react-modal';

Modal.setAppElement("#root")

export default ({ Component, isOpen, onRequestClose, ...rest }) => {
    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
            <Component {...rest} />
        </Modal>
    )
}