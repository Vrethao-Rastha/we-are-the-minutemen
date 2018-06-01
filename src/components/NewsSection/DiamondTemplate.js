import React from 'react';
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


const DiamondCityTemplate = ({ dcr }) => {
  return(
  <div>
    <div style={{marginTop:"7.25em"}}></div>

    <Col>
      <Card className="diamondCard">
        <CardTitle style={{marginTop:".5em"}} className="text-center">{ dcr.title }</CardTitle>
         <CardImg className="diamondCard" top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>

              <CardText>{ dcr.body.slice(0,25).concat("...") }</CardText>
              <Button style={{borderRadius:"15px"}}>Read More</Button>
            </CardBody>
          </Card>
          <div style={{marginBottom:"6em"}}></div>
          <div className="parallax"></div>
          <div style={{marginBottom:"18em"}}></div>


  </Col>
  </div>
  )
};

export default DiamondCityTemplate;
