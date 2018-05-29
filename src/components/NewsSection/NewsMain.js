import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import Footer from '../Reactstrap/Footer'
import DiamondCityNews from './DiamondCityNews'
import PublikOccurrences from './PublikOccurrences'
import MainNav from '../Reactstrap/MainNav'
import {
  Container,
  Col,
  Card,
  CardText,
  CardImg,
  CardBody,
  CardTitle,
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

class NewsMain extends Component {
  state = {

  }
  render(){

    return(
      <div>
      <MainNav/>
      <container className="container-fluid">

          <h1 className="text-center">News Page</h1>
          <Row>
            <Col md={{size:3, offset: 2}}>
          <PublikOccurrences/>
          </Col>




          <Col  md={{size:3, offset:2}}>
          <DiamondCityNews/>
          </Col>
        </Row>
        <Button className="col-md-2 offset-md-5">Archived Stories</Button>
          </container>
          <div className="phantom"></div>
      <Footer/>

    </div>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({

  }, dispatch)

  const mapStateToProps = state => ({
    publik: state.publik,
    dcr: state.dcr
  })

export default connect(mapStateToProps, mapDispatchToProps)(NewsMain)
