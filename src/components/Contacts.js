import React, {Component} from 'react'
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


import axios from 'axios'


export default class Contacts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: "",
            validated: false
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleCommentChange = this.handleCommentChange.bind(this);
        this.submitButtonClick = this.submitButtonClick.bind(this)

    }

    handleNameChange(event) {
        this.setState({
            name: event.target.value
        });
    }

    handleEmailChange(event) {
        this.setState({
            email: event.target.value
        });
    }

    handleCommentChange(event) {
        this.setState({
            message: event.target.value
        });
    }


    submitButtonClick(event) {
        let validated = event.target.checkValidity();
        event.preventDefault();


        if (validated) {

            let comment = {
                name: this.state.name,
                email: this.state.email,
                comment: this.state.message
            };

            axios.post('/comment', comment)
                .then(function (response) {
                    console.log('A comment was submitted: ' +  comment);
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });

            this.setState({validated: true});
        } else {
            console.log('Nothing was submitted');
            this.setState({validated: true});
        }

    }


    render() {

        const validated = this.state.validated;
        const name = this.state.name;
        const email = this.state.email;
        const message = this.state.message;

        return (
            <div className="Input-group">
                <Form noValidate validated={validated} onSubmit={this.submitButtonClick} >
                    <Form.Row>
                        <Form.Group md="4" controlId="validationCustom01"
                                    style={{width: "60%", margin: "15px", padding: "auto"}}>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                value={name}
                                onChange={this.handleNameChange}
                                required
                                type="text"
                                placeholder="First name"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group md="4" controlId="formGridEmail"
                                    style={{width: "60%", margin: "15px", padding: "auto"}}>
                            <Form.Label>Email</Form.Label>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    value={email}
                                    onChange={this.handleEmailChange}
                                    type="text"
                                    placeholder="Email"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please enter your email.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="exampleForm.ControlTextarea1"
                                style={{width: "60%", margin: "15px", padding: "auto"}}>
                        <Form.Label>Comment</Form.Label>
                        <Form.Control as="textarea"
                                      value={message}
                                      onChange={this.handleCommentChange}
                                      rows="3"/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Check
                            required
                            label="Agree to send my data to the test server"
                            feedback="You must agree before submitting."
                        />
                    </Form.Group>

                    <Button type="submit" style={{padding: "15px", margin: "15px"}}>Send data</Button>
                </Form>
            </div>)


    }
}



