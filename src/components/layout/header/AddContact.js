import React, { Component } from 'react';

export default class AddContact extends Component {
  render() {
    return (
      <form action="">
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label htmlFor="" className="label">
              Contact Info
            </label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control is-expanded has-icons-left">
                <input type="text" className="input" placeholder="Name" />
                <span className="icon is-small is-left">
                  <i className="fa fa-user" />
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control is-expanded has-icons-left">
                <input type="text" placeholder="Adress" className="input" />
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
                  name=""
                  id=""
                  className="textarea"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-label">{/* Left empty for spacing */}</div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <button className="button is-primary">Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
