import React from 'react'
import { Modal } from 'react-bootstrap'

const DataModal = (props: any) => {
  const { submittedData } = props;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Your Data
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Name: {submittedData?.name}</p>
        <p>Gender: {submittedData?.gender}</p>
        <p>Date of Birth: {submittedData?.dob}</p>
        <p>Email: {submittedData?.email}</p>
        <p>Phone: {submittedData?.phone}</p>
        <p>Address: {submittedData?.address}</p>
      </Modal.Body>
    </Modal>
  )
}

export default DataModal
