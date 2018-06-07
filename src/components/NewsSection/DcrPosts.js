import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
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

class DcrPosts extends Component {
  render(){

      console.log('DCR POST DETAIL','state:', this.state, 'prps:', this.props)


    return(

    <div>
      <Card className="diamondCard">
        <CardTitle style={{marginTop:".5em"}} lassName="postName"> { this.props.dcrComment.name } </CardTitle>


        <CardBody>
          <Row>
            <Col className="col-md-2">

              <CardImg style={{maxWidth:"10em", borderRadius:"5%", marginBottom:"2em"}} className="diamondCard" top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            </Col>
            <Col>


              <CardText style={{marginLeft:"2em"}}> { this.props.dcrComment.comment } </CardText>
            </Col>

            {renderIf(localStorage.user.replace(/"/g,"") === this.props.dcrComment.name,
            <Button className="pull-right" style={{maxHeight:"3em"}}>Delete</Button>
          )}
          </Row>


            </CardBody>

          </Card>
    </div>
      )

  }
};

const mapStateToProps = state => ({
  singleDcr: state.dcrSingle,
  user: state.user,
  dcrComments: state.dcrComments,
})

export default connect(mapStateToProps)(DcrPosts);
