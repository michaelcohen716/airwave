import React from 'react';
import {Link} from 'react-router-dom';
import EpisodeCommentForm from './episode_comment_form';
import EpisodeCommentIndex from './episode_comment_index';

class EpisodeView extends React.Component {
  constructor(props){
    super(props);
    this.playOrPause = this.playOrPause.bind(this);
    this.rewind = this.rewind.bind(this);
    this.forward = this.forward.bind(this);
    // this.changeVolume = this.changeVolume.bind(this);
    // this.renderFullscreen = this.renderFullscreen.bind(this);
    this.state = {
      paused: true,
      duration: 0,
      currentTime: 0,
      rendered: false
    };
    this.video = document.getElementById("video");

    this.updateBar = this.updateBar.bind(this);
    this.updateProgress = this.updateProgress.bind(this);
  }

  playOrPause() {
    let video = document.getElementById("video");
    if (video.paused) {
      video.play();
      this.setState({ paused: false});
    } else{
      video.pause();
      this.setState({ paused: true});
    }
  }

  rewind() {
    let video = document.getElementById("video");
    video.currentTime -= 5;
  }

  forward(){
    let video = document.getElementById("video");
    video.currentTime += 5;
  }

  changeVolume(){
    let video = document.getElementById("video");

    if (video.volume === 0){
      video.volume = 1;
    } else {
      video.volume = 0;
    }
  }

  renderFullscreen(){
    // this.video.requestFullscreen();

  }

  setProgress(e){
    this.tag.currentTime = e.target.value;
  }

  updateProgress(){
    this.setState({
      duration: this.getDuration(),
      currentTime: this.getCurrentTime()
    });
  }

  getDuration(){
      return (
      document.getElementById("video").duration
    );
  }

  getCurrentTime(){
    return (
      document.getElementById("video").currentTime
    );
  }

  updateBar(){
    this.setState({
      currentTime: this.getCurrentTime()
    });
  }

  componentDidMount(){
    this.props.fetchShowEpisode(this.props.match.params.episodeId);
    // if(this.props.episode)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.episode) {
      if(this.video){
        this.video.load();
      }
    }
    if(this.props.match.params.episodeId !== nextProps.match.params.episodeId) {
      this.props.fetchShowEpisode(nextProps.match.params.episodeId);
    }
  }

  // startSeekVideo(){
  //   this.setState({paused: true});
  // }
  //
  // endSeekVideo(){
  //   this.video.seek(time);
  // }

  render(){

    if(this.props.episode){
      const fullTitle = this.props.episode.title;
      const showName = fullTitle.substr(0, fullTitle.indexOf(':'));
      const episodeName = fullTitle.split(':')[1];




      return (
        <div className="episode-grandparent">

          <div className="episode-parent">
          </div>
          <div className="video-tray">

            <div className="video-container" id="episode">
              <video id="video" ref={element => this.tag = element}
                onCanPlayThrough={this.updateProgress}
                onTimeUpdate={this.updateBar}

                src={this.props.episode.videoUrl} type="video/mp4">
              </video>

              <div className="play-bar-parent">
                <div className="play-bar-background">
                </div>
                <section id="video-controls" ref={el => this.controls = el}>
                  <button className={(this.state.paused) ? "play-bar-play fa fa-play" : "play-bar-pause fa fa-pause"}
                    onClick={this.playOrPause}>
                  </button>
                  <button className="play-bar-rewind fa fa-step-backward"
                    onClick={this.rewind}>
                  </button>
                  <button className="play-bar-forward fa fa-step-forward"
                    onClick={this.forward}>
                  </button>
                  <div className="progress-bar-holder" >
                    <input type="range"
                           step="1"
                           id="progress-bar"
                           className="progress-bar"
                           min="0"
                           max={this.state.duration}
                           onChange={e => this.setProgress(e)}
                           value={this.state.currentTime}/>

                  </div>




                  <button className="play-bar-volume fa fa-volume-up"
                    onClick={this.changeVolume}>
                  </button>
                  <button className="play-bar-settings fa fa-cog">

                  </button>
                  <button className="play-bar-fullscreen fa fa-arrows-alt"
                    onClick={this.renderFullscreen}>

                  </button>
                </section>

              </div>
            </div>
            <div className="video-description-box">
              <span className="episode-airwave-logo">airwave</span>
              <Link to={`/series/${this.props.episode.series_id}`} className="episode-show-show">{showName}</Link>
              <span className="episode-show-episode">{episodeName}</span>
            </div>
            <section className="video-engagement-bar">

              <button className="engagement-details fa fa-info-circle" id="info-circle"></button>
              <button className="engagement-details-text"> details</button>

              <button className="engagement-comments fa fa-comment" id="comments-logo"></button>
              <button className="engagement-comments-text"> comments</button>

              <button className="engagement-tweet fa fa-twitter" id="tweets-logo"></button>
              <button className="engagement-tweet-text"> tweet</button>

              <button className="engagement-facebook fa fa-facebook-square" id="facebook-logo"></button>
              <button className="engagement-facebook-text"> facebook</button>

              <button className="engagement-share fa fa-share" id="share-logo"></button>
              <button className="engagement-share-text"> share</button>

            </section>
          </div>
          <EpisodeCommentIndex
            comments={this.props.comments}
            />
        </div>

      );
    }else {
      return (<div></div>);
    }
  }


}


export default EpisodeView;
