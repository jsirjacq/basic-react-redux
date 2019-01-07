import React, {Component} from 'react';
import logo from '../../logo.svg';

import Posts from '../posts/Posts';
import Postform from '../postform/Postform';
import Image from '../image/Image'

class App extends Component {
    render() {
        return (
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                    </header>
                    <hr/>
                    <Image/>
                    <hr/>
                    <Postform/>
                    <hr/>
                    <Posts/>


                </div>
        );
    }
}

export default App;
