import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import Footer from '../Reactstrap/Footer'
import DiamondCityNews from './DiamondCityNews'
import PublikOccurrences from './PublikOccurrences'
import MainStory from './MainStory'
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


          <h1 style={{marginBottom:"1em"}} className="text-center">Latest news from Diamond City Radio and Publik Occurrences</h1>
          <div className="parallax"></div>
          <div className="phantom"></div>
          <Row>
            <Col md={{size:3}}>

          <PublikOccurrences/>
          </Col>

          <Col md={{size:6}}>
            <MainStory/>
          </Col>

            {/* <Card className="mainCard">
              <CardTitle style={{marginTop:".5em"}} style={{marginTop:".5em"}} className="text-center">test data</CardTitle>
               <CardImg className="headline mainCard" top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                  <CardBody>

                    <CardText>test data</CardText>
                    <Button style={{borderRadius:"15px"}}>Read More</Button>
                  </CardBody>
                </Card> */}

                {/* <div className="phantom"></div>
                <div className="parallax"></div>
                <div className="phantom"></div> */}

          {/* <Card className="mainCard">
            <CardTitle style={{marginTop:".5em"}} className="text-center">test data 2</CardTitle>
             <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>

                  <CardText>test data 2</CardText>
                  <Button style={{borderRadius:"15px"}}>Read More</Button>
                </CardBody>
              </Card> */}
{/*
              <div className="phantom"></div>
              <div className="parallax"></div>
              <div className="phantom"></div> */}

        {/* <Card className="mainCard">
          <CardText className="text-center">test data 3</CardText>
           <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <CardBody>
                <CardTitle style={{marginTop:".5em"}}>test data 3</CardTitle>

                <Button style={{borderRadius:"15px"}}>Read More</Button>
              </CardBody>
            </Card> */}

            {/* <div className="phantom"></div>
            <div className="parallax"></div>
            <div className="phantom"></div> */}

      {/* <Card className="mainCard">
        <CardTitle style={{marginTop:".5em"}} className="text-center">test data 4</CardTitle>
         <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>

              <CardText>test data 4</CardText>
              <Button style={{borderRadius:"15px"}}>Read More</Button>
            </CardBody>
          </Card> */}
{/*
          <div className="phantom"></div>
          <div className="parallax"></div>
          <div className="phantom"></div> */}

          {/* <Card className="mainCard">
            <CardTitle style={{marginTop:".5em"}} style={{marginTop:".5em"}} className="text-center">test data</CardTitle>
             <CardImg className="headline mainCard" top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>

                  <CardText>test data</CardText>
                  <Button style={{borderRadius:"15px"}}>Read More</Button>
                </CardBody>
              </Card> */}
              {/* <div className="phantom"></div> */}


        {/* <Card className="mainCard">
          <CardTitle style={{marginTop:".5em"}} style={{marginTop:".5em"}} className="text-center">test data</CardTitle>
           <CardImg className="headline mainCard" top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <CardBody>

                <CardText>test data</CardText>
                <Button style={{borderRadius:"15px"}}>Read More</Button>
              </CardBody>
            </Card> */}




          <Col  md={{size:3}}>
          <DiamondCityNews/>
          </Col>
        </Row>
        <Button className="col-md-2 offset-md-5">Archived Stories</Button>
          </container>

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
    main: state.main
  })

export default connect(mapStateToProps, mapDispatchToProps)(NewsMain)
