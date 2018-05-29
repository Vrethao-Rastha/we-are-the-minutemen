import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import DiamondTemplate from './DiamondTemplate'
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
      let dcrPosts = this.props.dcr.map(dcr => <DiamondTemplate key={ dcr.id } dcr={ dcr } />)

      return(
        <div>{ dcrPosts }</div>

      )
    }
  }

    const mapDispatchToProps = dispatch =>
      bindActionCreators({

      }, dispatch)

    const mapStateToProps = state => ({
      dcr: state.dcr,
      publik: state.publik
    })

export default connect(mapStateToProps, mapDispatchToProps)(DiamondCityNews)
