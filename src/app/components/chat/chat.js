import './chat.scss';

import  React, { Component } from 'react';
import { Sidebar } from '../sidebar/sidebar';
import { Toolbar } from '../toolbar/toolbar';
import { Message } from '../message/message';
import { MessageForm } from '../message-form/message-form';

export class Chat extends Component {
    render() {
        return (
            <div className='chat'>
                <Sidebar/>
                <section className="main-frame">
                    <Toolbar/>
                    <ul className="chat-body">
                        <Message/>
                    </ul>
                    <MessageForm/>
                </section>
            </div>
        );
    }
} 