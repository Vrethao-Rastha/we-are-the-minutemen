import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import Footer from '../Reactstrap/Footer'
import DiamondCityNews from './DiamondCityNews'
import PublikOccurrences from './PublikOccurrences'
import MainStory from './MainStory'
import MainNav from '../Reactstrap/MainNav'
import ScrollerPic35 from '../Scrollers/ScrollerPic35'
import {
  Col,
  Row,
  Button,
  } from 'reactstrap'


class NewsMain extends Component {
  state = {

  }



  render(){
    return(
      <div>
      <MainNav/>
      <div className="container-fluid">


          <h1 style={{marginBottom:"1em"}} className="text-center">Latest news from Diamond City Radio and Publick Occurrences</h1>
          <ScrollerPic35 />
          <div className="phantom"></div>
          <Row>
            <Col md={{size:3}}>

          <PublikOccurrences/>
          </Col>

          <Col md={{size:6}}>
            <MainStory/>
          </Col>

          <Col  md={{size:3}}>
          <DiamondCityNews/>
          </Col>
        </Row>
        <Button className="col-md-2 offset-md-5">Archived Stories</Button>
      </div>

          <div className="phantom"></div>

          <div className="parallax" style={{height:"1000px"}}></div>


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
    dcr: state.dcr,
    main: state.main,
    scroller: state.scroller
  })

export default connect(mapStateToProps, mapDispatchToProps)(NewsMain)
