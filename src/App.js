import React, { Component } from 'react';
import Home from './components/Home/Home';
import { Container } from 'semantic-ui-react'
import './App.css';

class App extends Component {
  render() {
    return (
      <Container>
        <Home />
      </Container>
    );
  }
}

export default App;
