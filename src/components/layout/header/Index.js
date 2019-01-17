import React, { Component } from 'react';

import AddContact from './AddContact';

import Nav from './Nav';

export default class index extends Component {
  render() {
    return (
      <header className="hero is-medium is-light is-bold">
        <Nav />
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-half">
                <h1 className="title">Contacts List</h1>
                <br />
                <h2 className="subtitle">
                  A Great Place to keep all your contacts and Other stuff
                </h2>
              </div>
              <div className="column is-half">
                <AddContact />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
