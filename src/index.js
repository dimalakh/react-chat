import './styles/base.scss';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import Chat  from './containers/chat';
import Auth from './containers/auth';
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