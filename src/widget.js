import React, { Component } from 'react';
import axios from 'axios';
import './widget.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faPager } from '@fortawesome/free-solid-svg-icons';

library.add(faShoppingBag)
library.add(faComment)
library.add(faUser)
library.add(faPager)

class Widget extends Component {
	state = {
	    widgets: []
	}

  	componentDidMount() {
    	axios.get('http://dev.4all.com:3050/widgets')
      		.then(res => {
        	const widgets = res.data;
        	this.setState({ widgets });
      	})

  	}

  	render() {
    	return (
			<Row>

		        <Col lg={3}>
		            <Card>
		                <Card.Body>
		                    <Row className="widget-row">
		                        <Col lg={3} className="widget-icon order"> <FontAwesomeIcon icon="shopping-bag" className="icon"/></Col> 
		                        <Col lg={9}>
			                        <Row>
										<Col lg={12}> {this.state.widgets.newOrders}</Col>
			                        </Row>
			                        <Row>
			                        	<Col lg={12}> New Orders </Col>
			                        </Row>
			                    </Col>
		                    </Row>
		                </Card.Body>
		            </Card>
		        </Col>

		        <Col lg={3}>
		            <Card>
		                <Card.Body>
		                    <Row className="widget-row">
		                        <Col lg={3} className="widget-icon comment"> <FontAwesomeIcon icon="comment" className="icon"/> </Col>
			                    <Col lg={9}>
			                        <Row>
										<Col lg={12}>{this.state.widgets.comments} </Col>
									</Row>
			                        <Row>
			                        	<Col lg={12}>Comments </Col>
			                        </Row>
			                    </Col>
		                    </Row>
		                </Card.Body>
		            </Card>
		        </Col>

		        <Col lg={3}>
		            <Card>
		                <Card.Body>
		                    <Row className="widget-row">
		                        <Col lg={3} className="widget-icon user"> <FontAwesomeIcon icon="user" className="icon"/> </Col> 
		                        <Col lg={9}>
			                        <Row>
										<Col lg={12}>{this.state.widgets.newUsers}  </Col>
									</Row>
			                        <Row>
			                        	<Col lg={12}>New Users </Col>
			                        </Row>
			                    </Col>
		                    </Row>    
		                </Card.Body>
		            </Card>
		        </Col>

		        <Col lg={3}>
		            <Card>
		                <Card.Body>
		                    <Row className="widget-row">
		                        <Col lg={3} className="widget-icon view"> <FontAwesomeIcon icon="pager" className="icon"/> </Col>
		                        <Col lg={9}>
			                        <Row>
										<Col lg={12}> {this.state.widgets.pageViews} </Col>
									</Row>
			                        <Row>
			                        	<Col lg={12}> Page Views </Col>
			                        </Row>
			                    </Col>
		                    </Row>
		                </Card.Body>
		            </Card>
		        </Col>
	        
	   	 	</Row>
    );
  }
}
export default Widget;