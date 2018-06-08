import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import MainNav from '../Reactstrap/MainNav'
import Footer from '../Reactstrap/Footer'
import AddBlogEntry from './AddBlogEntry'
import BlogIndividual from './BlogIndividual'
import renderIf from '../NewsSection/util'
import {
  Container,
  Col,
  Card,
  CardText,
  ListGroup,
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

class BlogPage extends Component {
  state = {

  }





  render(){
    console.log('blog page', this.props)
    let blogPosts = this.props.blog.map(blog => <BlogIndividual key={ blog.id } blog={ blog } />)

    return(
      <div>
      <MainNav/>
      <div>Blog Page</div>
      <div className="blogs"></div>
      {renderIf(localStorage.admin.length < 5,
        <Col style={{marginBottom:"5em", marginLeft:"15em"}} className="col-md-12">

          <AddBlogEntry />
        </Col>
    )}
      <div>{ blogPosts }</div>
      <Footer/>
    </div>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
  }, dispatch)

  const mapStateToProps = state => ({
    blog: state.blog
  })

export default connect(mapStateToProps, mapDispatchToProps)(BlogPage)
