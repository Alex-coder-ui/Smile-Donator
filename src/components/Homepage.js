import React, {Component} from 'react'
import Header from "./Header"
import { BrowserRouter as Router, Route, Link,  Switch, BrowserRouter } from "react-router-dom";


export default class Homepage extends Component {

    render(){
        return (
            <div className="App">
                <div>
                    <Header className="App-header">
                    </Header>
                <section id="home">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-offset-2 col-md-8">
                                <h1 className="wow fadeIn" data-wow-offset="50" data-wow-delay="0.9s">We make nicest UI`s in the world!
                                     <span> Definately...</span></h1>
                                <div className="element">
                                    <div className="sub-element">Hello, this is SmileDonator</div>
                                    <div className="sub-element">Awesome SPA pre alpha 0.19
                                    </div>
                                    <div className="sub-element">Click the button bellow, to tune on to the...
                                    </div>
                                </div>
                                <a data-scroll href="https://www.google.com/search?q=doggies&source=lnms&tbm=isch&sa=X&ved=0ahUKEwizqpLkyc3jAhUN_SoKHcAPAL8Q_AUIESgB&biw=1421&bih=745#imgrc=1rYts2rj6xx7-M:" className="btn btn-default wow fadeInUp" data-wow-offset="50"
                                   data-wow-delay="0.6s">Positive wave</a>
                            </div>
                        </div>
                    </div>
                </section>
                </div>
            </div>
                )
                }
}