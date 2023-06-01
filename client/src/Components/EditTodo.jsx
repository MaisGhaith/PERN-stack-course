import React, { Fragment, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';

const EditTodo = ({ todo }) => {
    const [showModal, setShowModal] = useState(false);
    const [description, setDescription] = useState(todo?.description || ''); // Provide a default value for description

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);


    // edit  description function
    const updateDescription = async (e) => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
                method: 'PUT',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })
            console.log(response)
            window.location = '/'
        } catch (error) {

        }
    }


    return (
        <Fragment>
            <Button className='btn btn-warning' variant="info" size="md" onClick={handleShowModal}>
                Edit
            </Button>
            <Modal show={showModal} onHide={handleCloseModal}
                onClick={() => setDescription(todo.description)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Todo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        type="text"
                        className='form-control'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button className='btn btn-warning ' variant="default" onClick={e => updateDescription(e)}>
                        Edit
                    </Button>
                    <Button className='btn btn-danger' variant="default" onClick={() => { handleCloseModal(); setDescription(todo.description); }}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </Fragment>
    );
};

export default EditTodo;
