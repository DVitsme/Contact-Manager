import React, { Component } from 'react';

const MyContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
  }
};

export class Context extends Component {
  state = {
    contacts: [
      {
        id: 13,
        name: 'John Minaj',
        phone: '301-584-2365',
        address: '23 Jacob Rd'
      },
      {
        id: 2666,
        name: 'Travus Scott',
        phone: '301-165-6154',
        address: '404 liberty St'
      },
      {
        id: 34,
        name: 'Todd Smythers',
        phone: '301-998-4816',
        address: '2 Jason Village'
      },
      {
        id: 43,
        name: 'Jacob Smythers',
        phone: '301-998-4816',
        address: '404 liberty St'
      },
      {
        id: 25,
        name: 'Ragenia Green',
        phone: '301-998-4816',
        address: '554 Castle Way'
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };
  render() {
    return (
      <React.Fragment>
        <MyContext.Provider value={this.state}>
          {this.props.children}
        </MyContext.Provider>
      </React.Fragment>
    );
  }
}

export const Consumer = MyContext.Consumer;
