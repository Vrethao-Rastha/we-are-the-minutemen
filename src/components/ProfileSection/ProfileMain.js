import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Footer from '../Reactstrap/Footer'
import MainNav from '../Reactstrap/MainNav'
import { Col, Row } from 'reactstrap'

class ProfileMain extends Component {

  render() {

    let theUser = this.props.about.filter(user => user.user === localStorage.user.replace(/"/g,""))

    console.log('props in profile', this.props.about[0], 'the user', theUser)
    if(this.props.about[0]){
      return (
        <div>
          <MainNav />

          <Col>
            <Row>
              <div className="profileHeader">{localStorage.user.replace(/"/g,"")}</div>

              <Row style={{marginLeft:"15em", fontSize:"35pt"}}>About Me

              </Row>

            </Row>
            <Row>
              <img style={{height:"20em"}} src={process.env.PUBLIC_URL + localStorage.avatar.replace(/"/g,"")} />

                <Col md="4" style={{marginLeft:"10em"}}>

                  {theUser[0].about}
                </Col>
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
