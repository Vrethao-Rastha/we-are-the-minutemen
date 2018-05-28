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
  marginTop: "2em",
  marginBottom: "1.5em",
  border: "1px solid black"
}

  const Login = () => {
    return(
      <div>
        <LoginNav/>
        <Container>
          <Col>
          <Row md="8">
          <Label className="btns" style={{marginRight: "2em", marginLeft: "10em"}} for="name-field">Name</Label>
          <Form>
              <Input style={{marginRight: "1em"}}
                type="text"
                name="name"
                id="name-field"
              />
            </Form>

            <Label className="btns" style={{marginRight: "1.5em", marginLeft: "1.5em"}} for="password-field">Password</Label>
              <Form>
              <Input
                type="password"
                name="password"
                id="password-field"
              />
          </Form>
          <Link style={{marginLeft: "2em", border: "1px solid white"}}
            className="btn btn-secondary"

             to="/NewsMain">Login</Link>
        </Row>
       </Col>

        <Col className="clearfix" style={ picStyle } md="12">
          <h1 style={{color: "white", textShadow: "-1px 0 black, 0 1px black, 0px 0 black, 0 -2px black"}} className="text-center">We Are the Minutemen</h1>

        </Col>
      </Container>
        <Navbar className="logNav" color="dark">
          <NavbarBrand className="navFooter" style={{color: "white"}}>&copy; 2018 Red Rocket Productions <i style={{color:"red"}} className="fa fa-rocket fa-2x"> </i>


          </NavbarBrand>
        </Navbar>
      </div>

    )
  }
  export default Login
