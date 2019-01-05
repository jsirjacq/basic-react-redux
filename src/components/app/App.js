import React, {Component} from 'react';
import logo from '../../logo.svg';
import './App.css';

import Posts from '../Posts';
import Postform from '../Postform';

class App extends Component {
    render() {
        return (
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                    </header>

                    <Postform/>
                    <hr/>
                    <Posts/>

                </div>
        );
    }
}

export default App;
