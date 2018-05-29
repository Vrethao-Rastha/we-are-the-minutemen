import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import PublikTemplate from './PublikTemplate'
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

  class PublikOccurrences extends Component {
    state = {

    }

    render() {
      let publikPosts = this.props.publik.map(publik => <PublikTemplate key={ publik.id } publik={ publik } />)

      return(
        <div>{ publikPosts }</div>

      )
    }
  }

    const mapDispatchToProps = dispatch =>
      bindActionCreators({

      }, dispatch)

    const mapStateToProps = state => ({
      publik: state.publik
    })

export default connect(mapStateToProps, mapDispatchToProps)(PublikOccurrences)
