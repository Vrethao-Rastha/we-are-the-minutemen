import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { fetchBlogSingle, editBlog } from '../../redux/Actions/BlogActions'
import renderIf from '../NewsSection/util'
import Footer from '../Reactstrap/Footer'
import MainNav from '../Reactstrap/MainNav'
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


class BlogDetail extends Component {

  state = {
    modal: false,
    id:'',
    title: '',
    body: '',
    picture: '',


  };

toggle = () => {
  this.setState({
    modal: !this.state.modal
  });
}



componentDidMount(props) {
  if(!this.props.singleBlog.title) {
    this.props.fetchBlogSingle(this.props.location.pathname.slice(12), this.props.history)
  }
}

handleEdit = e => {
    this.props.editBlog(this.state.id, this.state.title, this.state.body, this.state.picture)
}

  render() {

        return (
          <div className="blogDetail">
            <MainNav />
            <div className="container col-md-8 offset-md-2">
              <Card className="diamondCard fix" >
                <div className="phantom"></div>
                <CardTitle style={{fontSize:"40pt"}} className="text-center"> {this.props.singleBlog.title}</CardTitle>
            <CardImg style={{marginTop:"1em"}} className="diamondCard" top width="100%" src={ process.env.PUBLIC_URL + this.props.singleBlog.picture } />
            <CardBody>
              <CardText>{this.props.singleBlog.body}


          </CardText>
          <CardBody>

            {renderIf(localStorage.admin.length < 5,
              <Button className="pull-right" style={{marginLeft:"2em"}} onClick={ this.toggle }>
                Edit
              </Button>
            )}


            <Link className="btn btn-secondary pull-right" to="/BlogPage">Back</Link>
          </CardBody>

            </CardBody>

          </Card>
          <div className="phantom"></div>



          </div>

          <Modal style={{backgroundImage: {modalThing}}} isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalBody style={{backgroundImage: {modalThing}}}>

                <Col>
              <Label className="btns" for="text-field">Feeling different about things?</Label>
              <Form onSubmit={ this.handleEdit }>
                <FormGroup>
                  <textarea rows="4" cols="50"
                    type="text"
                    name="text"
                    id="text-field"
                    value={this.state.body}
                    onChange={e => this.setState({id: this.props.singleBlog.id, title: this.props.singleBlog.title, body: e.target.value, picture: this.props.singleBlog.picture })}

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

          <Footer />
         </div>
    );
  }

}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchBlogSingle,
    editBlog
}, dispatch)

const mapStateToProps = state => ({
  singleBlog: state.singleBlog,
  allBlogs: state.blog
})

export default connect(mapStateToProps, mapDispatchToProps)(BlogDetail);
