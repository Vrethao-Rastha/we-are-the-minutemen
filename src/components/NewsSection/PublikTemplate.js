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


const PublikTemplate = ({ publik }) => {
  console.log('publik', publik)
  return(
  <div>
    <Col>
      <Card>
         <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>
              <CardTitle>{ publik.title }</CardTitle>

              <CardText>{ publik.body }</CardText>
              <Button>Read More</Button>
            </CardBody>
          </Card>
          <br/>

  </Col>
  </div>
  )
};

export default PublikTemplate;
