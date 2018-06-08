import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import MainStoryTemplate from './MainStoryTemplate'
import MainStoryTemplate2 from './MainStoryTemplate2'
import MainStoryTemplate3 from './MainStoryTemplate3'

  class MainStory extends Component {
    state = {

    }

    render() {
      let mainPosts = this.props.main.map(main => <MainStoryTemplate key={ main.id } main={ main } />).slice(0,1)

      let mainPosts2 = this.props.main.map(main => <MainStoryTemplate2 key={ main.id } main={ main } />).slice(0,1)

      let mainPosts3 = this.props.main.map(main => <MainStoryTemplate3 key={ main.id } main={ main } />).slice(0,1)

      return(
        <div>
        <div>{ mainPosts }</div>
        <div className="phantom"></div>
        <div className="phantom"></div>
        <div className="phantom"></div>
        <div className="phantom"></div>
        <div className="parallaxThree"></div>
        <div>{ mainPosts2 }</div>
        <div>{ mainPosts3 }</div>
        </div>
      )
    }
  }

    const mapDispatchToProps = dispatch =>
      bindActionCreators({

      }, dispatch)

    const mapStateToProps = state => ({
      main: state.main,
      publik: state.publik,
      dcr: state.dcr,
      scroller: state.scroller
    })

export default connect(mapStateToProps, mapDispatchToProps)(MainStory)
