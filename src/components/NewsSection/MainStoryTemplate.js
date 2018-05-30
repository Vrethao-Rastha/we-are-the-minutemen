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


const MainStoryTemplate = ({ main }) => {
  return(
  <div>

{/* <div style={{marginTop:"7.25em"}}></div> */}
    <Col>
      <Card className="mainCard">
        <CardTitle style={{marginTop:".5em"}} style={{marginTop:".5em"}} className="text-center">{ main.title }</CardTitle>
         <CardImg className="headline mainCard" top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>

              <CardText>{ main.picture }</CardText>
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

export default MainStoryTemplate;
