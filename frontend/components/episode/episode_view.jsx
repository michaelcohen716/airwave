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
              <div className="play-bar-background">
              </div>
              <section id="video-controls" ref={el => this.controls = el}>
                <button className="play-bar-play fa fa-play" onClick={this.playOrPause}></button>
                <button className="play-bar-rewind fa fa-step-backward" onClick={this.playOrPause}></button>

              </section>

            </div>
          </div>
        </div>

      </div>
    );
  }


}


export default EpisodeView;
