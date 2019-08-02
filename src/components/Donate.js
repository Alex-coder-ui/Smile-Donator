import React, {Component} from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';


import axios from 'axios'

export default class Donate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            birthday: "",
            validated: false,
            selectedDay: null
        };
        this.handleDayClick = this.handleDayClick.bind(this);
        this.handleAgeChange = this.handleAgeChange.bind(this);
        this.submitButtonClick = this.submitButtonClick.bind(this);

    }


    handleDayClick(day, {selected}) {
        this.setState({
            selectedDay: selected ? undefined : day,
        });
    }

    handleAgeChange(event) {
        this.setState({
            age: event.target.value
        });
    }




    submitButtonClick(event) {
        let validated = event.target.checkValidity();
        let birthday = new Date().getFullYear() - this.state.selectedDay.getFullYear();
        event.preventDefault();



            if (validated && birthday > 1) {
                let birthday = {
                    birthday: this.state.birthday
                };
                axios.post('/birthday', birthday)
                    .then(function (response) {
                        console.log('A smile was submitted: ' + birthday);
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



        return (
            <div className="Donate">
                <Form noValidate validated={validated} onSubmit={this.submitButtonClick}>
                    <Form.Row>
                        <Form.Group md="4" controlId="validationCustom01"
                                    style={{width: "24%", margin: "15px", padding: "auto"}}>
                            <DayPicker
                                selectedDays={this.state.selectedDay}
                                onDayClick={this.handleDayClick}
                                todayButton="Go to Today"
                                modifiers={{
                                    foo: new Date(),
                                }}
                                onTodayButtonClick={(day, modifiers) => console.log(day, modifiers)}/>
                            <Form.Control
                                value={this.state.selectedDay
                                    ? this.state.selectedDay.toLocaleDateString()
                                    : 'Please select your birthday 👻'}
                                onChange={this.handleAgeChange}
                                required
                                type="text"
                                placeholder="Age"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>


                    <Form.Group style={{padding: "10px"}}>
                        <Form.Check
                            required
                            label="Yes I`m shure that I older than 18"
                            feedback="You must be 18 or older."
                        />
                    </Form.Group>

                    <Button type="submit" style={{padding: "15px", margin: "18px"}} >Send me a smile</Button>
                </Form>
            </div>)


    }
}