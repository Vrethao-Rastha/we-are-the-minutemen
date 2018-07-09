import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Footer from '../Reactstrap/Footer'
import MainNav from '../Reactstrap/MainNav'
import { Col, Row } from 'reactstrap'

class ProfileMain extends Component {

  render() {

    let theUser = this.props.about.filter(about => about.user === this.props.location.pathname.slice(9))

    if(this.props.about[0]){
      return (
        <div className="profileBackground">
          <MainNav />

          <Col  md={{ size: 8, offset: 4 }}>
              <div className="profileHeader">{theUser[0].user}</div>
          </Col>

          <Col  md={{ size: 8, offset: 2 }}>




              <img style={{height:"40em", border:"1px solid white"}} src={process.env.PUBLIC_URL + theUser[0].avatar} />

            </Col>

            <Col  md={{ size: 7, offset: 4 }}>
              <div className="aboutHeader">About Me</div>
            </Col>

            <Col  md={{ size: 7, offset: 2 }}>
                <div className="aboutBlurb">
                  {theUser[0].about}

                </div>

          </Col>
          <div className="phantom"></div>




          <div className="bottom"></div>

            <Footer />
        </div>
      );

    }else {
      return (
        <div>ekbvk</div>
      )
    }
  }
}

const mapStateToProps = state => ({
  about: state.about
})

export default connect(mapStateToProps)(ProfileMain);
