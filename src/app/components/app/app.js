import './app.scss';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, browserHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { Navigation } from '../navigation/navigation';
import { Sidebar } from '../sidebar/sidebar';
import { Chat } from '../chat/chat';
import { Auth } from '../auth/auth';
import { Home } from '../home/home';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <Router history={browserHistory}>
                    <div className='content'>
                        <Navigation/>
                        <Route exact path='/' component={Home} />
                        <Route path='/chat' component={Chat} />
                        <Route path='/auth' component={Auth} />
                    </div>    
                 </Router>
            </div>
        );
    }
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({})
)(App);