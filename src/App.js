import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import Container from './components/Container';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Jumbotron />
        <Container />

      </div>
    );

  }
}

export default App;
