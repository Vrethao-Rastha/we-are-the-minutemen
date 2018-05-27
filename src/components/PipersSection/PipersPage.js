import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import MainNav from '../Reactstrap/MainNav'
import Footer from '../Reactstrap/Footer'
import {
  Container,
  Col,
  Card,
  CardText,
  ListGroup,
  Row,
  FormGroup,
  Form,
  Label,
  Input,
  Button,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand
} from 'reactstrap'

class PipersPage extends Component {
  state = {

  }
  render(){

    return(
      <div>
      <MainNav/>
      <div>Pipers Page</div>
      <Footer/>
    </div>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({

  }, dispatch)

  const mapStateToProps = state => ({

  })

export default connect(mapStateToProps, mapDispatchToProps)(PipersPage)
