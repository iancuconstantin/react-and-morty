import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "../Styles/CharacterModal.css";



function CharacterModal({show,onHide,img,name,gender,species,status,origin,location}) {
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
                <img 
                id="modalImg"
                className="mb-4"
                src={img} 
                alt = "img" 
                style={{ height: '300px', width: '227,82px' }}
                />
                <p>Gender: {gender}</p>
                <p>Species: {species}</p>
                <p>Status: {status}</p>
                <p>Origin: {origin}</p>
                <p>Location: {location}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CharacterModal;