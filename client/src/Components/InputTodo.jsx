import React, { Fragment, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const InputTodo = () => {
    const [description, setDescription] = useState('');

    const onsubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { description };
            // sending a request for a data
            const response = await fetch('http://localhost:5000/todos', {
                method: 'Post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });
            window.location = "/";
            console.log(response)
        } catch (error) {
            console.error(error.message);
        }
    };

    // const handleInputChange = (e) => {
    //     setDescription(e.target.value);
    // };

    return (
        <Fragment>
            <h1 className="flex justify-center mt-5">Input Todo</h1>
            <Form className="d-flex justify-content-center" onSubmit={onsubmitForm}>
                <Form.Control
                    type="text"
                    className="bg-black border-black text-white rounded-left"
                    placeholder="Enter text..."
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <Button variant="dark" className="rounded-right" type="submit">
                    Add
                </Button>
            </Form>



        </Fragment>
    );
};

export default InputTodo;
