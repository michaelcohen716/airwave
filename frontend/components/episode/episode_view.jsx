import React from 'react';
// import PlayBar from './play_bar';


class EpisodeView extends React.Component {
  constructor(props){
    super(props);
    this.playOrPause = this.playOrPause.bind(this);
  }

  playOrPause() {
    if (this.video.paused) {

      this.video.play();
    } else{
      this.video.pause();
    }
  }

  componentDidMount(){

  }


  render(){
    return (
      <div className="episode-grandparent">

        <div className="episode-parent">
        </div>
        <div className="video-tray">

          <div className="video-container" id="episode">
            <video ref={element => this.video = element}>

              <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4"></source>
            </video>

            <div className="play-bar-parent">
              <ul id="video-controls" ref={el => this.controls = el}>
                <li><button onClick={this.playOrPause}>Play or Pause</button></li>

              </ul>

            </div>
          </div>
        </div>

      </div>
    );
  }


}


export default EpisodeView;
