import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Footer from '../Reactstrap/Footer'
import MainNav from '../Reactstrap/MainNav'
import { Col, Row } from 'reactstrap'

class ProfileMain extends Component {
  render() {
    console.log('props in profile', this.props.about[0])
    if(this.props.about[0]){
      return (
        <div>
          <MainNav />

          <Col>
            <Row>
              <div className="profileHeader">{localStorage.user.replace(/"/g,"")}</div>

              <Row style={{marginLeft:"15em", fontSize:"35pt"}}>About Me

              </Row>
              {this.props.about[0].about}

            </Row>
            <Row>
              <img style={{height:"20em"}} src={process.env.PUBLIC_URL + localStorage.avatar.replace(/"/g,"")} />

            </Row>
            <div className="phantom"></div>

          </Col>




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
