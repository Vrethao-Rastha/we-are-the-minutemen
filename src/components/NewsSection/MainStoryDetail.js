import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { fetchMainSingle } from '../../redux/actions'
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


class MainStoryDetail extends Component {

  state = {
    modal: false,
    test: ''
  };

toggle = () => {
  this.setState({
    modal: !this.state.modal
  });
}

componentDidMount(props) {
  if(!this.props.mainSingle.title) {
    this.props.fetchMainSingle(this.props.location.pathname.slice(13), this.props.history)
  }
}


  render() {
    console.log('state:', this.state, 'props', this.props)

    var pathThing = this.props.location.pathname.slice(9)

     let posts = this.props.mainComments.map(mainComments => <MainPosts key={ mainComments.id } mainComments={ mainComments } />)


        return (
          <div className="newsDetail">
            <MainNav />

            <div className="container col-md-8 offset-md-2">
              <Card className="diamondCard">
                <div className="phantom"></div>
            <CardImg style={{marginTop:"1em"}} className="diamondCard" top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>
              <CardTitle>Card {this.props.mainSingle.title}</CardTitle>
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
                    <Form>
                    <textarea rows="4" cols="50"
                      type="text"
                      name="text"
                      id="text-field"
                    />
                    </Form>
           </Col>
            <ModalFooter>
              <Button className="btn btn-secondary">Post</Button>
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
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
    fetchMainSingle
}, dispatch)

const mapStateToProps = state => ({
  //publikSingle: state.publik,
  //singleDcr: state.dcrSingle,
  // piperSingle: state.piper,
   mainSingle: state.mainSingle,
  // publikComments: state.publikComments,
  //dcrComments: state.dcrComments,
  // piperComments: state.piperComments,
   mainComments: state.mainComments
})

export default connect(mapStateToProps, mapDispatchToProps)(MainStoryDetail);
