import React, { Component } from 'react';
import axios from 'axios';
import '../Styles/Chat.css';
import { Row, Col } from 'react-bootstrap';
import 'react-chat-elements/dist/main.css';
import { Input, Button, ChatItem } from 'react-chat-elements'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';

library.add(faComments)

class Chat extends Component {

	state = {
	    chatMessages: [],
	    message: ''
	}

  	componentDidMount() {
    	axios.get('http://dev.4all.com:3050/messages')
      		.then(res => {
        	const chatMessages = res.data;
        	this.setState({ chatMessages });
      	})

  	}
 	
 	handleSubmit = event => {
	    event.preventDefault();
	    console.log(this.refs.input.state.value);
	    console.log();
	    console.log();
	    const message = {
	    	userName: "Eu",
        	portrait: "http://dev.4all.com:3050/imgs/profile1.jpg",
        	message: this.refs.input.state.value,
        	displayPortraitLeft: true,
        	time: "1 min ago"
	    };

	    axios.post('http://dev.4all.com:3050/messages', { message })
	      .then(res => {
	        console.log(res);
	        console.log(message);
	        this.setState({chatMessages:[...this.state.chatMessages, message]});
	        this.refs.input.clear();
	    })
	    
	}

  	render() {
    	return (
    		<Row className="chat-row">
    			<Col lg={6} md={12} sm={12} className="chat-col">
    				<Row>
    					<Col lg={1} md={3} sm={3} className="chat-icon-col"> 
    						<FontAwesomeIcon icon="comments" className="chat-icon"/> 
    					</Col>
	                    <Col lg={11} md={9} sm={9}> 
	                    	<h3> Chat </h3> 
	                    </Col>
	                </Row>
                    <hr/>
	                <Row className="chat-messages">
	                	<Col lg={12} md={12} sm={12}>
	                		{this.state.chatMessages.map((message, index) =>
		                		<ChatItem avatar={message.portrait} avatarFlexible={true} className={message.displayPortraitLeft? 'avatar-left' : 'avatar-right'}
		                					title={message.userName} subtitle={message.message} dateString={message.time} key={index}/>)}
	                	</Col>
	                </Row>
	                <Row>
	                	<Col lg={12} md={12} sm={12}>
		                    <Input placeholder="Type your message here..."  ref='input'
		                    			 rightButtons={<Button color='white' backgroundColor='green' text='Send' onClick={this.handleSubmit.bind(this)}/> }/>
                		</Col>
                	</Row>
                </Col>
            </Row>
    	);
    }
}

export default Chat;