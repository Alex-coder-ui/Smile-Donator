import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Header} from './components/navbar'

class App extends Component{

    render() {
        return (
            <div className="App">
                <div>
                <Header className="App-header">
                </Header>
                </div>
            </div>
        );
    }
}

export default App;
