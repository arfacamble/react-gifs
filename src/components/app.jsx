import React, { Component } from 'react';
import giphy from 'giphy-api';

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
      selectedGifId: "8RnFKcnRX5P6zJU0xm"
    };
  }

  search = (query) => {
    giphy('').search({
      q: query,
      rating: 'g',
      limit: 12
    }, (err, result) => {
      this.setState({ gifs: result.data.slice(0, 12) });
    });
  }

  selectGif = (id) => {
    this.setState({ selectedGifId: id });
  }

  render() {
    const { gifs, selectedGifId } = this.state;
    return (
      <div>
        <div className="left-scene">
          <SearchBar refreshGifList={this.search} />
          <div className="selected-gif">
            <Gif id={selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
