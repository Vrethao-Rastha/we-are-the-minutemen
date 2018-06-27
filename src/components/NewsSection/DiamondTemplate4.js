import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link, browserHistory, withRouter } from 'react-router-dom'

import { fetchDcrSingle } from '../../redux/Actions/DcrActions'
import ScrollerPic2 from '../Scrollers/ScrollerPic2'
import ScrollerPic4 from '../Scrollers/ScrollerPic4'

import {
  Button,
  Col,
  Card,
  CardText,
  CardImg,
  CardBody,
  CardTitle,
} from 'reactstrap'
import { getRandom } from './util'
import cardPics from '../images/Fallout-4-Concept-Art-23.jpg'



class DiamondTemplate4 extends Component {

  state = {
    id: ''
  }

  handleDcrSubmit = e => {
    e.preventDefault()
    this.props.fetchDcrSingle(this.props.dcr[3].id, this.props.history)
}

  render(){
  return(
  <div>
    <div style={{marginTop:"3em"}}></div>

    <div className="phantom"></div>
    <div className="phantom"></div>


    <Col>
      <Card className="diamondCard">
        <CardTitle style={{marginTop:".5em"}} className="text-center">{ this.props.dcr[3].title
        }</CardTitle>
         <CardImg className="cardImg" top width="100%" src={ process.env.PUBLIC_URL + this.props.dcr[3].picture} alt="Card image cap" />
            <CardBody>

              <CardText>{ this.props.dcr[3].body.slice(0,25).concat("...") }</CardText>
              <Button style={{borderRadius:"15px"}}
                type="submit"
                value={ this.props.dcr[3].id}
                onClick={ this.handleDcrSubmit }
                >Read More</Button>
            </CardBody>

          </Card>
          <div style={{marginBottom:"8em"}}></div>
          <ScrollerPic4 />
          {/* <div className="parallaxFive"></div> */}
          <div style={{marginBottom:"8em"}}></div>
          <ScrollerPic2 />


  </Col>
  </div>
  )
}
};

const mapDispatchToProps = dispatch =>
 bindActionCreators({
   fetchDcrSingle
 }, dispatch)

const mapStateToProps = state => ({
  dcr: state.dcr
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(DiamondTemplate4));
