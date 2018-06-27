import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Footer from '../Reactstrap/Footer'
import MainNav from '../Reactstrap/MainNav'
import { Col, Row } from 'reactstrap'

class ProfileMain extends Component {

  render() {

    let theUser = this.props.about.filter(about => about.user === this.props.location.pathname.slice(9))

    console.log('props', this.props)
    console.log('the user', theUser)
    if(this.props.about[0]){
      console.log('test2', this.props.location.pathname.slice(9))
      console.log('test', this.props.about[4].user.replace(/"/g,""))
    }
    if(this.props.about[0]){
      return (
        <div>
          <MainNav />

          <Col style={{marginLeft:"2em"}}>
            <Row>
              <div className="profileHeader">{theUser[0].user}</div>

              <Row style={{marginLeft:"15em", fontSize:"35pt"}}>About Me

              </Row>

            </Row>
            <Row>
              <img style={{height:"20em"}} src={process.env.PUBLIC_URL + theUser[0].avatar} />

                <Col md="4" style={{marginLeft:"10em"}}>

                  {theUser[0].about}
                </Col>
            </Row>
            <div className="phantom"></div>

          </Col>



          <div className="bottom">
            <Footer />
          </div>
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
