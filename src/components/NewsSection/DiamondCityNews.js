import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
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

  class DiamondCityNews extends Component {
    state = {

    }

    render() {

      return(
        <div>Test</div>

      )
    }
  }

    const mapDispatchToProps = dispatch =>
      bindActionCreators({

      }, dispatch)

    const mapStateToProps = state => ({

    })

export default connect(mapStateToProps, mapDispatchToProps)(DiamondCityNews)
