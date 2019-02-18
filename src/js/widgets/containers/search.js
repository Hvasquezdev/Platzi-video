import React, { Component } from 'react';

//Components
import SearchLayout from '../components/search/index';

class Search extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.input.value);
    this.input.value = ''
  }

  setInputRef = (element) => {
    this.input = element;
  }

  render() {
    return(
      <SearchLayout
        setRef={this.setInputRef}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default Search;