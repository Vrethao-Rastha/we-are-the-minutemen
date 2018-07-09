import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { fetchBlogSingle, editBlog } from '../../redux/Actions/BlogActions'
import { fetchUser } from '../../redux/Actions/UserActions'
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
    user: ''

  };

toggle = () => {
  this.setState({
    modal: !this.state.modal
  });
}

aboutUser = e => {
  e.preventDefault()
  this.props.fetchUser(this.state.user, this.props.history)
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

      if(this.props.singleBlog.body && this.props.about[0]){
        const str = this.props.singleBlog.body

        const reactStringReplace = require('react-string-replace')
        console.log('props', this.props)

        let theNames = this.props.about.map(user => user.user)
        let theBody = this.props.singleBlog.body

        const filteredNames = theNames.filter((name, idx) =>  this.props.singleBlog.body.indexOf(name) > 0 )

        // const filteredNames = theNames.filter(name => name === (this.props.singleBlog.body.indexOf(name) > 0))

        console.log('props', this.props)
        console.log('filteredNames', filteredNames)
        console.log('the names', theNames)
        console.log('the body', this.props.singleBlog.body.split(' '))
        console.log('test', this.props.singleBlog.body.split(' ')[32] == theNames[2])
        console.log('str', str)

        var string = filteredNames
        var regex = new RegExp("#" + string + "#", "g")

        console.log('str', str, 'string', string)
        return (


          <div className="blogDetail">
            <MainNav />
            <div className="container col-md-8 offset-md-2">
              <Card className="diamondCard fix" >
                <div className="phantom"></div>
                <CardTitle style={{fontSize:"40pt"}} className="text-center"> {this.props.singleBlog.title}</CardTitle>
                <CardImg style={{marginTop:"1em", height:"40em"}} className="CardImg" top width="100%" src={ process.env.PUBLIC_URL + this.props.singleBlog.picture } />
                <CardBody>

                  <Form onSubmit={ this.aboutUser }>
                  <CardText>
                    {filteredNames.length > 0 ? reactStringReplace(str, string, (match) =>

                      (<button className="profile-button"
                      type="submit"
                      value={ filteredNames }
                      onClick={e => this.setState({user: e.target.value})}>{match}</button>)
                    ) : str}

                  </CardText>
                </Form>
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
      }else {
        return(
          <div>sdubisd</div>
        )
      }
  }

}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchBlogSingle,
    editBlog,
    fetchUser
}, dispatch)

const mapStateToProps = state => ({
  singleBlog: state.singleBlog,
  allBlogs: state.blog,
  about: state.about
})

export default connect(mapStateToProps, mapDispatchToProps)(BlogDetail);
