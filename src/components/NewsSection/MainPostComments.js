import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class MainPostComments extends Component {
  render() {
    if(this.props.thePostComments[0]){

    console.log('props:', this.props.thePostComments[0])
  }
   if(this.props.thePostComments[0]){
  //   return (
  //     <div>dcr comment test</div>
  //   );
  //
  // }
  //else if(this.props.mainComments){
      return (
        <div>
          <div>{this.props.thePostComments.name}</div>
          <div>{this.props.thePostComments.comment}</div>
        </div>
      );

  //}
  // else if(this.props.publikComment){
  //     return (
  //       <div>publik comment test</div>
  //     );
  //
  }
  else {
      return (
        <div>lknwvn</div>
      );

   }
}
}


const mapStateToProps = state => ({
  //dcrComments: state.dcrComments,
  thePostComments: state.mainPostComments
  //publikComment: state.publikComments
})

export default connect(mapStateToProps)(MainPostComments);
