import React, { Component } from 'react';
import Form from './components/Form';
import CardList from './components/CardList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form/>
        <CardList />
      </div>
    );
  }
}

export default App;
