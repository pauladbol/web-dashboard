import React, { Component } from 'react';
import '../Styles/Widget.css';
import { Row, Col } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faComment ,faUser, faPager } from '@fortawesome/free-solid-svg-icons';

library.add(faShoppingBag)
library.add(faComment)
library.add(faUser)
library.add(faPager)

class WidgetItem extends Component {
  	render() {
    	return (
	        <Col lg={3} md={6} sm={12} className="widget-col">
                <Row className="widget-row">
                    <Col lg={3} md={3} sm={12} className={this.props.type}> 
                        <FontAwesomeIcon icon={this.props.icon} className="icon"/>
                    </Col> 
                    <Col lg={9} md={9} sm={12}>
                        <Row>
							<Col lg={12} className="widget-value"> {this.props.value}</Col>
                        </Row>
                        <Row>
                        	<Col lg={12} className="widget-description"> {this.props.description} </Col>
                        </Row>
                    </Col>
                </Row>
	        </Col>
		);
    }
}
export default WidgetItem;