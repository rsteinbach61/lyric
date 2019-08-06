import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchForm from '../components/searchForm';
import * as queryTypes from '../store/actions';

class SearchContainer extends Component {
  render(){
    
    return(
      <div> search container
        <SearchForm sendQuery={this.props.sendQuery}/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sendQuery: (query) => dispatch(queryTypes.sendQuery(query)),

}
}
  export default connect(null, mapDispatchToProps)(SearchContainer)
