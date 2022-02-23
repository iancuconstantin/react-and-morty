import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';



function LocationModal({show,onHide,name,type,dimension,residents}) {
    return (
        <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="d-flex justify-content-center"
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            {name}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4>{name} about: </h4>
            <p>Type: {type}</p>
            <p>Dimension: {dimension}</p>
            <p>Residents: {residents}</p>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
        </Modal>
    );
}

export default LocationModal;