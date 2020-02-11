import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Action extends Component {
  render() {
    return (
      <main>
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Link to="/create-poker-scrum">
                <div className="item">
                  <h4 className="center-align">Create Poker Scrum Room</h4>
                </div>
              </Link>
            </div>
            <div className="col m6 s12">
              <Link to="/join-poker-scrum">
                <div className="item">
                  <h4 className="center-align">Join Poker Scrum Room</h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
