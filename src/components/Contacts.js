import React, {Component} from 'react'
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/es/FormControl";
import Button from "react-bootstrap/Button";


export default class Contacts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: "",
            name: "",
            email: "",
            message: ""
        };

        this.handleNameChange = this.handleNameChange.bind(this)
        this.submitButtonClick = this.submitButtonClick.bind(this)

    }


    handleNameChange(event) {
        console.log('handle name change');

        this.setState({
            name: event.target.value
        });

        console.log("New state " + this.state.name);
    }


    submitButtonClick(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
        console.log('A name was submitted: ' + this.state.value)
    }


    render() {

        const name = this.state.name;
        return (
            <div className="Input-group">

                <InputGroup className="mb-3" style={{width: "60%",margin: "15px", padding: "auto"}}>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-name">Name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl

                        onChange={this.handleNameChange}
                        value={name}
                        aria-label="Name"
                        aria-describedby="inputGroup-name"
                    />
                </InputGroup>
                <br/>

                <InputGroup className="mb-3" style={{width: "60%",margin: "15px", padding: "auto"}}>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-email">Email</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        aria-label="Email"
                        aria-describedby="inputGroup-email"
                    />
                </InputGroup>
                <br/>


                <InputGroup style={{width: "60%", margin: "15px", padding: "auto"}}>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-comment">Comment</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl as="textarea" aria-label="Comment" aria-describedby="inputGroup-comment"/>
                </InputGroup>

                <Button variant="primary" onClick={this.submitButtonClick} style={{ padding: "15px",  margin: "15px"}}>Save changes</Button>
            </div>


        );

    }
}