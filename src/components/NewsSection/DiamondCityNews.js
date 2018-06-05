import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link, withRouter } from 'react-router-dom'
import DiamondTemplate from './DiamondTemplate'
import DiamondTemplate2 from './DiamondTemplate2'
import DiamondTemplate3 from './DiamondTemplate3'
import DiamondTemplate4 from './DiamondTemplate4'

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
      let dcrPosts1 = this.props.dcr.map(dcr => <DiamondTemplate key={ dcr.id } dcr={ dcr } />).slice(0,1)

      let dcrPosts2 = this.props.dcr.map(dcr => <DiamondTemplate2 key={ dcr.id } dcr={ dcr } />).slice(0,1)

      let dcrPosts3 = this.props.dcr.map(dcr => <DiamondTemplate3 key={ dcr.id } dcr={ dcr } />).slice(0,1)

      let dcrPosts4 = this.props.dcr.map(dcr => <DiamondTemplate4 key={ dcr.id } dcr={ dcr } />).slice(0,1)

      return(
        <div>
        <div>{ dcrPosts1 }</div>
        <div>{ dcrPosts2 }</div>
        <div>{ dcrPosts3 }</div>
        <div>{ dcrPosts4 }</div>


        </div>

      )
    }
  }

    const mapDispatchToProps = dispatch =>
      bindActionCreators({

      }, dispatch)

    const mapStateToProps = state => ({
      dcr: state.dcr,
      publik: state.publik,
      main: state.main,
      scroller: state.scroller
    })

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DiamondCityNews))
