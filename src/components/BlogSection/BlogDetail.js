import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { fetchBlogSingle } from '../../redux/actions'
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

    name: '',
    comment: '',
    avatar: 'test',
    storyId: ''

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


  render() {
    console.log('props', this.props)
    console.log(!this.props.singleBlog.title)
    console.log('path', this.props.location.pathname.slice(12))
    // var pathThing = this.props.singleBlog.picture.replace(/"/g,"")

    // let filteredPosts = this.props.dcrComments.filter(comment => comment.storyId == this.props.singleDcr.id)
    // console.log('single', filteredPosts)

    // let postComponents = filteredPosts.map(item => <DcrPosts key={ item.id } dcrComments={ item } />)



        return (
          <div className="newsDetail">
            <MainNav />
            <div className="container col-md-8 offset-md-2">
              <Card className="diamondCard" >
                <div className="phantom"></div>
                <CardTitle className="text-center"> {this.props.singleBlog.title}</CardTitle>
            <CardImg style={{marginTop:"1em"}} className="diamondCard" top width="100%" src={ process.env.PUBLIC_URL + this.props.singleBlog.picture } />
            <CardBody>
              <CardText>{this.props.singleBlog.body}


          </CardText>
          <CardBody>

            <Link className="btn btn-secondary pull-right" to="/BlogPage">Back</Link>
          </CardBody>

            </CardBody>

          </Card>
          <div className="phantom"></div>



          </div>
          <Footer />
         </div>
    );
  }

}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchBlogSingle
}, dispatch)

const mapStateToProps = state => ({
  singleBlog: state.singleBlog,
  allBlogs: state.blog
})

export default connect(mapStateToProps, mapDispatchToProps)(BlogDetail);
