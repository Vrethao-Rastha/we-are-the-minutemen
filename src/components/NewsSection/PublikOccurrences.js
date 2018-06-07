import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import PublikTemplate from './PublikTemplate'
import PublikTemplate2 from './PublikTemplate2'
import PublikTemplate3 from './PublikTemplate3'
import PublikTemplate4 from './PublikTemplate4'

  class PublikOccurrences extends Component {
    state = {

    }

    render() {
      let publikPosts1 = this.props.publik.map(publik => <PublikTemplate key={ publik.id } publik={ publik } />).slice(0,1)

      let publikPosts2 = this.props.publik.map(publik => <PublikTemplate2 key={ publik.id } publik={ publik } />).slice(0,1)

      let publikPosts3 = this.props.publik.map(publik => <PublikTemplate3 key={ publik.id } publik={ publik } />).slice(0,1)

      let publikPosts4 = this.props.publik.map(publik => <PublikTemplate4 key={ publik.id } publik={ publik } />).slice(0,1)

      return(
        <div>
          <div>{ publikPosts1 }</div>
          <div>{ publikPosts2 }</div>
          <div>{ publikPosts3 }</div>
          <div>{ publikPosts4 }</div>
          <div className="parallaxB" style={{height:"50em"}}></div>

        </div>


      )
    }
  }

    const mapDispatchToProps = dispatch =>
      bindActionCreators({

      }, dispatch)

    const mapStateToProps = state => ({
      publik: state.publik,
      main: state.main,
      dcr: state.dcr,
      scroller: state.scroller

    })

export default connect(mapStateToProps, mapDispatchToProps)(PublikOccurrences)
