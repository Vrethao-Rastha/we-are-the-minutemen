import React from 'react'
import { Link } from 'react-router-dom'
import { Container,
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
        <NavItem style={{listStyleType: "none"}}>
          <Link style={{color: 'white', marginRight:"2em"}} to="/NewsMain">Latest News</Link>
          <Link style={{color: 'white', marginRight:"2em"}} to="/PipersPage">Pipers Page</Link>
          <Link style={{color: 'white', marginRight:"2em"}} to="/BlogPage">Blog of the General</Link>
            </NavItem>
      </Navbar>
    )
  }

  export default MainNav
