import React from "react";
import { Switch, Route } from "react-router-dom";

import OrdersSettings from "./Settings"
import CurrentOrders from "./Current"

import Content from "../../layout/Content";
import { NavLink } from "react-router-dom";

import ForkIcon from '../../../assets/icons/Fork'
import SettingsIcon from '../../../assets/icons/Settings'

export default () => {
  return (
    <>
      <div className="sidebar sidebar-management">
        <NavLink to="/orders/current" activeClassName="--active">
          <ForkIcon />
            Current orders
        </NavLink>
        <NavLink to="/orders/settings" activeClassName="--active">
          <SettingsIcon />
            Settings
        </NavLink>
      </div>
      <Content>
        <Switch>
          <Route path="/orders/current" component={CurrentOrders} />
          <Route path="/orders/settings" component={OrdersSettings} />
        </Switch>
      </Content>
    </>
  );
};
