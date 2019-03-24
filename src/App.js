import React, { Component } from "react";
import "./App.css";

import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import Resume from "./components/Resume/Resume";
import Banner from './components/Banner/Banner';
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Utils from "./Utils/Utils";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { color: this.props.color };
  }
  render() {
    const activeLink = Utils.getActiveItemFromRoute(
      this.props.location.pathname + this.props.location.hash
    );
    return (
      <div className="App" id="App">
        <Sidebar
          color={this.state.color}
          location={this.props.location}
          active={activeLink}
        />
        <Banner color={this.state.color} />
        <TransitionGroup className="transition-group">
          <CSSTransition
            key={this.props.location.key}
            timeout={{ enter: 300, exit: 300 }}
            classNames={"fade"}
          >
            <section className="route-section">
              <Switch location={this.props.location}>
                <Route exact path="/">
                  <Main color={this.state.color} />
                </Route>
                <Route
                  path="/resume"
                  render={({ location }) => (
                    <Resume color={this.state.color} location={location} />
                  )}
                />
              </Switch>
            </section>
          </CSSTransition>
        </TransitionGroup>
        <div
          id="footer"
          style={{
            backgroundColor: this.props.color,
            height: "20px",
            color: "white",
            fontSize: "0.8rem",
            paddingRight: "2rem",
            paddingLeft: "2rem",
            zIndex: '3'
          }}
        >
          <span style={{ float: "left" }}>2018 Connor Ingram</span>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
