import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link, browserHistory,withRouter } from 'react-router-dom'
import { fetchPublikSingle } from '../../redux/Actions/PublikActions'
import ScrollerPic7 from '../Scrollers/ScrollerPic7'
import {
  Button,
  Col,
  Card,
  CardText,
  CardImg,
  CardBody,
  CardTitle,
} from 'reactstrap'


class PublikTemplate2 extends Component {

  state = {
    id: ''
  }

  handlePublikSubmit = e => {
    e.preventDefault()
    this.props.fetchPublikSingle(this.props.publik[1].id, this.props.history)
}

  render(){
      return(
      <div>

    <div style={{marginTop:"3em"}}></div>




    <div className="phantom"></div>
    <div className="phantom"></div><div className="phantom"></div>
    <div className="phantom"></div>
      <div className="phantom"></div>


        <Col>
          <Card className="publikCard">
            <CardTitle style={{marginTop:".5em"}} className="text-center">{ this.props.publik[1].title }</CardTitle>

             <CardImg className="cardImg" top width="100%" src={ process.env.PUBLIC_URL + this.props.publik[1].picture} alt="Card image cap" />
                <CardBody>

                  <CardText>{ this.props.publik[1].body.slice(0,25).concat("...") }</CardText>
                  <Button style={{borderRadius:"15px"}}
                    type="submit"
                    value={ this.props.publik[1].id}
                    onClick={ this.handlePublikSubmit }
                    >Read More</Button>
                </CardBody>
              </Card>

              <div style={{marginBottom:"28em"}}></div>

      </Col>
      </div>
      )
    }
};

const mapDispatchToProps = dispatch =>
 bindActionCreators({
   fetchPublikSingle
 }, dispatch)

const mapStateToProps = state => ({
  publik: state.publik
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PublikTemplate2));
