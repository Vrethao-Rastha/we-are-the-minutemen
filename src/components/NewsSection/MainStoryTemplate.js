import React from 'react';
import { Link } from 'react-router-dom'
import ScrollerPic6 from '../Scrollers/ScrollerPic6'
import ScrollerPic5 from '../Scrollers/ScrollerPic5'
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


const MainStoryTemplate = ({ main }) => {
  return(
  <div>

    <div style={{marginTop:"5em"}}></div>

    <div className="phantom"></div>


    <ScrollerPic6 />

    <div className="phantom"></div>

    <Col>
      <Card className="mainCard">
        <CardTitle style={{marginTop:".5em"}}  className="text-center">{ main.title }</CardTitle>
         <CardImg className="headline mainCard" top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>

              <CardText>{ main.picture.slice(0,65).concat("...") }</CardText>
              <Link onClick={() => console.log('main',main)} className="btn btn-secondary" style={{borderRadius:"15px"}} to="/Details">Read More</Link>
            </CardBody>
          </Card>

          <div style={{marginBottom:"5em"}}></div>
          <ScrollerPic5 />
          <div style={{marginBottom:"8em"}}></div>

  </Col>
  </div>
  )
};

export default MainStoryTemplate;
