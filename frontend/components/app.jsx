import React from 'react';
import { Provider } from 'react-redux';
import {
  Route, Redirect, Switch,
  Link, HashRouter}
  from 'react-router-dom';
import NavBarContainer from './nav/nav_bar_container';
import ShowcaseComponent from './carousel/showcase_component';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SessionModal from './session_modal';
import {withRouter} from 'react-router-dom';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import LogInContainer from './session/login_form_container';
import SignUpContainer from './session/signup_form_container';
import HomePageBody from './home_page_body';
import EpisodeViewContainer from './episode/episode_view_container';
import ShowShowContainer from './show_show/show_show_container';
import SearchPage from './search_page';
import EpisodeIndex from './episode/episode_index';
import Footer from './footer';

const App = ({ modal, closeModal }) => {
  return (
    <div className="parent-parent">

      <NavBarContainer />
      <Route exact path="/" component={ShowcaseComponent} />
      <SessionModal component={modal === "login" ? LogInContainer : SignUpContainer}
        modal={modal}
        closeModal={closeModal} />
      <Route exact path="/" component={HomePageBody} />
      <Route path="/episodes/:episodeId" component={EpisodeViewContainer} />
      <Route path="/series/:seriesId" component={ShowShowContainer} />
      <Route path="/search" component={SearchPage} />
      <Route exact path="/episodes" component={EpisodeIndex} />


    </div>
  );
};

const mapStateToProps = ({ ui: {modal }}) => {
  return {
    modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
