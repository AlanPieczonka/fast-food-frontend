import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Checkout from "./components/pages/Checkout";
import Management from "./components/pages/Management";
import Orders from "./components/pages/Orders";
import withTheme from "./hocs/withTheme";

class Layout extends Component {
  updateVh = () => {
    let vh = window.innerHeight * 0.01;

    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  componentDidMount() {
    this.updateVh();

    this.resizeListener = window.addEventListener("resize", this.updateVh);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeListener);
  }

  render() {
    return (
      <Router>
        <Navbar />

        <Switch>
          <Route path="/" exact component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Route path="/management" component={Management} />
        </Switch>
      </Router>
    );
  }
}

export default withTheme(Layout);
