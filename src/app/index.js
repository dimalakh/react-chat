import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app/app';
import { createStore } from 'redux';

function rootReducer(state = ['1', '2'], action) {
            return state;
        }

const store = createStore(rootReducer);


render(
        <Provider store={store}>
            <App />
        </Provider>,
         document.getElementById('root')
    );