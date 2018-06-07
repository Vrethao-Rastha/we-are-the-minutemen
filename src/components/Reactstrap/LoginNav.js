import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link, withRouter } from 'react-router-dom'
import { userLogin } from '../../redux/auth'
import { Container,
         Row,
         Col,
         Form,
         FormGroup,
         Label,
         Input,
         Navbar,
         NavItem,
         NavbarBrand,
         Button,
         Modal,
         ModalHeader,
         ModalBody,
         ModalFooter, } from 'reactstrap'
import logo from '../images/Icon_Minutemen_quest.png'

  class LoginNav extends Component {

    state = {
      modal: false,

        email: '',
        password: ''


    };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.userLogin(this.state, this.props.history)
  }

    render(){
    return(
      <Navbar className="logNav" style={{marginBottom: "2em"}} color="dark">
        <NavbarBrand className="logNav" style={{color: 'white', fontSize: "2em", paddingLeft: "0px"}}>
          <img src={logo} style={{maxHeight: "1.5em"}}/> Radio Freedom
        </NavbarBrand>
        <NavItem style={{listStyleType: "none"}}>
          <Link style={{color: 'white', marginRight:"2em"}} to="/about">About</Link>
          <Link style={{color: 'white', marginRight:"2em"}} to="/register">Register</Link>
          <Button style={{color: 'white', marginRight:"2em", backgroundColor: "Transparent", border: "none"}} onClick={this.toggle}>Login</Button>

            </NavItem>

            {/* LOGIN MODAL */}
              <Modal className="loginModal" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalBody>
                  <ModalHeader toggle={this.toggle}>Welcome! <br/> Please enter your credentials</ModalHeader>
                    <Col>

                      <Label className="btns" for="name-field">Name</Label>
                    <Form onSubmit={ this.handleSubmit }>
                      <FormGroup>
                        <Input
                        type="name"
                        name="name"
                        id="name-field"
                        value={this.state.name}
                        onChange={e => this.setState({ name: e.target.value})}
                      />


                    <Label className="btns" for="email-field">Email</Label>

                        <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        value={this.state.email}
                        onChange={e => this.setState({ email: e.target.value})}
                      />


                      <Label className="btns" for="password-field">Password</Label>

                        <Input
                          type="password"
                          name="password"
                          id="examplePassword"
                          value={this.state.password}
                          onChange={e => this.setState({ password: e.target.value})}
                        />
                <ModalFooter>
                  <Button className="btn btn-secondary" type="submit">Login</Button>
                  <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
              </FormGroup>
              </Form>
            </Col>
              </ModalBody>
              </Modal>



      </Navbar>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  userLogin
}, dispatch)
  export default withRouter(connect(null, mapDispatchToProps)(LoginNav))
