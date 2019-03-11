import React, { Component } from 'react';
import axios from 'axios';
import '../Styles/Graphic.css';
import { Row, Col } from 'react-bootstrap';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

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
    			<Col lg={12} md={12} sm={12} className="App-graphic">
		    		<Row>
		    			<Col lg={12} md={12} sm={12}>
			                <div>
			                    <h3> Side Traffic Overview </h3>
			                </div>
		                </Col>
		            <Row>
		            </Row>
		            	<Col lg={12} md={12} sm={12} className="chart-col">
		            		<ResponsiveContainer width="100%" height="80%">
				                <AreaChart data={this.state.graphic} margin={{top: 5, right: 30, left: 20, bottom: 5}} className="line-chart">
							        <Area type='monotone' dataKey='views' stroke="#A9E2F3" fill="#A9E2F3"/>
							        <CartesianGrid strokeDasharray='3 3'/>
							        <Tooltip/>
							        <XAxis dataKey='month'/>
							        <YAxis/>
						      	</AreaChart>
						   	</ResponsiveContainer>
				      	</Col>
		            </Row>
		        </Col>
            </Row>
    	);
    }
}
export default Graphic;