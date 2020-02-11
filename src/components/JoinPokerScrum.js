import React, { Component } from "react";

export default class JoinPokerScrum extends Component {
  render() {
    return (
      <main>
        <div className="container">
          <div className="row">
            <div className="col s12">
              <div className="item">
                <div className="row">
                  <div className="col s12">
                    <h4 className="white-text">Enter the scrum poker room:</h4>
                  </div>
                  <div className="col s12">
                    <form action="" className="row">
                      <div className="input-field col s12">
                        <input id="first_name" type="text" />
                        <label htmlFor="first_name">Room id (*)</label>
                      </div>
                      <div className="input-field col s12">
                        <input id="first_name" type="text" />
                        <label htmlFor="first_name">Name (*)</label>
                      </div>
                      <div className="input-field col s12">
                        <button className="btn blue " style={{width:'100%'}}>Join</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
