import React, { Component } from 'react';
import { connect } from 'react-redux';
import ResultsPage from '../components/resultsPage';

class ResultsContainer extends Component {

  render(){
debugger;
//const apiUrl = this.props.story.results[0].apiUrl
  return(

    <div>
    Results Container
      <ResultsPage text={this.props.text}/>
    </div>
  )
}
}
const mapStateToProps = state => {
  return {text: state.text}
}

export default connect(mapStateToProps)(ResultsContainer)
