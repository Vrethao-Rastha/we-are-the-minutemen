import React, { Component } from 'react';
import renderIf from '../NewsSection/util'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { deleteBlog , fetchBlogSingle} from '../../redux/Actions/BlogActions'
import { ListGroupItem,
  Container,
  Col,
  Card,
  CardText,
  CardImg,
  CardBody,
  CardTitle,
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

class BlogIndividual extends Component {

  state={
    id:''
  }

  handleSubmit = e => {
       e.preventDefault()
      this.props.deleteBlog(this.props.blog.id)
    }
    handleRedirect = e => {
      e.preventDefault()
      this.props.fetchBlogSingle(this.props.blog.id, this.props.history)


    }


  render(){
  return(
    <Col md={{size: 6, offset: 3}} style={{marginBottom:"100vh"}}>
      <Card className="diamondCard">
        <CardTitle style={{marginTop:".5em", fontSize:"40pt"}} className="text-center"><strong>{ this.props.blog.title }</strong></CardTitle>
         <CardImg className="diamondCard" style={{marginTop:"2em"}} top width="100%" src={process.env.PUBLIC_URL + this.props.blog.picture} alt="Card image cap" />
            <CardBody>
              <hr/>
              <CardText>{ this.props.blog.body.slice(0,200).concat("...") }</CardText>
              <hr/>


                <Button className="pull-right btn btn-secondary" style={{marginLeft:"2em"}}
                value={this.props.blog.id}
                onClick={this.handleRedirect}
                >Details</Button>




              {renderIf(localStorage.admin.length < 5,
                <Button value={this.props.blog.id}
                onClick={ this.handleSubmit } className="pull-right">Delete</Button>

            )}
            </CardBody>
          </Card>
          <br/>

  </Col>
   )
 }
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    deleteBlog,
    fetchBlogSingle
  }, dispatch)

  const mapStateToProps = state => ({
    // blog: state.blog
  })
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BlogIndividual));
