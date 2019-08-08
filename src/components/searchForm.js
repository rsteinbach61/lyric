import React, { Component } from 'react';

class SearchForm extends Component {

  constructor() {
    super();
    this.state = {
      query: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.sendQuery(this.state.query)
    this.setState({query: ''})
  }

  handleChange(event) {
    let state = this.state
    let field = event.target.name
    state[field] = event.target.value
    this.setState(state)
  }

  render(){
    return(
      <div> search form
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="query" onChange={(event) =>
          this.handleChange(event)} value={this.state.query} size="30"/>
          <input type="submit" />
          </form>
      </div>
    )
  }
}
  export default SearchForm
