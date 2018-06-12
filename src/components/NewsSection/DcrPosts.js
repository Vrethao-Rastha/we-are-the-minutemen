import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { deleteDcrComments, editDcrComments } from '../../redux/Actions/DcrActions'
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

  state = {
    id: ''
  }

  handleSubmit = e => {
       e.preventDefault()
      this.props.deleteDcrComments(this.props.dcrComments.id)
    }

  render(){

    return(

    <div>
      <Card className="diamondCard">
        <CardTitle style={{marginTop:".5em", marginLeft:"2em"}} className="postName"> { this.props.dcrComments.name } </CardTitle>


        <CardBody>
          <Row>
            <Col className="col-md-2">

              <CardImg style={{maxWidth:"10em", borderRadius:"5%", marginBottom:"2em"}} className="diamondCard" top width="100%" src={process.env.PUBLIC_URL + this.props.dcrComments.avatar} />
            </Col>
            <Col>


              <CardText style={{marginLeft:"2em"}}> { this.props.dcrComments.comment } </CardText>
            </Col>

            {renderIf(localStorage.user.replace(/"/g,"") === this.props.dcrComments.name || localStorage.admin.length < 5,


              <Button
                className="pull-right"
                style={{maxHeight:"3em"}}
                value={this.props.dcrComments.id}
                onClick={ this.handleSubmit }
                >[X]</Button>

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
    deleteDcrComments,
    editDcrComments
}, dispatch)


export default connect(null, mapDispatchToProps)(DcrPosts);
