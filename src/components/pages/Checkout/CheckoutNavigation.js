import React, { useState } from "react";
import PropTypes from "prop-types";

const CheckoutNavigation = props => {
  const [activeTab, updateActiveTab] = useState("recent");

  const navItems = [
    {
      label: "Recent",
      key: "recent"
    },
    {
      label: "New",
      key: "new"
    },
    {
      label: "Popular",
      key: "popular"
    },
    {
      label: "All",
      key: "all"
    }
  ];

  const setActiveTab = key => () => updateActiveTab(key);

  const NAVITEMS_MAP = navItems.map(({ label, key }) => (
    <div
      key={key}
      className={`checkout__nav-item ${key === activeTab ? "-active" : ""}`}
      onClick={setActiveTab(key)}
    >
      {label}
    </div>
  ));

  return <div className="checkout__nav">{NAVITEMS_MAP}</div>;
};

CheckoutNavigation.propTypes = {};

export default CheckoutNavigation;
