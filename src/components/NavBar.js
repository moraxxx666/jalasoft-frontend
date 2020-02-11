import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class NavBar extends Component {
  render() {
    return (
      <header>
        <nav className="indigo darken-4">
          <div className="nav-wrapper container">
            <Link to="/" className="brand-logo">
              SCRUM POKER
            </Link>
          </div>
        </nav>
      </header>
    );
  }
}
