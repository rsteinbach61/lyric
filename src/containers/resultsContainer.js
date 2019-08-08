import React, { Component } from 'react';
import { connect } from 'react-redux';
import ResultsPage from '../components/resultsPage';

class ResultsContainer extends Component {

  render(){

  return(

    <div>
    Results Container
      <ResultsPage story={this.props.story}/>
    </div>
  )
}
}
const mapStateToProps = state => {
  return {story: state.story}
}

export default connect(mapStateToProps)(ResultsContainer)
