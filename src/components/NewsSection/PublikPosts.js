import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import {deletePublikComments} from '../../redux/Actions/PublikActions'
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

class PublikPosts extends Component {

  state = {
    id: ''
  }

  handleSubmit = e => {
      // e.preventDefault()
      this.props.deletePublikComments(this.props.publikComment.id)
    }


    render(){
    return(

    <div>
      <Card className="diamondCard">
        <CardTitle style={{marginTop:".5em", marginLeft:"2em"}} lassName="postName"> { this.props.publikComment.name } </CardTitle>


        <CardBody>
          <Row>
            <Col className="col-md-2">

              <CardImg style={{maxWidth:"10em", borderRadius:"5%", marginBottom:"2em"}} className="diamondCard" top width="100%" src={this.props.publikComment.avatar} alt="Card image cap" />
            </Col>
            <Col>

              <CardText style={{marginLeft:"2em"}}> { this.props.publikComment.comment } </CardText>
            </Col>

            {renderIf(localStorage.user.replace(/"/g,"") === this.props.publikComment.name  || localStorage.admin.length < 5,

            <Button
              className="pull-right"
              style={{maxHeight:"3em"}}
              value={this.props.publikComment.id}
              onClick={ this.handleSubmit }
              >Delete</Button>
          )}

          </Row>


            </CardBody>

          </Card>
    </div>
    )
  }
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    deletePublikComments
}, dispatch)

export default connect(null, mapDispatchToProps)(PublikPosts);
