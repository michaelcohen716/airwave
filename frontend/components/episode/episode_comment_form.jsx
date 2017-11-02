import { connect } from 'react-redux';
import { createComment } from '../../actions/comment_actions.js';
import React from 'react';

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
    const episodeId = parseInt(this.props.match.params.episodeId);
    const comment = Object.assign({}, this.state, {
      episode_id: episodeId
    });
    this.props.createComment({comment});
  }

  update(body) {
    return e => this.setState({ [body]: e.currentTarget.value });
  }

  render() {
    return (
      <div className="comment-parent">
        <form onSubmit={this.handleSubmit}>

          <label>Comment</label>
          <br/>

          <textarea
            cols="30"
            rows="10"
            value={this.state.body}
            onChange={this.update("body")}
          />
          <br/>
          <input type="submit" />
        </form>

      </div>
    );
 }
}


const mapDispatchToProps = dispatch => ({
  createComment: comment => dispatch(createComment(comment))
});

export default connect(
  null,
  mapDispatchToProps
)(EpisodeCommentForm);
