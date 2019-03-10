import React, { Component } from 'react';
import axios from 'axios';
import './graphic.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label } from 'recharts';

class Graphic extends Component {
	state = {
	    graphic: []
	}

  	componentDidMount() {
    	axios.get('http://dev.4all.com:3050/pageViews')
      		.then(res => {
        	const graphic = res.data;
        	this.setState({ graphic });
      	})

  	}

  	render() {
    	return (
    		<Row className="graphic-row">
    			<Col lg={12}>
		    		<Row>
		    			<Col lg={12}>
			                <div className="App-graphic">
			                    Side Traffic Overview
			                </div>
		                </Col>
		            <Row>
		            </Row>
		            	<Col lg={12}>
			                <LineChart width={600} height={300} data={this.state.graphic} margin={{top: 5, right: 30, left: 20, bottom: 5}} className="line-chart">
						        <Line type='monotone' dataKey='views' stroke='#8884d8' activeDot={{r: 8}}/>
						        <CartesianGrid strokeDasharray='3 3'/>
						        <Tooltip/>
						        <XAxis dataKey='month'/> 
						        <Legend/>
						        <YAxis/>
					      	</LineChart>
				      	</Col>
				      
		            </Row>
		        </Col>
            </Row>

    	);
    }
}

export default Graphic;