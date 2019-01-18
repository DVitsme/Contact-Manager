import React, { Component } from 'react';
import { Consumer } from '../../Context';

export default class Contacts extends Component {
  state = {
    isOpen: false
  };
  unhideContent = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  onDeleteClick = (id, dispatch) => {
    dispatch({ type: 'DELETE_CONTACT', payload: id });
  };

  render() {
    const { name, phone, id, address, desc } = this.props.data;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card">
              <header className="card-header" onClick={this.unhideContent}>
                <p
                  className="card-header-title"
                  style={{ justifyContent: 'center', marginLeft: '10%' }}
                >
                  {name}
                </p>
                <a className="card-header-icon" aria-label="more options">
                  <span className="icon">
                    <i className="fa fa-angle-down" aria-hidden="true" />
                  </span>
                </a>
              </header>
              {this.state.isOpen ? (
                <React.Fragment>
                  <div className="card-content">
                    <div className="content">{desc}</div>
                  </div>
                  <footer className="card-footer">
                    <a className="card-footer-item has-text-grey-dark">
                      {phone}
                    </a>
                    <a className="card-footer-item has-text-grey-dark">
                      {address}
                    </a>
                    <a
                      className="card-footer-item has-text-danger"
                      onClick={this.onDeleteClick.bind(this, id, dispatch)}
                    >
                      Delete
                    </a>
                  </footer>
                </React.Fragment>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
