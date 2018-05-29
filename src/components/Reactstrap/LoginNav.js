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

  const LoginNav = () => {
    return(
      <Navbar className="logNav" style={{marginBottom: "2em"}} color="dark">
        <NavbarBrand className="logNav" style={{color: 'white', fontSize: "2em", paddingLeft: "0px"}}>
          <img src={logo} style={{maxHeight: "1.5em"}}/> Radio Freedom
        </NavbarBrand>
        <p style={{color:"white", marginLeft:"45em", marginTop:"1em", marginRight: "2em"}}>Login</p>
        <Input style={{color: 'white'}} className="col-md-1" placeholder="Check it out"  />
        <p style={{color:"white", marginTop:"1em", marginRight: "1em", marginLeft: "1em"}}>Password</p>
        <Input style={{color: 'white', marginLeft:"0em"}} className="col-md-1" placeholder="Check it out" />
        <Link style={{marginLeft: "3em", marginRight: "3em", border: "1px solid white", borderRadius:"10px"}}
          className="btn btn-secondary"

           to="/NewsMain">Login</Link>
        <NavItem style={{listStyleType: "none"}}>
          <Link style={{color: 'white', marginRight:"2em"}} to="/about">About</Link>
          <Link style={{color: 'white', marginRight:"2em"}} to="/register">Register</Link>
            </NavItem>
      </Navbar>
    )
  }

  export default LoginNav
