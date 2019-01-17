import React, { Component } from 'react';

import { Context } from './Context';

import Header from './components/layout/header/Index';
import Contact from './components/contact/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Context>
          <Header />
          <Contact />
        </Context>
      </div>
    );
  }
}

export default App;
