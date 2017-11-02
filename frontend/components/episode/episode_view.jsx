import React from 'react';
import EpisodeShowWatchlist from './episode_show_watchlist';
import {Link} from 'react-router-dom';
import EpisodeCommentForm from './episode_comment_form';


class EpisodeView extends React.Component {
  constructor(props){
    super(props);
    this.playOrPause = this.playOrPause.bind(this);
    this.rewind = this.rewind.bind(this);
    this.forward = this.forward.bind(this);
    this.changeVolume = this.changeVolume.bind(this);
    this.renderFullscreen = this.renderFullscreen.bind(this);
    this.state = {
      paused: true
    };
  }

  playOrPause() {
    if (this.video.paused) {
      this.video.play();
      this.setState({ paused: false});
    } else{
      this.video.pause();
      this.setState({ paused: true});
    }
  }

  rewind() {
    this.video.currentTime -= 1;
  }

  forward(){
    this.video.currentTime += 1;
  }

  changeVolume(){
    if (this.video.volume === 0){
      this.video.volume = 1;
    } else {
      this.video.volume = 0;
    }
  }

  renderFullscreen(){
    this.video.requestFullscreen();

  }

  updateProgress(){
    this.video.addEventListener('timeupdate', function() {
      const progressBar = document.getElementById("progress-bar");
      let percentCompleted = Math.floor((100 / this.video.duration * this.video.currentTime));
      progressBar.value = percentCompleted;
      progressBar.innerHTML = percentCompleted;

    }, false);
  }

  trackProgress(){
    progressInterval = setInterval(updateProgress, 33);
  }

  stopTrackingProgress(){
    clearInterval(progressInterval);
  }

  componentDidMount(){
    this.props.fetchShowEpisode(this.props.match.params.episodeId);
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

  startSeekVideo(){
    this.setState({paused: true});
  }

  endSeekVideo(){
    this.video.seek(time);
  }

  render(){

    if(this.props.episode){
      const fullTitle = this.props.episode.title;
      const showName = fullTitle.substr(0, fullTitle.indexOf(':'));
      const episodeName = fullTitle.split(':')[1];

      var progressBarStyle =
      (<progress className="play-bar-progress" id="progress-bar" min="0" max="100" value="0">
      <span id="progress-bar-render">0</span>%played
      </progress>);


      return (
        <div className="episode-grandparent">

          <div className="episode-parent">
          </div>
          <div className="video-tray">

            <div className="video-container" id="episode">
              <video ref={element => this.video = element}>

                <source src={this.props.episode.videoUrl} type="video/mp4"></source>
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

                  <input type="range" value="0" min="0" max="0"/>




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
          <EpisodeCommentForm/>
        </div>

      );
    }else {
      return (<div></div>);
    }
  }


}


export default EpisodeView;
