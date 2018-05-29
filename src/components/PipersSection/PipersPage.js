import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import MainNav from '../Reactstrap/MainNav'
import Footer from '../Reactstrap/Footer'
import PiperStory from './PiperStory'
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

    let piperStory = this.props.piper.map(piper => <PiperStory key={ piper.id } piper={ piper } />)

    return(
      <div>
      <MainNav/>
      <container>
        <Row>
          <Col md={{size:8, offset:2}}>
            <h1 className="text-center">Pipers Page</h1>
            <div>{ piperStory }</div>
          </Col>
            </Row>


      </container>
      <div style={{height:"1000px"}} className="parallaxTwo"></div>
      <Footer/>
    </div>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({

  }, dispatch)

  const mapStateToProps = state => ({
    piper: state.piper
  })

export default connect(mapStateToProps, mapDispatchToProps)(PipersPage)
