import React, { Component } from 'react';
import './Styles/App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Widget from './Components/Widget';
import Graphic from './Components/Graphic';
import Chat from './Components/Chat';

class App extends Component {
  render() {
    document.title = 'Dashboard';
    return (
      <div className="App">
        <Container>
            <Row>
                <Col lg={12} md={12} sm={12}>   
                    <h1> Dashboard</h1>
                </Col>
            </Row>
            <Widget/>
            <Graphic/>
            <Chat/>
        </Container>
      </div>
    );
  }
}

export default App;
