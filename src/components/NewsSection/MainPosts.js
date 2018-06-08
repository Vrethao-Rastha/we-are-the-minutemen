import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { deleteMainComments } from '../../redux/actions'
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

class MainPosts extends Component {

  handleSubmit = e => {
      // e.preventDefault()
      this.props.deleteMainComments(this.props.mainComments.id)
    }
    render(){
    return(

    <div>
      <Card className="diamondCard">
        <CardTitle style={{marginTop:".5em"}} lassName="postName"> { this.props.mainComments.name } </CardTitle>


        <CardBody>
          <Row>
            <Col className="col-md-2">

              <CardImg style={{maxWidth:"10em", borderRadius:"5%", marginBottom:"2em"}} className="diamondCard" top width="100%" src={process.env.PUBLIC_URL + this.props.mainComments.avatar} />
            </Col>
            <Col>

              <CardText style={{marginLeft:"2em"}}> { this.props.mainComments.comment } </CardText>
            </Col>

            {renderIf(localStorage.user.replace(/"/g,"") === this.props.mainComments.name,

            <Button
              className="pull-right"
              style={{maxHeight:"3em"}}
              value={this.props.mainComments.id}
              onClick={ this.handleSubmit }
              >Delete</Button>
          )}
          </Row>


            </CardBody>

          </Card>
          <div className="phantom"></div>
    </div>
    )
  }
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    deleteMainComments
}, dispatch)

export default connect(null, mapDispatchToProps)(MainPosts);
