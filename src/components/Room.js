import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import service from "../services/story";
import Cards from "../components/Cards";
import M from "materialize-css";
class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {
      story: {},
      votes: [],
      showVotes: false
    };
    this.ShowVotes = this.ShowVotes.bind(this);
  }
  async ShowVotes() {
    const res = await service.GetVotes(this.state.story._id);
    const messages = await res.json();
    if (res.ok) {
      this.setState({
        votes: messages.votes,
        showVotes: !this.state.showVotes
      });
    }
  }
  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await service.SelectStory(id);
    const message = await res.json();
    M.toast({ html: message.message });
    if (!res.ok || message.story.active !== true) {
      this.props.history.push("/");
    } else {
      this.setState({
        story: message.story
      });
    }
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12">
            <h5 className="center-align">Story: {this.state.story?.title} </h5>
          </div>
          <div className="col s12">
            <h5 className="center-align">Description:</h5>
            <pre className="center-align">
              {" "}
              {this.state.story?.description}{" "}
            </pre>
          </div>
          <div className="col s12">
            <h5 className="center-align">Room ID: {this.state.story?._id} </h5>
          </div>
          {this.state.showVotes === false ? (
            <div className="col s12">
              <Cards
                name={this.state.story.createdBy}
                id={this.state.story._id}
              />
            </div>
          ) : (
            <div className="con"></div>
          )}
          <div className="col s12">
            <button
              className="btn red darken-4"
              style={{ width: "100%" }}
              onClick={this.ShowVotes}
            >
              View team Results
            </button>
          </div>
          <div className="col s12">
            <div className="row">
              {this.state.showVotes === true ? (
                this.state.votes.map((vote, index) => {
                  return (
                    <div className="col m2 s12" key={index}>
                      <div className="card">
                        <h3 className="center-align">{vote.name}</h3>
                        <h3 className="center-align">{vote.card}</h3>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="con"></div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Room);
