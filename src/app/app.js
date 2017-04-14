import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link, browserHistory } from 'react-router-dom';
import { Navigation } from './components/navigation/navigation';
import { Sidebar } from './components/sidebar/sidebar';
import { Chat } from './components/chat/chat';
import { Auth } from './components/auth/auth';

import './app.scss';

//Component
class AppComponent extends Component {
    render() {
        return (
            <div>
                <Router history={browserHistory}>
                    <div>
                        <Navigation/>
                        <Route exact path='/' component={Sidebar} />
                        <Route path='/chat' component={Chat} />
                        <Route path='/auth' component={Auth} />
                    </div>    
                 </Router>
            </div>
        );
    }
}

//render component
render(<AppComponent/>, document.querySelector('#root'));