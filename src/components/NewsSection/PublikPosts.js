import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import {deletePublikComments} from '../../redux/Actions/PublikActions'
import renderIf from './util'
import {
  Badge,
  Container,
  Col,
  Card,
  CardText,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardFooter,
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
      <Card className="diamondCard postBody">
        <CardTitle style={{marginTop:".5em", marginLeft:"2em"}} lassName="postName"> <Link className="link" to="/Profile">{ this.props.publikComment.name } </Link> </CardTitle>


        <CardBody className="cardTxt">
          <Row>
            <Col className="col-md-2">

              <CardImg className="diamondCard postImg" top width="100%" src={this.props.publikComment.avatar} alt="Card image cap" />
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
            <CardFooter className="cardFoot">
              <Badge style={{borderRadius:"50%", marginRight:"1em"}}>
                0
              </Badge>
              Comments
              <Badge style={{borderRadius:"50%", marginRight:"1em", marginLeft:"1em"}}>
                0
              </Badge>
              Likes
              <Badge style={{borderRadius:"50%", marginRight:"1em", marginLeft:"1em"}}>
                0
              </Badge>
              Dislikes
              <Button className="pull-right" style={{marginLeft:"1em"}}>Dislike</Button>
              <Button className="pull-right" style={{marginLeft:"1em"}}>Like</Button>
              <Button className="pull-right">Comment</Button>
            </CardFooter>
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
