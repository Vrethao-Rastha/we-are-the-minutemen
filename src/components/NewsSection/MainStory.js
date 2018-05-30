import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import MainStoryTemplate from './MainStoryTemplate'
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

  class MainStory extends Component {
    state = {

    }

    render() {
      console.log('')
      let mainPosts = this.props.main.map(main => <MainStoryTemplate key={ main.id } main={ main } />)

      return(
        <div>{ mainPosts }</div>

      )
    }
  }

    const mapDispatchToProps = dispatch =>
      bindActionCreators({

      }, dispatch)

    const mapStateToProps = state => ({
      main: state.main,
      publik: state.publik,
      dcr: state.dcr
    })

export default connect(mapStateToProps, mapDispatchToProps)(MainStory)
