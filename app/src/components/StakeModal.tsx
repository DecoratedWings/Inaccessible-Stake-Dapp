import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export interface policyModal {
    show: boolean;
    setShow: any;
    content:string;
    title:string;
}
function StakeModal(props:policyModal) {

  const handleClose = () => props.setShow(false);
  const handleShow = () => props.setShow(true);

  return (
    <>
      <Modal 
          backdrop="static"
          keyboard={false}
      centered show={props.show} onHide={handleClose} size="xl">
        <Modal.Header className="bg-dark text-white">
          <Modal.Title >{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-white">{props.content}</Modal.Body>
        <Modal.Footer className="bg-dark text-white">
          <Button variant="primary" onClick={handleClose}  >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default StakeModal;