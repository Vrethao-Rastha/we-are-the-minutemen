import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { fetchMainSingle, addMainStoryComments } from '../../redux/Actions/MainActions'
import Footer from '../Reactstrap/Footer'
import MainNav from '../Reactstrap/MainNav'
import MainPosts from './MainPosts'
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
import theCrossing from './util'


class MainStoryDetail extends Component {

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
    this.props.addMainStoryComments(this.state.name, this.state.comment, this.state.avatar, this.state.storyId)
  }

componentDidMount(props) {
  if(!this.props.mainSingle.title) {
    this.props.fetchMainSingle(this.props.location.pathname.slice(13), this.props.history)
  }
}




  render() {
    console.log('props in main****************', this.props)
    console.log('state in main**********=>', this.state)

    let filteredPosts = this.props.mainComments.filter(comment => comment.storyId == this.props.mainSingle.id)

     let posts = filteredPosts.map(mainComments => <MainPosts key={ mainComments.id } mainComments={ mainComments } />)


        return (
          <div className="newsDetail container-fluid">
            <MainNav />

            <div className="container col-md-8 offset-md-2">
              <Card className="diamondCard">
                <div className="phantom"></div>
                <CardTitle className="text-center" style={{fontSize:"40pt"}}> {this.props.mainSingle.title}</CardTitle>
            <CardImg style={{marginTop:"1em"}} className="diamondCard" top width="100%" src={ process.env.PUBLIC_URL + this.props.mainSingle.picture} alt="Card image cap" />


            <CardBody>
              <CardText>{this.props.mainSingle.body}</CardText>
              <Button style={{marginRight:"1em"}} onClick={this.toggle}>Post</Button>
              <Link className="btn btn-secondary" to="/NewsMain">Back</Link>
              {/* COMMENT SECTION */}
            </CardBody>
            <CardBody>
              <CardText>

                { posts }


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
                          onChange={e => this.setState({comment: e.target.value, name: localStorage.user.replace(/"/g,""), avatar:localStorage.avatar.replace(/"/g,""), storyId:this.props.mainSingle.id })}
                        />

                        <Button className="btn btn-secondary">Post</Button>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                      </FormGroup>
                    </Form>
           </Col>
            <ModalFooter>
            </ModalFooter>
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
    fetchMainSingle,
    addMainStoryComments
}, dispatch)

const mapStateToProps = state => ({
   mainSingle: state.mainSingle,
   mainComments: state.mainComments,
   user: state.currentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(MainStoryDetail);
