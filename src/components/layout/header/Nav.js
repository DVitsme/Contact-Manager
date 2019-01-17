import React from 'react';

export default function nav() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="container is-fluid">
        <div className="navbar-brand">
          <a href="https://bulma.io'" className="navbar-item">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width={112}
              height={28}
            />
          </a>

          <a
            href="https://google.com"
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a href="https://google.com" className="navbar-item">
              Home
            </a>
            <a href="https://google.com" className="navbar-item">
              About
            </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a href="https://google.com" className="navbar-item is-arrowless">
                More
              </a>

              <div className="navbar-dropdown">
                <a href="https://google.com" className="navbar-item">
                  Jobs
                </a>
                <a href="https://google.com" className="navbar-item">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a href="https://google.com" className="button is-primary">
                <strong>Sign Up</strong>
              </a>
              <a href="https://google.com" className="button is-light">
                Log In
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
