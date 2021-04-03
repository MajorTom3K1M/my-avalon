import React from "react";
import { render } from "react-dom";
import { history } from "./helpers";

import { Router, Route, Switch } from "react-router-dom";

import Component from "./components/TestComponent/component.jsx";
import Lobby from "./components/Lobby/Lobby.jsx";
import WaitRoom from "./components/WaitRoom/WaitRoom.jsx";

// ---------- Style Import ---------- //
import "./styles/main.css";
import "./styles/hover-min.css";
import "./styles/default.scss";
import "./styles/firefly.scss";
import "./styles/drawer.css";
// import "bootstrap/dist/css/bootstrap.min.css";

render(
  <Router history={history}>
    <Switch>
      <Route exact path="/test" component={Component} />
      <Route exact path="/wait" component={WaitRoom} />
      <Route exact path="/" component={Lobby} />
    </Switch>
  </Router>,
  document.getElementById("app")
);
