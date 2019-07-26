import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link,  Switch, BrowserRouter } from "react-router-dom"
import Header from "./Header";


export default class Contacts extends Component {

    render(){
        return (
            <div>
                <Header className="App-header">
                </Header>
            <section id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="wow bounceIn" data-wow-offset="50"
                                data-wow-delay="0.3s">CONTACT <span>AWESOME</span></h2>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12 wow fadeInLeft" data-wow-offset="50"
                             data-wow-delay="0.9s">
                            <form action="#" method="post">
                                <label>NAME</label>
                                <input name="fullname" type="text" className="form-control" id="fullname"/>

                                    <label>EMAIL</label>
                                    <input name="email" type="email" className="form-control" id="email"/>

                                        <label>MESSAGE</label>
                                        <textarea name="message" rows="4" className="form-control"
                                                  id="message">hello</textarea>

                                        <input type="submit" className="form-control"/>
                            </form>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12 wow fadeInRight" data-wow-offset="50"
                             data-wow-delay="0.6s">
                            <address>
                                <p className="address-title">OUR ADDRESS</p>
                                <span>awesome app etc pre alpha0.79</span>
                                <p><i className="fa fa-phone">phone</i> 010-020-0340</p>
                                <p><i className="fa fa-envelope-o">email</i> awesome@company.com</p>
                                <p><i className="fa fa-map-marker">adress</i> 663 New Walk Roadside, Birdeye View, GO 11020
                                </p>
                            </address>
                            <ul className="social-icon">
                                <li><h4>WE ARE UnSOCIAL</h4></li>
                                <li><a href="#" className="fa fa-facebook">there`s no Facebook</a></li>
                                <li><a href="#" className="fa fa-twitter">there`s no Twitter</a></li>
                                <li><a href="#" className="fa fa-instagram">there`s no Instagram</a></li>
                                <li><a href="https://vk.com/" className="alert-link">Just VK lin but it doesn`t work</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <footer id="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <p className="wow bounceIn" data-wow-offset="50" data-wow-delay="0.3s">
                                Copyright &copy; 2084 Company Name</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

        );

    }
}