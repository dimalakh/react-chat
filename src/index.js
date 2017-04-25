import './styles/base.scss';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';


import { Navigation } from './components/navigation/navigation';
import { Sidebar } from './components/sidebar/sidebar';
import  Chat  from './components/chat/chat';
import { Auth } from './components/auth/auth';
import { Home } from './components/home/home';
import { store, history } from './store';

store.subscribe(() => {
     console.log(store.getState())
});

render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                    <div className='content'>
                        <Route exact path='/' component={Home} />
                        <Route path='/chat' component={Chat} />
                        <Route path='/auth' component={Auth} />
                    </div>    
            </ConnectedRouter>
        </Provider>,
        document.getElementById('root')
    );