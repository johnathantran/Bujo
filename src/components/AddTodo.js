import React, { Component } from 'react'
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    submitTask = () => {
        console.log("submitting task");

    }

    render() {
        return (
            <form onSubmit={this.onSubmit} id="addTodoForm">
                
                    <input
                        type="text"
                        name="title"
                        placeholder=" Add Todo ..."
                        id="addTodo"
                        value={this.state.title}
                        onChange={this.onChange}
                    />

                    <div id="addTodoFormInnerContainer">
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Control className="selectItemType" as="select" custom>
                                <option>Task</option>
                                <option>Note</option>
                                <option>Event</option>
                                <option>Priority</option>
                                <option>Inspiration</option>
                            </Form.Control>
                            <Button variant="warning" className="submitBtn" type="submit"> Add +</Button>{' '}
                        </Form.Group>
                    </div>

                {/*
                <DropdownButton variant="warning" id="dropdown-basic-button" id="selectItemType" title="Submit As">
                <Dropdown.Item as="button" onClick={this.submitTask()}>Task</Dropdown.Item>
                <Dropdown.Item as="button" type="submit">Note</Dropdown.Item>
                <Dropdown.Item as="button" type="submit">Event</Dropdown.Item>
                <Dropdown.Item as="button" type="submit">Priority</Dropdown.Item>
                <Dropdown.Item as="button" type="submit">Inspiration</Dropdown.Item>
                </DropdownButton>
                */}
                
                
              
            </form>
        )
    }
}

// PropTypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo
