import React, { Component } from 'react';
import { connect } from 'react-redux'
import {browserHistory,withRouter} from "react-router-dom"

import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { fetchDcrSingle } from '../../redux/Actions/DcrActions'
import ScrollerPic3 from '../Scrollers/ScrollerPic3'
import ScrollerPic23 from '../Scrollers/ScrollerPic23'

import {
  Button,
  Col,
  Card,
  CardText,
  CardImg,
  CardBody,
  CardTitle,
  Form
} from 'reactstrap'
import { getRandom } from './util'
import cardPics from '../images/Fallout-4-Concept-Art-23.jpg'


class DiamondTemplate extends Component {
  state = {
    id: '',
  }

  handleDcrSubmit = e => {
    console.log('FIRE!', this.props)
    e.preventDefault()
    this.props.fetchDcrSingle(this.props.dcr[0].id, this.props.history)


  }


  render(){

  return(
  <div>

    <ScrollerPic3 />

    <div className="phantom"></div>
    <div className="phantom"></div>


    <Col>
      <Card className="diamondCard">
        <CardTitle style={{marginTop:".5em"}} className="text-center">{ this.props.dcr[0].title }</CardTitle>
         <CardImg className="diamondCard" top width="100%" src={ process.env.PUBLIC_URL + this.props.dcr[0].picture} alt="Card image cap" />
            <CardBody>

              <CardText>{ this.props.dcr[0].body.slice(0,25).concat("...") }</CardText>

                <Button style={{borderRadius:"15px"}}
                  type="submit"
                  value={ this.props.dcr[0].id}

                  onClick={ this.handleDcrSubmit }
                  >Read More</Button>

            </CardBody>

          </Card>
          <div className="phantom"></div>
          <div className="phantom"></div>
          <div className="phantom"></div>
          <ScrollerPic23 />
          <div style={{marginBottom:"6em"}}></div>


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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DiamondTemplate));
