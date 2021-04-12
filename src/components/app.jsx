import React, { Component } from 'react';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [
        { id: "4JU6VYFXQvwlNxRFSU" },
        { id: "1eExou2TFHiq8bhuYd" },
        { id: "R43IWSxAvs73E0dph8" },
        { id: "ppFKTGfSETHDq" }
      ],
      selectedGif: "8RnFKcnRX5P6zJU0xm"
    };
  }

  handleQuery = (query) => {
    console.log(query);
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar refreshGifList={this.handleQuery} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGif} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;

// < Gif selectedGif={this.state.selectedGif} />
