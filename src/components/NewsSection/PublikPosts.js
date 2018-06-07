import React from 'react';
import { Link } from 'react-router-dom'
import renderIf from './util'
import {
  Container,
  Col,
  Card,
  CardText,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
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

const PublikPosts = ({ publikComments }) => {
    return(

    <div>
      <Card className="diamondCard">
        <CardTitle style={{marginTop:".5em"}} lassName="postName"> { publikComments.name } </CardTitle>


        <CardBody>
          <Row>
            <Col className="col-md-2">

              <CardImg style={{maxWidth:"10em", borderRadius:"5%", marginBottom:"2em"}} className="diamondCard" top width="100%" src={publikComments.avatar} alt="Card image cap" />
            </Col>
            <Col>

              <CardText style={{marginLeft:"2em"}}> { publikComments.comment } </CardText>
            </Col>

            {renderIf(localStorage.user.replace(/"/g,"") === publikComments.name,
            <Button className="pull-right" style={{maxHeight:"3em"}}>Delete</Button>
          )}

          </Row>


            </CardBody>

          </Card>
    </div>
    )
};

export default PublikPosts;
