import React from 'react'
import { Link } from 'react-router-dom'
import { Container,
         DropdownMenu,
         DropdownItem,
         DropdownToggle,
         UncontrolledDropdown,
         Row,
         Col,
         Form,
         Label,
         Input,
         Navbar,
         NavItem,
         NavbarBrand } from 'reactstrap'
import logo from '../images/Icon_Minutemen_quest.png'

  const MainNav = () => {
    return(
      <Navbar className="logNav" style={{marginBottom: "2em"}} color="dark">
        <NavbarBrand className="logNav" style={{color: 'white', fontSize: "2em", paddingLeft: "0px"}}>
          <img src={logo} style={{maxHeight: "1.5em"}}/> Radio Freedom
        </NavbarBrand>
        <UncontrolledDropdown className="navLinks">
        <DropdownToggle className="navLinks" caret>
                  More Places
                </DropdownToggle>
        <DropdownMenu right className="navLinks">
                <DropdownItem className="navLinks">
                  <Link className="navLinks" to="/NewsMain">Latest News</Link>
                </DropdownItem>
                <DropdownItem className="navLinks">
                  <Link className="navLinks" to="/PipersPage">Piper's Field Reports</Link>
                </DropdownItem>
                <DropdownItem className="navLinks">
                  <Link className="navLinks" to="/BlogPage">Blog of the General</Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem className="navLinks">
                  <Link className="navLinks" to="/">Logout</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

      </Navbar>
    )
  }

  export default MainNav
