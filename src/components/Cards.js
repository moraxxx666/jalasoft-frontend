import React, { Component } from "react";
import M from "materialize-css";
import Service from "../services/story";
export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      voted: false,
      selected_card: null,
      cards: [0, 1, 2, 3, 5, 8, 13, 20, 40, 100]
    };
    this.vote = this.vote.bind(this);
    this.SaveVote = this.SaveVote.bind(this);
  }
  vote(e) {
    this.setState({
      selected_card: e.target.value
    });
  }
  async SaveVote() {
    if (this.state.voted === false) {
      const res = await Service.AddVote(this.props.id, {
        name: this.props.name,
        card: this.state.selected_card
      });
      const message = await res.json();
      M.toast({html:message.message})
      if(res.ok){
        this.setState({ voted: true });
      }
      
    } else {
      M.toast({ html: "You have already voted" });
    }
  }
  render() {
    return (
      <div className="cards-container">
        <div className="row">
          {this.state.cards.map((el, index) => {
            return (
              <div className="col s2" key={index}>
                <div className="card">
                  <button
                    onClick={this.vote}
                    value={el}
                    className="btn blue"
                    style={{ width: "100%" }}
                  >
                    {" "}
                    {el}
                  </button>
                </div>
              </div>
            );
          })}
          <div className="col s12">
            <button onClick={this.SaveVote} className="btn green darken-4" style={{width:'100%'}}>Vote</button>
          </div>
        </div>
      </div>
    );
  }
}
