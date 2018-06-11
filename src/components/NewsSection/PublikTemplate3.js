import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link, browserHistory,withRouter } from 'react-router-dom'
import { fetchPublikSingle } from '../../redux/Actions/PublikActions'
import ScrollerPic10 from '../Scrollers/ScrollerPic10'
import {
  Button,
  Col,
  Card,
  CardText,
  CardImg,
  CardBody,
  CardTitle,
} from 'reactstrap'


class PublikTemplate3 extends Component {

  state = {
    id: ''
  }

  handlePublikSubmit = e => {
    e.preventDefault()
    this.props.fetchPublikSingle(this.props.publik[2].id, this.props.history)
}

  render(){
      return(
      <div>

    <div style={{marginTop:"3em"}}></div>







        <Col>
          <Card className="publikCard">
            <CardTitle style={{marginTop:".5em"}} className="text-center">{ this.props.publik[2].title }</CardTitle>

             <CardImg className="diamondCard" top width="100%" src={ process.env.PUBLIC_URL + this.props.publik[2].picture} alt="Card image cap" />
                <CardBody>

                  <CardText>{ this.props.publik[2].body.slice(0,25).concat("...") }</CardText>
                  <Button style={{borderRadius:"15px"}}
                    type="submit"
                    value={ this.props.publik[2].id}
                    onClick={ this.handlePublikSubmit }
                    >Read More</Button>
                </CardBody>
              </Card>

              <div className="phantom"></div>
              <div className="phantom"></div>
              <ScrollerPic10 />

              <div className="phantom"></div>
              <div className="phantom"></div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PublikTemplate3));
