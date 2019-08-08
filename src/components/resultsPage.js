import React, { Component } from 'react';

class ResultsPage extends Component {
  render() {
    debugger;
    if(this.props.text){
    return(
      <div>
      Results
      <p>{this.props.text}</p>
      </div>
    )
  } else {
    return null;
  }
  }
}
export default ResultsPage;
