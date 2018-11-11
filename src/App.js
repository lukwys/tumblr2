import React, { Component } from 'react';
import './App.scss';
import Notes from './components/Notes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Notes number="365" />
      </div>
    );
  }
}

export default App;
