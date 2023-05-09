import React from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ConfirmDelete ({closeModal}) {
  return (
    <div>
      <Modal
        // show={show}
        // onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title>Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Do you want to delete this user?
          {/* {students &&
                  students
                    .filter((students) => students.id)
                    .map((item) => {
                      return (
                        <>
                          <p key={item.id}>
                            Do you want to delete
                            {item.firstName +
                              " " +
                              item.middleName +
                              " " +
                              item.lastName}
                            ?
                          </p>
                          <Button variant="secondary" onClick={handleClose}>
                            Close
                          </Button>
                          <Button
                            variant="danger"
                            onClick={() => handleDelete(item.id)}
                          >
                            Delete
                          </Button>
                        </>
                      );
                    })} */}
          <Button variant="secondary" onClick={() => closeModal(false)}>
            Close
          </Button>
          <Button variant="danger" onClick={() => closeModal(false)}>
            Delete
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ConfirmDelete
