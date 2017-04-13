import React, { Component } from 'react';
import { render } from 'react-dom';

//Component
class AppComponent extends Component {
    render() {
        return (<h1>Hello world</h1>);
    }
}

//render component
render(<AppComponent/>, document.querySelector('#root'));