import React, { Component } from 'react';
import './App.scss';
import Notes from './components/Notes';
import DateAndShare from './components/DateAndShare';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Notes number="365" />
        <DateAndShare date="11 November, 2018"/>
      </div>
    );
  }
}

export default App;
