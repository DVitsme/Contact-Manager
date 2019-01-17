import React, { Component } from 'react';

import { Consumer } from '../../Context';

import Contacts from './Contacts';

export default class Contact extends Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <Consumer>
            {value => {
              const { contacts } = value;
              return (
                <div className="columns is-multiline">
                  {contacts.map(contact => (
                    <div className="column is-one-third">
                      <Contacts key={contact.id} data={contact} />
                    </div>
                  ))}
                </div>
              );
            }}
          </Consumer>
        </div>
      </section>
    );
  }
}
