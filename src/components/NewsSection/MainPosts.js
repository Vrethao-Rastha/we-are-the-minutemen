import React from 'react';
import { Link } from 'react-router-dom'
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

const MainPosts = ({ user, mainComments }) => {
  console.log('PROPS IN THE POST','main comments', mainComments, 'user', user)
  if(mainComments){
    return(

    <div>
      <Card className="diamondCard">
        <CardTitle style={{marginTop:".5em"}} className="text-center"> </CardTitle>

        <CardBody>
          {/* <CardImg style={{maxWidth:"10em", borderRadius:"5%"}} className="diamondCard" top width="100%" src={process.env.PUBLIC_URL + user.avatar} alt="Card image cap" /> */}

              <Col className="col-md-6 offset-md-2">
                <CardText> { mainComments.comment } </CardText>
              </Col>



            </CardBody>

          </Card>
          <div className="phantom"></div>
    </div>
    )
  }else{
    return(
      <div>
        esdbnsdonsdo
      </div>

    )
  }

};

export default MainPosts;
