import React, { Component } from 'react';
import { Landing, Navbar } from './components/layout';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Landing />
      </div>
    );
  }
}
export default App;
