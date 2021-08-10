import React from 'react';
import Gif from './gif';

// class GifList extends Component {
//   render() {
//     const { gifs } = this.props;
//     return (
//       <div className="gif-list">
//         {gifs.map((gif) => <Gif id={gif.id} key={gif.id} selectGif={this.props.selectGif} />)}
//       </div>
//     );
//   }
// }

const GifList = ({ gifs, selectGif }) => {
  return (
    <div className="gif-list">
      {gifs.map(({ id }) => <Gif id={id} key={id} selectGif={selectGif} />)}
    </div>
  );
};

export default GifList;
