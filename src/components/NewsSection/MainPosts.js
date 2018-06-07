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

const MainPosts = ({ user, mainComments }) => {
  console.log('PROPS IN THE POST Main post','main comments', mainComments, 'user', user)
//   if (user.role === ADMIN || user.auth && post.author === user.id) {
//   <button onClick={this.deletePost.bind(this}>Delete</button>
// }
    return(

    <div>
      <Card className="diamondCard">
        <CardTitle style={{marginTop:".5em"}} lassName="postName"> { mainComments.name } </CardTitle>


        <CardBody>
          <Row>
            <Col className="col-md-2">

              <CardImg style={{maxWidth:"10em", borderRadius:"5%", marginBottom:"2em"}} className="diamondCard" top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            </Col>
            <Col>

              <CardText style={{marginLeft:"2em"}}> { mainComments.comment } </CardText>
            </Col>

            {renderIf(localStorage.user.replace(/"/g,"") === mainComments.name,
            <Button className="pull-right" style={{maxHeight:"3em"}}>Delete</Button>
          )}
          </Row>


            </CardBody>

          </Card>
          <div className="phantom"></div>
    </div>
    )

};

export default MainPosts;
