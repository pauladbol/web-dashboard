import React, { Component } from 'react';
import axios from 'axios';
import '../Styles/Widget.css';
import WidgetItem from './WidgetItem.js';
import { Row } from 'react-bootstrap';

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
				<WidgetItem type="widget-icon order" icon="shopping-bag" value={this.state.widgets.newOrders} description="New Orders"/>
				<WidgetItem type="widget-icon comment" icon="comment" value={this.state.widgets.comments} description="Comments"/>
				<WidgetItem type="widget-icon user" icon="user" value={this.state.widgets.newUsers} description="New Users"/>
				<WidgetItem type="widget-icon view" icon="pager" value={this.state.widgets.pageViews} description="Page Views"/>
	   	    </Row>
    );
  }
}
export default Widget;