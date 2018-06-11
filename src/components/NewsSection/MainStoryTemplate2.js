import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import {browserHistory,withRouter} from "react-router-dom"
import {fetchMainSingle} from '../../redux/Actions/MainActions'
import ScrollerPic9 from '../Scrollers/ScrollerPic9'
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


class MainStoryTemplate2 extends Component {

  tate = {
    id: '',
  }

  handleMainSubmit = e => {
    e.preventDefault()
    this.props.fetchMainSingle(this.props.main[1].id, this.props.history)


  }

  render(){
  return(
  <div>

    <div style={{marginTop:"5em"}}></div>

    <div className="phantom"></div>


    <div className="phantom"></div>

    <Col>
      <Card className="mainCard">
        <CardTitle style={{marginTop:".5em"}}  className="text-center" style={{fontSize:"30pt"}}>{ this.props.main[1].title }</CardTitle>
         <CardImg className="headline mainCard" top width="100%" src={ process.env.PUBLIC_URL + this.props.main[1].picture} alt="Card image cap" />
            <CardBody>

              <CardText>{ this.props.main[1].body.slice(0,65).concat("...") }</CardText>
              <Button style={{borderRadius:"15px"}}
                type="submit"
                value={ this.props.main[1].id}

                onClick={ this.handleMainSubmit }
                >Read More</Button>
            </CardBody>
          </Card>

          <div style={{marginBottom:"5em"}}></div>
          <ScrollerPic9 />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainStoryTemplate2));
