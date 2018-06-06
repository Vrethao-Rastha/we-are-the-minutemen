import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { fetchDcrSingle, addDcrComments, fetchUser } from '../../redux/actions'
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
    post : [{
    name: 'test',
    comment: '',
    avatar: 'test'
  }]
  };

toggle = () => {
  this.setState({
    modal: !this.state.modal
  });
}

handlePostSubmit = e => {
    this.props.addDcrComments(this.state.name, this.state.comment, this.state.avatar)
  }

componentDidMount(props) {
  if(!this.props.singleDcr.title) {
    this.props.fetchDcrSingle(this.props.location.pathname.slice(11), this.props.history)
  }
}


  render() {
    console.log('DCR DETAIL','state:', this.state, 'props', this.props)

    var pathThing = this.props.location.pathname.slice(9)

     let posts = this.props.dcrComments.map(dcrComments => <DcrPosts key={ dcrComments.id } dcrComments={ dcrComments } />)


        return (
          <div className="newsDetail">
            <MainNav />

            <div className="container col-md-8 offset-md-2">
              <Card className="diamondCard">
                <div className="phantom"></div>
            <CardImg style={{marginTop:"1em"}} className="diamondCard" top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>
              <CardTitle>Card {this.props.singleDcr.title}</CardTitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
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
                    onChange={e => this.setState({comment: e.target.value, name: this.props.user[0].name, avatar: this.props.user[0].avatar})}
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
    fetchDcrSingle,
    addDcrComments,
    fetchUser
}, dispatch)

const mapStateToProps = state => ({
  singleDcr: state.dcrSingle,
  user: state.user,
  dcrComments: state.dcrComments,
})

export default connect(mapStateToProps, mapDispatchToProps)(DcrStoryDetail);
