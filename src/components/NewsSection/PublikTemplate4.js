import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link, browserHistory,withRouter } from 'react-router-dom'
import { fetchPublikSingle } from '../../redux/actions'
import ScrollerPic19 from '../Scrollers/ScrollerPic19'
import {
  Button,
  Col,
  Card,
  CardText,
  CardImg,
  CardBody,
  CardTitle,
} from 'reactstrap'


class PublikTemplate4 extends Component {

  state = {
    id: ''
  }

  handlePublikSubmit = e => {
    console.log('FIRE!', this.props)
    e.preventDefault()
    this.props.fetchPublikSingle(this.props.publik[4].id, this.props.history)
}

  render(){
      return(
      <div>

    <div style={{marginTop:"3em"}}></div>




      <div className="phantom"></div>


        <Col>
          <Card className="publikCard">
            <CardTitle style={{marginTop:".5em"}} className="text-center">{ this.props.publik[4].title }</CardTitle>

             <CardImg className="diamondCard" top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>

                  <CardText>{ this.props.publik[4].body.slice(0,25).concat("...") }</CardText>
                  <Button style={{borderRadius:"15px"}}
                    type="submit"
                    value={ this.props.publik[4].id}
                    onClick={ this.handlePublikSubmit }
                    >Read More</Button>
                </CardBody>
              </Card>
              <div className="phantom"></div>

              <div className="phantom"></div>
              <ScrollerPic19 />
              <div className="phantom"></div>
              {/* <div className="parallaxFive" style={{borderRadius:"50%", width:"10em"}}></div> */}

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PublikTemplate4));
