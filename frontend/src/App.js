import React, { Component } from 'react';
import './Style/App.css';
import { Events } from './Components/Events.js';
import Form from './Components/form.js';

class App extends Component {
  render() {
    return (
      <div>
        <Events />
        <Form />
      </div>
    );
  }
}

export default App;
