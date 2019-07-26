import React, { Component } from 'react'
import Calendar from 'react-calendar'
import { BrowserRouter as Router, Route, Link,  Switch, BrowserRouter } from "react-router-dom";
import Header from "./Header";

export default class Dates extends Component {
    state = {
        date: new Date(),
    }

    onChange = date => this.setState({ date })

    render() {
        return (
            <div>
                <Header className="App-header">
                </Header>
                <Calendar
                    onChange={this.onChange}
                    value={this.state.date}
                />
            </div>

        );
    }
}