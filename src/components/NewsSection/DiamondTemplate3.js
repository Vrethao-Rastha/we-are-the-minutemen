import React from 'react';
import ScrollerPic14 from '../Scrollers/ScrollerPic14'
import ScrollerPic27 from '../Scrollers/ScrollerPic27'

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



const DiamondCityTemplate = ({ dcr }) => {
  return(
  <div>
    <div style={{marginTop:"3em"}}></div>

    <div className="phantom"></div>
    <div className="phantom"></div>


    <Col>
      <Card className="diamondCard">
        <CardTitle style={{marginTop:".5em"}} className="text-center">{ dcr.title }</CardTitle>
         <CardImg className="diamondCard" top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>

              <CardText>{ dcr.body.slice(0,25).concat("...") }</CardText>
              <Button style={{borderRadius:"15px"}}>Read More</Button>
            </CardBody>

          </Card>
          <div className="phantom"></div>
          <ScrollerPic27 />
          <div style={{marginBottom:"6em"}}></div>


  </Col>
  </div>
  )
};

export default DiamondCityTemplate;
