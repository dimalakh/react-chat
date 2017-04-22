import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/app/app';
import { store } from './store';

store.subscribe(() => {
     console.log('subscribe', store.getState())
});

render(
        <Provider store={store}>
            <App />
        </Provider>,
         document.getElementById('root')
    );