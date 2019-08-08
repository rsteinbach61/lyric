import React, { Component } from 'react';

class ResultsPage extends Component {
  render() {
    if(this.props.story){
    return(
      <div>
      Results
      <p>{this.props.story.results[0].apiUrl}</p>
      </div>
    )
  } else {
    return null;
  }
  }
}
export default ResultsPage;
