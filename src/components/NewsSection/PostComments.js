import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class PostComments extends Component {
  render() {
    console.log('props:', this.props)
  if(this.props.dcrComments){
    return (
      <div></div>
    );

  }else if(this.props.mainComments){
      return (
        <div></div>
      );

  } else if(this.props.publikComment){
      return (
        <div></div>
      );

  } else {
      return (
        <div>lknwvn</div>
      );

  }
}
}
const mapDispatchToProps = dispatch =>
  bindActionCreators({

  }, dispatch)

// const mapStateToProps = state => ({
//   dcrComments: state.dcrComments,
//   mainComments: state.mainComments,
//   publikComment: state.publikComments
// })

export default connect(null, mapDispatchToProps)(PostComments);
