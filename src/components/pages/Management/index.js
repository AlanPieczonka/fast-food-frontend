import React, { Component } from "react";

import { Switch, Route } from "react-router-dom";

import Content from "../../layout/Content";
import ProductList from "./ProductList";
import ProductEdit from "./ProductEdit";
import ProductCreate from "./ProductCreate";
import ManagementSidebar from './Sidebar'
import Organization from "./Organization"
import Deals from "./Deals"

class Management extends Component {
  render() {
    return (
      <>
        <ManagementSidebar />
        <Content>
          <Switch>
            <Route path="/management/edit/:id" component={ProductEdit} />
            <Route path="/management/new" component={ProductCreate} />
            <Route path="/management/products" component={ProductList} />
            <Route path="/management/deals" component={Deals} />
            <Route path="/management/organization" component={Organization} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default Management;
