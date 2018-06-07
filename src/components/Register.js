import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { userRegister } from '../redux/auth'
import { Container,
         Row,
         Col,
         Form,
         Label,
         Input,
         Navbar,
         NavItem,
         NavbarBrand,
         Button,
         Modal,
         ModalHeader,
         ModalBody,
         ModalFooter,
         } from 'reactstrap'
import LoginNav from '../components/Reactstrap/LoginNav'
import { Link } from 'react-router-dom'
import background from './images/minutemen.jpg'
import logo from './images/Icon_Minutemen_quest.png'


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

  class Register extends Component {

    state = {
      modal: false,
      login: [
        {
        name: '',
        email: '',
        password: ''
      }
    ]
    };

    handleSubmit = e => {
    e.preventDefault()
    this.props.userRegister(this.state, this.props.history)
  }


    render(){
    return(
      <div>

        <Navbar className="logNav" style={{marginBottom: "2em"}} color="dark">
          <NavbarBrand className="logNav" style={{color: 'white', fontSize: "2em", paddingLeft: "0px"}}>
            <img src={logo} style={{maxHeight: "1.5em"}}/> Radio Freedom
          </NavbarBrand>
          <NavItem style={{listStyleType: "none"}}>
            <Link style={{color: 'white', marginRight:"2em"}} to="/about">About</Link>
            <Link style={{color: 'white', marginRight:"2em"}} to="/">Back</Link>
            <Button style={{color: 'white', marginRight:"2em", backgroundColor: "Transparent", border: "none"}} onClick={this.toggle}>Login</Button>

              </NavItem>
            </Navbar>
                      <Col>
                        <h3 className="col-md-8 offset-md-4">Welcome to the Minutemen! <br/> Please enter your credentials</h3>
                        <Row className="col-md-8 offset-md-2">
                        <Label style={{marginTop:".5em", marginRight:"1em"}} className="btns" for="name-field">Name</Label>
                      <Form onSubmit={ this.handleSubmit }>
                          <Input
                          type="text"
                          name="name"
                          id="name-field"
                          value={ this.state.name }
                          onChange={e => this.setState({name: e.target.value})}
                        />


                      <Label style={{marginTop:".5em", marginLeft:"2em", marginRight:"1em"}} className="btns" for="email-field">Email</Label>

                          <Input
                          type="email"
                          name="email"
                          id="email-field"
                          value={ this.state.email }
                          onChange={e => this.setState({email: e.target.value})}
                        />


                        <Label style={{marginTop:".5em", marginLeft:"2em", marginRight:"1em"}} className="btns" for="password-field">Password</Label>

                          <Input
                            type="password"
                            name="password"
                            id="password-field"
                            value={ this.state.password }
                            onChange={e => this.setState({password: e.target.value})}
                          />

                          <Button type="submit">Submit</Button>
                          </Form>
                    </Row>
                 </Col>

        <Container>


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
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    userRegister
}, dispatch)


  export default withRouter(connect(null, mapDispatchToProps)(Register))
