import React from 'react';
import renderIf from '../NewsSection/util'
import { ListGroupItem,
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

const BlogIndividual = ({ blog }) => {
  return(
    <Col md={{size: 6, offset: 3}} style={{marginBottom:"10em"}}>
      <Card>
         <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>
              <CardTitle>{ blog.title }</CardTitle>

              <CardText>{ blog.body.slice(0,25).concat("...") }</CardText>



                <Button className="pull-right" style={{marginLeft:"2em"}}>Details</Button>



              {renderIf(localStorage.admin.length < 5,
                <Button className="pull-right">Edit</Button>
            )}
            </CardBody>
          </Card>
          <br/>

  </Col>
  )
};

export default BlogIndividual;
