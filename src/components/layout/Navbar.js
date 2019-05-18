import React, { Component } from 'react'
import BurgerIcon from './BurgerIcon'
import ButtonGroup from './ButtonGroup'
import OrganizationLogo from './OrganizationLogo'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <BurgerIcon />
        <ButtonGroup />
        <OrganizationLogo />
      </nav>
    )
  }
}
