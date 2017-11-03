import { connect } from 'react-redux';
import { createComment } from '../../actions/comment_actions.js';
import React from 'react';
import {withRouter} from 'react-router-dom';

class EpisodeCommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.props);
    const episodeId = parseInt(this.props.match.params.episodeId);
    const comment = Object.assign({}, this.state, {
      episode_id: episodeId
    });
    this.props.createComment({comment}).then( () => this.setState({body:' '}));

  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  render() {
    return (
      <div className="comment-form holder">
        <form onSubmit={this.handleSubmit}>

          <label className="comment-head">Comment</label>
          <br/>

          <textarea className="comment-text-area"
            cols="93"
            rows="4"
            value={this.state.body}
            onChange={this.update("body")}
          />
          <br/>
          <input className="comment-submit" type="submit" />
        </form>

      </div>
    );
 }
}


const mapDispatchToProps = dispatch => ({
  createComment: comment => dispatch(createComment(comment))
});

export default withRouter(connect(
  null,
  mapDispatchToProps
)(EpisodeCommentForm));
