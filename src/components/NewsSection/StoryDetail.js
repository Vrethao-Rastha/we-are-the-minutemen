import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import Footer from '../Reactstrap/Footer'
import MainNav from '../Reactstrap/MainNav'
import Posts from './Posts'
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


class StoryDetail extends Component {

  state = {
    modal: false
  };

toggle = () => {
  this.setState({
    modal: !this.state.modal
  });
}

  render() {
    // let comment = this.props.comment.map(main => <MainStoryTemplate2 key={ main.id } main={ main } />).slice(2,3)

    let posts = this.props.piperComments.map(piperComments => <Posts key={ piperComments.id } piperComments={ piperComments } />)

    if(this.state.publikSingle !== undefined){
      return (
        <div className="newsDetail">
          <MainNav />

          <div className="container col-md-8 offset-md-2">
            <Card className="diamondCard">
              <div className="phantom"></div>
          <CardImg style={{marginTop:"1em"}} className="diamondCard" top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
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
    }else if(this.state.dcrSingle !== undefined){
      return(
        <div>kebvefd</div>
      )
    }else {
      return(
        <dviv>
          erg
        </dviv>
      )
    }

  }
}

const mapStateToProps = state => ({
  publikSingle: state.publik,
  dcrSingle: state.dcr,
  piperSingle: state.piper,
  mainSingle: state.main,
  publikComments: state.publikComments,
  dcrComments: state.dcrComments,
  piperComments: state.piperComments,
  mainComments: state.mainComments
})

export default connect(mapStateToProps)(StoryDetail);
