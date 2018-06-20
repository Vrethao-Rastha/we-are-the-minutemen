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

const PiperStory = ({ piper }) => {
  return(
    <div>
      <Col>
        <Card>
           <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <CardBody>
                <CardTitle>{ piper.question }</CardTitle>

                <CardText>{ piper.answer }</CardText>
                <Button>Read More</Button>
              </CardBody>
            </Card>
            <div className="phantom"></div>
            <div className="parallaxTwo"></div>

            <br/>

    </Col>
    </div>
  )
};

export default PiperStory;
