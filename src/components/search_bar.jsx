import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <input
        type="text"
        className="form-search form-control"
        onChange={this.props.refreshGifList(this.value)}
      />
    );
  }
}

export default SearchBar;
