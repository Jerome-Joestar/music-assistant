import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import './home.css';
import src from '../../assets/white-image.png';

class Home extends Component {
  render() {
    return (
      <Card.Group className="home-container" itemsPerRow={3}>
        <Card color='red' image={src} />
        <Card color='blue' image={src} />
        <Card color='yellow' image={src} />
        <Card color='green' image={src} />
        <Card color='purple' image={src} />
        <Card color='orange' image={src} />
      </Card.Group>
    );
  }
}

export default Home;
