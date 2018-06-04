import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import Footer from '../Reactstrap/Footer'
import DiamondCityNews from './DiamondCityNews'
import PublikOccurrences from './PublikOccurrences'
import MainStory from './MainStory'
import MainNav from '../Reactstrap/MainNav'
import MainStoryTemplate from './MainStoryTemplate'
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

  }

  render() {
    console.log('satae', this.props)

    return (
      <div className="newsDetail">
        <div className="container col-md-8 offset-md-2">
          <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button style={{marginRight:"1em"}}>Post</Button>
          <Link className="btn btn-secondary" to="/NewsMain">Back</Link>
          <CardText>
            <p>Post comments to go here</p>
            <p>Post comments to go here</p>
            <p>Post comments to go here</p>
            <p>Post comments to go here</p>
            <p>Post comments to go here</p>
            <p>Post comments to go here</p>
            <p>Post comments to go here</p>

          </CardText>
        </CardBody>
      </Card>

      </div>
     </div>
    );
  }
}

const mapStateToProps = state => ({
  publik: state.public,
  dcr: state.dcr,
  piper: state.piper,
  main: state.main,
  publikComments: state.publicComments,
  dcrComments: state.dcrComments,
  piperComments: state.piperComments,
  mainComments: state.mainComments
})

export default connect(mapStateToProps)(StoryDetail);
