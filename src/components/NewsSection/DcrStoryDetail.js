import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { fetchDcrSingle, addDcrComments } from '../../redux/Actions/DcrActions'
import renderIf from './util'
import Footer from '../Reactstrap/Footer'
import MainNav from '../Reactstrap/MainNav'
import DcrPosts from './DcrPosts'
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


class DcrStoryDetail extends Component {

  state = {
    modal: false,

    name: '',
    comment: '',
    avatar: '',
    storyId: ''

  };

toggle = () => {
  this.setState({
    modal: !this.state.modal
  });
}

handlePostSubmit = e => {
    this.props.addDcrComments( this.state.name, this.state.comment, this.state.avatar, this.state.storyId )
  }

componentDidMount(props) {
  if(!this.props.singleDcr.title) {
    this.props.fetchDcrSingle(this.props.location.pathname.slice(12), this.props.history)
  }
}


  render() {

    var pathThing = this.props.location.pathname.slice(9)

    let filteredPosts = this.props.dcrComments.filter(comment => comment.storyId == this.props.singleDcr.id)
    console.log('single', filteredPosts)

    let postComponents = filteredPosts.map(item => <DcrPosts key={ item.id } dcrComments={ item } />)



        return (
          <div className="newsDetail">
            <MainNav />
            <div className="container col-md-8 offset-md-2">
              <Card className="diamondCard">
                <div className="phantom"></div>
                <CardTitle className="text-center" style={{fontSize:"40pt"}}> {this.props.singleDcr.title}</CardTitle>
            <CardImg style={{marginTop:"1em"}} className="diamondCard" top width="100%" src={ process.env.PUBLIC_URL + this.props.singleDcr.picture} alt="Card image cap" />
            <CardBody>
              <CardText>{this.props.singleDcr.body}</CardText>
              <Button style={{marginRight:"1em"}} onClick={this.toggle}>Post</Button>
              <Link className="btn btn-secondary" to="/NewsMain">Back</Link>
              {/* COMMENT SECTION */}
            </CardBody>
            <CardBody>
              <CardText>

                { postComponents }


              </CardText>
            </CardBody>
          </Card>
          <div className="phantom"></div>

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
                    onChange={e => this.setState({comment: e.target.value, name: localStorage.user.replace(/"/g,""), avatar: localStorage.avatar.replace(/"/g,""), storyId: this.props.singleDcr.id })}
                  />
                  <Col>


                  </Col>

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
    fetchDcrSingle,
    addDcrComments
}, dispatch)

const mapStateToProps = state => ({
  singleDcr: state.dcrSingle,
  user: state.user,
  dcrComments: state.dcrComments,
})

export default connect(mapStateToProps, mapDispatchToProps)(DcrStoryDetail);
