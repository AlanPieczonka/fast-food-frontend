import React, { Component } from "react";

import { Switch, Route } from "react-router-dom";

import Content from "../../layout/Content";
import ProductList from "./ProductList";
import ProductEdit from "./ProductEdit";
import ProductCreate from "./ProductCreate";

class Management extends Component {
  render() {
    return (
      <Content>
        <div className="management">
          <Switch>
            <Route path="/management/edit/:id" component={ProductEdit} />
            <Route path="/management/new" component={ProductCreate} />
            <Route path="/management" component={ProductList} />
          </Switch>
        </div>
      </Content>
    );
  }
}

export default Management;
