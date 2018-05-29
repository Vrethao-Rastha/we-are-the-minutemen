import React from 'react'
import { Container,
         Row,
         Col,
         Form,
         Label,
         Input,
         Navbar,
         NavItem,
         NavbarBrand } from 'reactstrap'
import LoginNav from '../components/Reactstrap/LoginNav'
import { Link } from 'react-router-dom'
import background from './images/minutemen.jpg'


let picStyle = {
  height: "500px",
  maxWidth: "100%",
  backgroundImage: `url(${background})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  marginTop: "10em",
  marginBottom: "1.5em",
  border: "1px solid black"
}

  const Login = () => {
    return(
      <div>
        <LoginNav/>
        <Container>


        <Col className="clearfix" style={ picStyle } md="12">
          <h1 style={{color: "white", textShadow: "-1px 0 black, 0 1px black, 0px 0 black, 0 -2px black"}} className="text-center">We Are the Minutemen</h1>

        </Col>
      </Container>
        <Navbar className="logFoot" color="dark">
          <NavbarBrand className="navFooter" style={{color: "white"}}>&copy; 2018 Red Rocket Productions <i style={{color:"red", marginLeft:".5em"}} className="fa fa-rocket fa-2x"> </i>


          </NavbarBrand>
        </Navbar>
      </div>

    )
  }
  export default Login
