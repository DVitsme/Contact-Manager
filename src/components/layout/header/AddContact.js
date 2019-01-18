import React, { Component } from 'react';
import { Consumer } from '../../../Context';
import uuid from 'uuid';

export default class AddContact extends Component {
  state = {
    name: '',
    phone: '',
    address: '',
    desc: ''
  };
  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, address, phone, desc } = this.state;

    const newContact = {
      id: uuid(),
      name,
      address,
      phone,
      desc
    };
    dispatch({ type: 'ADD_CONTACT', payload: newContact });
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    const { name, phone, address, desc } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <form action="" onSubmit={this.onSubmit.bind(this, dispatch)}>
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label htmlFor="" className="label">
                    Contact Info
                  </label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <p className="control is-expanded has-icons-left">
                      <input
                        type="text"
                        className="input"
                        placeholder="Name"
                        name="name"
                        value={name}
                        onChange={this.onChange}
                      />
                      <span className="icon is-small is-left">
                        <i className="fa fa-user" />
                      </span>
                    </p>
                  </div>
                  <div className="field">
                    <p className="control is-expanded has-icons-left">
                      <input
                        type="text"
                        placeholder="Adress"
                        className="input"
                        name="address"
                        value={address}
                        onChange={this.onChange}
                      />
                      <span className="icon is-small is-left">
                        <i className="fa fa-home" />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="field is-horizontal">
                <div className="field-label" />
                <div className="field-body">
                  <div className="field-body">
                    <div className="field is-expanded">
                      <div className="field has-addons">
                        <p className="control">
                          <a className="button is-static">+1</a>
                        </p>
                        <p className="control is-expanded">
                          <input
                            type="tel"
                            className="input"
                            placeholder="Your phone number"
                            name="phone"
                            value={phone}
                            onChange={this.onChange}
                          />
                        </p>
                      </div>
                      <p className="help">We will not share you phone number</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">Description</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <textarea
                        placeholder="A breif desc of the contact"
                        name="desc"
                        id=""
                        className="textarea"
                        value={desc}
                        onChange={this.onChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="field is-horizontal">
                <div className="field-label">
                  {/* Left empty for spacing */}
                </div>
                <div className="field-body">
                  <div className="field is-grouped is-grouped-right">
                    <div className="control">
                      <button type="submit" className="button is-primary">
                        Add Contact
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          );
        }}
      </Consumer>
    );
  }
}
