import React, { Component } from 'react';
import axios from 'axios';
import './chat.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'react-chat-elements/dist/main.css';
import { MessageList } from 'react-chat-elements'
import { MessageBox } from 'react-chat-elements'
import { Avatar } from 'react-chat-elements'

class Chat extends Component {
	state = {
	    chatMessages: []
	}

  	componentDidMount() {
    	axios.get('http://dev.4all.com:3050/messages')
      		.then(res => {
        	const chatMessages = res.data;
        	this.setState({ chatMessages });
      	})

  	}

  	render() {
    	return (
    		<Row>
    			<Col lg={6}>
                    Chat
                    {this.state.chatMessages.map((message) =>
					   <MessageBox position={message.displayPortraitLeft? 'left' : 'right'} type={'text'} text={message.message} 
								    				dateString={message.time} title={message.userName} 
								    				avatar={message.portrait}/>
						    )}

             
                </Col>
            </Row>

    	);
    }
}

export default Chat;