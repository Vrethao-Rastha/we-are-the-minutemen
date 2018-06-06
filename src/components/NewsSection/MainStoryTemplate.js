import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import {browserHistory,withRouter} from "react-router-dom"
import {fetchMainSingle} from '../../redux/actions'
import ScrollerPic6 from '../Scrollers/ScrollerPic6'
import ScrollerPic5 from '../Scrollers/ScrollerPic5'
import {
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


class MainStoryTemplate extends Component {

  tate = {
    id: '',
  }

  handleMainSubmit = e => {
    console.log('FIRE!', this.props)
    e.preventDefault()
    this.props.fetchMainSingle(this.props.main[0].id, this.props.history)


  }

  render(){
    console.log("dbfdbfbfbd", this.props)
  return(
  <div>

    <div style={{marginTop:"5em"}}></div>

    <div className="phantom"></div>


    <ScrollerPic6 />

    <div className="phantom"></div>

    <Col>
      <Card className="mainCard">
        <CardTitle style={{marginTop:".5em"}}  className="text-center">{ this.props.main[0].title }</CardTitle>
         <CardImg className="headline mainCard" top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>

              <CardText>{ this.props.main[0].picture.slice(0,65).concat("...") }</CardText>
              <Button style={{borderRadius:"15px"}}
                type="submit"
                value={ this.props.main[0].id}

                onClick={ this.handleMainSubmit }
                >Read More</Button>
            </CardBody>
          </Card>

          <div style={{marginBottom:"5em"}}></div>
          <ScrollerPic5 />
          <div style={{marginBottom:"8em"}}></div>

  </Col>
  </div>
  )
}
};

const mapDispatchToProps = dispatch =>
 bindActionCreators({
   fetchMainSingle
 }, dispatch)

const mapStateToProps = state => ({
main: state.main
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainStoryTemplate));
