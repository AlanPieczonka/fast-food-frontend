import React from "react";
import { NavLink } from "react-router-dom";

import DatabaseIcon from '../../../assets/icons/Database'
import BoxIcon from '../../../assets/icons/Box'
import OrganizationIcon from '../../../assets/icons/Organization'

export default function ManagementSidebar() {
    return (
        <div className="sidebar sidebar-management">
            <NavLink to="/management/products" activeClassName="--active">
                <DatabaseIcon />
                Products
            </NavLink>
            <NavLink to="/management/deals" activeClassName="--active">
                <BoxIcon />
                Coupons &amp; Deals
            </NavLink>
            <NavLink to="/management/organization" activeClassName="--active">
                <OrganizationIcon />
                Organization
            </NavLink>
        </div>
    )
}