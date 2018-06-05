import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ScrollerPic15 from '../Scrollers/ScrollerPic15'
import ScrollerPic33 from '../Scrollers/ScrollerPic33'
import {
  Button,
  Col,
  Card,
  CardText,
  CardImg,
  CardBody,
  CardTitle,
} from 'reactstrap'


class PublikTemplate extends Component {
  render(){
      return(
      <div>

    <div style={{marginTop:"3em"}}></div>



      <ScrollerPic15 />

      <div className="phantom"></div>


        <Col>
          <Card className="publikCard">
            <CardTitle style={{marginTop:".5em"}} className="text-center">{ this.props.publik[1].title }</CardTitle>

             <CardImg className="diamondCard" top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>

                  <CardText>{ this.props.publik[1].body.slice(0,25).concat("...") }</CardText>
                  <Button style={{borderRadius:"15px"}}>Read More</Button>
                </CardBody>
              </Card>

              <div className="phantom"></div>
              <div className="phantom"></div>
              <ScrollerPic33 />

              <div className="phantom"></div>
              <div className="phantom"></div>
      </Col>
      </div>
      )
    }
};

const mapStateToProps = state => ({
  publik: state.publik
})

export default connect(mapStateToProps)(PublikTemplate);
