import React from 'react';
require ('video.js');
import vjs from 'video.js';
// import EpisodeHolder from './episode_holder';

var videoPlayer = require("video.js")

class EpisodeView extends React.Component {
  constructor(props){
    super(props);
  }




  render(){
    return (
      <div className="episode-grandparent">

        <div className="episode-parent">
        </div>
        <div className="video-container">
          <video controls preload="auto" className="video">

            <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4"></source>
          </video>
        </div>
    </div>
    );
  }


}


export default EpisodeView;
