import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ScrollerPic2 from '../Scrollers/ScrollerPic2'
import ScrollerPic26 from '../Scrollers/ScrollerPic26'

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



class PublikTemplate3 extends Component {
  render(){
  return(
  <div>
    <div style={{marginTop:"3em"}}></div>


    <Col>
      <Card className="publikCard">
        <CardTitle style={{marginTop:".5em"}} className="text-center">{ this.props.publik[3].title }</CardTitle>

         <CardImg className="diamondCard" top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>

              <CardText>{ this.props.publik[3].body.slice(0,25).concat("...") }</CardText>
              <Button style={{borderRadius:"15px"}}>Read More</Button>
            </CardBody>
          </Card>
          <div className="phantom"></div>
          <ScrollerPic26 />


  </Col>
  </div>
    )
  }
};

const mapStateToProps = state => ({
publik: state.publik
})

export default connect(mapStateToProps)(PublikTemplate3);
