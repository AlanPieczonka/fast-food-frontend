import React, { useState } from "react";

const CheckoutNavigation = () => {
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

export default CheckoutNavigation;
