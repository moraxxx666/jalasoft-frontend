import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Service from "../services/story";
import M from "materialize-css"
class CreatePokerScrum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      createdBy: ""
    };
    this.handler = this.handler.bind(this);
    this.createPokerScrum = this.createPokerScrum.bind(this);
  }
  handler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  async createPokerScrum(e) {
    e.preventDefault();
    const res = await Service.CreateStory(this.state);
    const message = await res.json()
    M.toast({html:message.message})
    if(res.ok){
        this.props.history.push(`/session/${message.story_id}`)
    }
  }
  render() {
    return (
      <main>
        <div className="item">
          <form className="row" onSubmit={this.createPokerScrum}>
            <div className="input-field col s12">
              <input
                placeholder="christian morales"
                name="createdBy"
                type="text"
                onChange={this.handler}
              />
              <label htmlFor="first_name" className="active">
                Created By
              </label>
            </div>
            <div className="input-field col s12">
              <input
                placeholder="#123 Create foo"
                name="title"
                type="text"
                onChange={this.handler}
              />
              <label htmlFor="first_name" className="active">
                Story
              </label>
            </div>
            <div className="input-field col s12">
              <textarea
                name="description"
                className="materialize-textarea"
                onChange={this.handler}
              ></textarea>
              <label htmlFor="first_name" className="active">
                Descriptión
              </label>
            </div>
            <div className="input-field col s12">
              <button
                type="submit"
                className="btn blue"
                style={{ width: "100%" }}
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </main>
    );
  }
}
export default withRouter(CreatePokerScrum);
