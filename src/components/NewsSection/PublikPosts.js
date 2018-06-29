import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link, withRouter } from 'react-router-dom'
import {deletePublikComments} from '../../redux/Actions/PublikActions'
import { fetchUser } from '../../redux/Actions/UserActions'
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
  NavbarBrand,
  Modal
} from 'reactstrap'

class PublikPosts extends Component {

  state ={
    user: '',
    modal: false,
    pic: ''
  }

  handleSubmit = e => {
      // e.preventDefault()
      this.props.deletePublikComments(this.props.publikComment.id)
    }

    toggle = () => {
       this.setState({
        modal: !this.state.modal
       });
      }

    aboutUser = e => {
      e.preventDefault()
      this.props.fetchUser(this.state.user, this.props.history)
    }


    render(){
    return(

    <div>
      <Card className="diamondCard postBody">
        <Form onSubmit={ this.aboutUser }>
        <CardTitle style={{marginTop:".5em", marginLeft:"2em"}} lassName="postName"> <Button className="profile-button"
          type="submit"
          value={ this.props.publikComment.name }
          onClick={e => this.setState({user: e.target.value})}
          >{ this.props.publikComment.name } </Button> </CardTitle>
        </Form>

        <CardBody className="cardTxt">
          <Row>
            <Col className="col-md-2">
              <Button className="profile-button" value={this.props.publikComment.avatar}
              onMouseEnter={e => this.setState({pic: e.target.value})}
              onClick={this.toggle}>
              <CardImg className="CardImg postImg" top width="100%" src={this.props.publikComment.avatar} alt="Card image cap" />
            </Button>
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

          <Modal isOpen={this.state.modal} toggle={this.toggle}>
              <img style={{height:"35em", width:"55em"}} src={process.env.PUBLIC_URL + this.state.pic}/>
          </Modal>


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
    deletePublikComments,
    fetchUser
}, dispatch)

export default withRouter(connect(null, mapDispatchToProps)(PublikPosts));
