import React, { Component } from 'react';
import { render } from 'react-dom';
import { Navigation } from './components/navigation/navigation';
import { Sidebar } from './components/sidebar/sidebar';
import { Chat } from './components/chat/chat';
import { Auth } from './components/auth/auth';

//Component
class AppComponent extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <div>
                    <Sidebar/>
                    <Chat/>
                </div>
            </div>
        );
    }
}

//render component
render(<AppComponent/>, document.querySelector('#root'));