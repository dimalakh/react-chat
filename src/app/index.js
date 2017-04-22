import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app/app';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory'

import { Navigation } from './components/navigation/navigation';
import { Sidebar } from './components/sidebar/sidebar';
import  Chat  from './components/chat/chat';
import { Auth } from './components/auth/auth';
import { Home } from './components/home/home';
import { store } from './store';

store.subscribe(() => {
     console.log('subscribe', store.getState())
});

const history = createHistory();

render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                    <div className='content'>
                        <Navigation/>
                        <Route exact path='/' component={Home} />
                        <Route path='/chat' component={Chat} />
                        <Route path='/auth' component={Auth} />
                    </div>    
            </ConnectedRouter>
        </Provider>,
         document.getElementById('root')
    );