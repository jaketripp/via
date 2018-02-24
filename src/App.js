import React, { Component } from 'react';
import Form from './components/Form';
import CardList from './components/CardList';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />  
      <Form/>
        <CardList />
        <Footer />
      </div>
    );
  }
}

export default App;
