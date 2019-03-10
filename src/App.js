import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Widget from './widget';
import Graphic from './graphic';
import Chat from './chat';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            
            Dashboard
              
        </header>
        <body>
            <Container>
                <Widget/>
                <Graphic/>
                <Chat/>
            </Container>
        </body>
      </div>
    );
  }
}

export default App;
