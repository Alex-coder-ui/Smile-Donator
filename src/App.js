import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Contacts from './components/Contacts'
import Donate from './components/Donate'
import Dates from './components/Dates'
import Homepage from './components/Homepage'
import {Route, Switch} from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"


class App extends Component {

    render() {
        return (
            <div>
                <Header className="App-header"/>

                <Switch>
                    <Route exact path="/" component={Homepage}/>
                    <Route path="/Contacts" component={Contacts}/>
                    <Route path="/Donate" component={Donate}/>
                    <Route path="/Calendar" component={Dates}/>
                </Switch>

                <Footer/>

            </div>


        );
    }
}

export default App;
