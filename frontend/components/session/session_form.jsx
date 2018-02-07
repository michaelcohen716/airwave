import React from 'react';
import {withRouter} from 'react-router-dom';
import Link from 'react-router';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.submitAction(user).then(()=> this.props.history.push('/')).then(this.props.closeModal);
  }

  update(field){
    return(e)=>{
      this.setState({[field]:e.target.value});
    };
  }

  renderErrors(){
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={i}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  openModal() {
    if (this.props.formType === 'login'){
      return <button onClick={this.props.switchModal}>Sign Up</button>;
    } else {
      return <button onClick={this.props.switchModal}>Log In</button>;
    }
  }

  demoLogin(e){
    e.preventDefault();
    const demoUser = {username: "maurice", password: "password"};
    this.props.login(demoUser).then(()=> this.props.history.push('/')).then(this.props.closeModal);
  }

  render(){
    const submitText = this.props.formType === "login" ? "Log in" : "Sign up";
    const actionText = this.props.formType === "login" ? "Log in to Airwave" : "Sign up for Airwave";
    return (
    <div className="session-form-container" onClick={e=> e.stopPropagation()}>
          <div className="session-form">
            <section className="session-column">
              <div className="session-column-fb">
                <div className="fb-login">
                  <div className="fb-login-head">
                    <a href="https://facebook.com" className="fb-login-instantly">Log in instantly with Facebook</a>
                  </div>
                  <span className="fb-login-recommended">(Upcoming Feature)</span>
                  <a><div className="fb-login-button"></div></a>
                  <ul className="fb-login-attributes">
                    <li>Share what you love with your friends</li>
                    <li>See the videos your friends want to share</li>
                    <li>Improve your recommendations</li>
                  </ul>
                </div>
            </div>
            </section>

            <section className="session-divider">
              <span className="session-divider-line"></span>
              <div className="session-divider-or">
                <span>OR</span>
              </div>
            </section>

            <section className="session-column">
              <div className="session-column-airwave">
                <form onSubmit={this.handleSubmit} className="session-form-box">
                  <span className="airwave-login-head">{actionText}</span>

                  <section className="session-inputs">
                    <input type="text" value={this.state.username}
                      placeholder="username"
                      onChange={this.update('username')}
                      className="session-box" />

                    <input type="password" value={this.state.password}
                      placeholder="password"
                      onChange={this.update('password')}
                      className="session-box" />
                  </section>

                  <a href="" className="forgot-password">
                    We hope you didn't forget your password
                  </a>
                  <input type="submit" value={submitText}
                                       className="login-button"/>
                  <button  value="DemoLogIn"
                                       onClick={this.demoLogin}
                                       className="demo-login">
                                       Demo Log In
                  </button>
                </form>
                <ul>{this.renderErrors()}</ul>
              </div>
            </section>
          </div>

      </div>
    );
  }
}

export default withRouter(SessionForm);
