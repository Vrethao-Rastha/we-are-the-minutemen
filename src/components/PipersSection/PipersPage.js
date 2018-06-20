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
  NavbarBrand,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap'






class PipersPage extends Component {

  state = {
    modal: false,

  }

  render(){

    return(
      <div>
        <MainNav/>
        <Container >

          Summer is failing, and Autumn is upon us. <br/>
          Strange, its been almost a year to the day since The Valkyrie wandered out of an abandoned Vault and set the Commonwealth on fire.<br/>

          Much has changed in a year. So much.<br/>
          The Institute is gone.<br/>
          Let that sink in for a minute.<br/>
          The Institute is Gone. Destroyed.<br/>

          The Railroad, with The Valkyrie at their head, fought the Institute on their own ground. And Won.<br/>

          I know most of my readers are aware of this woman, but I wanted to clear the air as far as who she is, what she represents, and let her tell her story in her own words. <br/>
          What follows is my second interview with her, this one taken the day after the assault on the Institute.


        </Container>




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
