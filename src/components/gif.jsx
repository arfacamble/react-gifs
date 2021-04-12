import React, { Component } from 'react';

class Gif extends Component {
  handleClick = (event) => {
    const { selectGif } = this.props;
    selectGif(event.target.id);
  }

  render() {
    const { id } = this.props;
    const src = `https://media3.giphy.com/media/${id}/giphy.gif`;
    return (
      <img src={src} className="gif" id={id} alt="FUNNY GIF!!!" onClick={this.handleClick} />
    );
  }
}

export default Gif;
