import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { fetchPublikSingle, addPublikComments } from '../../redux/Actions/PublikActions'
import Footer from '../Reactstrap/Footer'
import MainNav from '../Reactstrap/MainNav'
import PublikPosts from './PublikPosts'
import modalThing from '../images/Fallout-4-Concept-Art-3.jpg'
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
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
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


class PublikStoryDetail extends Component {

  state = {
    modal: false,
    name: 'test',
    comment: '',
    avatar: 'test'
  };

toggle = () => {
  this.setState({
    modal: !this.state.modal
  });
}

handlePostSubmit = e => {
    // e.preventDefault()
    this.props.addPublikComments(this.state.name, this.state.comment, this.state.avatar)
  }

componentDidMount(props) {
  if(!this.props.publikSingle.title) {
    this.props.fetchPublikSingle(this.props.location.pathname.slice(15), this.props.history)
  }
}


  render() {
    console.log('state:', this.state, 'props', this.props)
    var pathThing = this.props.location.pathname.slice(9)

     let posts = this.props.publikComments.map(item => <PublikPosts key={ item.id } publikComment={ item } />)


        return (
          <div className="newsDetail">
            <MainNav />

            <div className="container col-md-8 offset-md-2">
              <Card className="diamondCard">
                <div className="phantom"></div>
                <CardTitle className="text-center" style={{fontSize:"40pt"}}> {this.props.publikSingle.title}</CardTitle>
            <CardImg  style={{marginTop:"1em"}}  className="diamondCard" top width="100%" src={ process.env.PUBLIC_URL + this.props.publikSingle.picture} alt="Card image cap" />
            <CardBody>
              <CardText>{ this.props.publikSingle.body}</CardText>
              <Button style={{marginRight:"1em"}} onClick={this.toggle}>Post</Button>
              <Link className="btn btn-secondary" to="/NewsMain">Back</Link>
              {/* COMMENT SECTION */}
            </CardBody>
            <CardBody>
              <CardText>

                <div>{ posts }</div>

                <div className="phantom"></div>

              </CardText>
            </CardBody>
          </Card>

          <Modal style={{backgroundImage: {modalThing}}} isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalBody style={{backgroundImage: {modalThing}}}>

                <Col>
              <Label className="btns" for="text-field">Enter your post</Label>
              <Form onSubmit={ this.handlePostSubmit }>
                <FormGroup>
                  <textarea rows="4" cols="50"
                    type="text"
                    name="text"
                    id="text-field"
                    value={this.state.comment}
                    onChange={e => this.setState({comment: e.target.value, name: localStorage.user.replace(/"/g,""), avatar:localStorage.avatar.replace(/"/g,"") })}
                  />

                </FormGroup>
            <ModalFooter>

              <Button className="btn btn-secondary">Post</Button>
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </Form>
        </Col>
          </ModalBody>
          </Modal>

          </div>
          <Footer />
         </div>
    );
  }

}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchPublikSingle,
    addPublikComments
}, dispatch)

const mapStateToProps = state => ({
  publikSingle: state.publikSingle,
  publikComments: state.publikComments,
  user: state.currentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(PublikStoryDetail);
