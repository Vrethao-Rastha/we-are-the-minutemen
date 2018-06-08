import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import {browserHistory,withRouter} from "react-router-dom"
import {fetchMainSingle} from '../../redux/actions'
import ScrollerPic18 from '../Scrollers/ScrollerPic18'
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
    this.props.fetchMainSingle(this.props.main[2].id, this.props.history)


  }

  render(){
  return(
  <div>


    <div className="phantom"></div>


    <div className="phantom"></div>

    <Col>
      <Card className="mainCard">
        <CardTitle style={{marginTop:".5em"}}  className="text-center" style={{fontSize:"30pt"}}>{ this.props.main[2].title }</CardTitle>
         <CardImg className="headline mainCard" top width="100%" src={ process.env.PUBLIC_URL + this.props.main[2].picture} alt="Card image cap" />
            <CardBody>

              <CardText>{ this.props.main[2].body.slice(0,65).concat("...") }</CardText>
              <Button style={{borderRadius:"15px"}}
                type="submit"
                value={ this.props.main[2].id}

                onClick={ this.handleMainSubmit }
                >Read More</Button>
            </CardBody>
          </Card>

          <div style={{marginBottom:"5em"}}></div>
          <div className="parallaxB"></div>
          <div style={{marginBottom:"5em"}}></div>

          <ScrollerPic18 />
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
