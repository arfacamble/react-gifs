import React, { Component } from 'react';

class Gif extends Component {
  handleClick = (event) => {
    this.props.selectGif(event.target.id);
  }

  render() {
    const src = `https://media3.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={src} className="gif" id={this.props.id} alt="FUNNY GIF!!!" onClick={this.handleClick} />
    );
  }
}

export default Gif;
