import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { deleteMainComments } from '../../redux/Actions/MainActions'
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
  ModalBody,
  ModalHeader,
  Modal
} from 'reactstrap'

class MainPosts extends Component {

  state ={
    user: '',
    modal: false,
    pic: ''
  }

  handleSubmit = e => {
      // e.preventDefault()
      this.props.deleteMainComments(this.props.mainComments.id)
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
      console.log('state', this.state)
    return(

    <div>
      <Card className="diamondCard postBody">
      <Form onSubmit={ this.aboutUser }>
        <CardTitle style={{marginTop:".5em", marginLeft:"2em"}} className="postName">    <Button className="profile-button"
          type="submit"
          value={ this.props.mainComments.name }
          onClick={e => this.setState({user: e.target.value})}
          >{ this.props.mainComments.name } </Button>
        </CardTitle>
      </Form>


        <CardBody className="cardTxt">
          <Row>
            <Col className="col-md-2">
             <Button className="profile-button" value={this.props.mainComments.avatar}
             onMouseEnter={e => this.setState({pic: e.target.value})}
             onClick={this.toggle}>
               <CardImg className="diamondCard, postImg" top width="100%" src={process.env.PUBLIC_URL + this.props.mainComments.avatar} />
             </Button>
            </Col>
            <Col>

              <CardText style={{marginLeft:"2em"}}> { this.props.mainComments.comment } </CardText>
            </Col>

            {renderIf(localStorage.user.replace(/"/g,"") === this.props.mainComments.name  || localStorage.admin.length < 5,

            <Button
              className="pull-right"
              style={{maxHeight:"3em"}}
              value={this.props.mainComments.id}
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
                <Link className="pull-right btn btn-secondary" to="/Comments">Comment</Link>
              </CardFooter>
          </Card>

    </div>
    )
  }
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    deleteMainComments,
    fetchUser
}, dispatch)

export default withRouter(connect(null, mapDispatchToProps)(MainPosts));
