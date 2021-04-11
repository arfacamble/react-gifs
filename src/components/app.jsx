import React, { Component } from 'react';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: ["4JU6VYFXQvwlNxRFSU", "1eExou2TFHiq8bhuYd", "R43IWSxAvs73E0dph8", "ppFKTGfSETHDq"],
      selectedGif: null
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
            <Gif id="8RnFKcnRX5P6zJU0xm" />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    )
  }
}

export default App;

// < Gif selectedGif={this.state.selectedGif} />
