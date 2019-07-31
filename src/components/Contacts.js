import React, {Component} from 'react'
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";



export default class Contacts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: "",
        };


    }

    render() {
        return <div className="Input-group">
            <UserData/>
        </div>

        function UserData() {

            const [validated, setValidated] = React.useState(false);
            const handleSubmit = event => {
                const form = event.currentTarget;
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                setValidated(true);
            }

            return (
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Row>
                        <Form.Group md="4" controlId="validationCustom01"
                                    style={{width: "60%", margin: "15px", padding: "auto"}}>
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"
                                defaultValue="Alex"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group md="4" controlId="validationCustom02"
                                    style={{width: "60%", margin: "15px", padding: "auto"}}>
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Last name"
                                defaultValue="Coder"
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

            )

        }

    }
}



