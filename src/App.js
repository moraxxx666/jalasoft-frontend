import React from "react";

import "materialize-css/dist/css/materialize.css";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import NavBar from "./components/NavBar";
import Action from "./components/Action";
import JoinPokerScrum from "./components/JoinPokerScrum";
import CreatePokerScrum from "./components/CreatePokerScrum";
import Room from "./components/Room"
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <NavBar />
          <Action />
        </Route>
        <Route path="/create-poker-scrum" exact>
          <NavBar />
          <CreatePokerScrum />
        </Route>
        <Route path="/join-poker-scrum" exact>
          <NavBar />
          <JoinPokerScrum />
        </Route>
        <Route path="/session/:id" exact>
          <NavBar />
          <Room />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
