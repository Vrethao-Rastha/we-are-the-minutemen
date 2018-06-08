import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { fetchMainSingle, addMainStoryComments } from '../../redux/actions'
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
    avatar: ''

  };

toggle = () => {
  this.setState({
    modal: !this.state.modal
  });
}

handlePostSubmit = e => {
    this.props.addMainStoryComments(this.state.name, this.state.comment, this.state.avatar)
  }

componentDidMount(props) {
  if(!this.props.mainSingle.title) {
    this.props.fetchMainSingle(this.props.location.pathname.slice(13), this.props.history)
  }
}


  render() {
    console.log('MAIN STORY DETAIL:','state:', this.state, 'props', this.props)

    // let names = ['1', '2', ,'3' ,'4'].map( (name, index) => {
    // return <img key={index} src={require(`../images/Fallout-4-Concept-Art-${names}.png`)} /> })
    var pathThing = this.props.location.pathname.slice(9)

     let posts = this.props.mainComments.map(mainComments => <MainPosts key={ mainComments.id } mainComments={ mainComments } />)

    //  let users = this.props.user.map(user => <MainPosts key={ user.id } user={ user } />)

        return (
          <div className="newsDetail container-fluid">
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

                { posts }

                {/* <div>{ users }</div> */}


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
