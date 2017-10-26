import React from 'react';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.submitAction(user).then(()=> this.props.history.push('/'));
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
          <li key={`error-${i}`}>
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

  render(){

    const submitText = this.props.formType === "login" ? "Log in" : "Sign up";
    return (
    <div className="session-form-container" onClick={e=> e.stopPropagation()}>
          <div className="session-form">
            <section className="session-column">
              <div className="session-column-fb">
                <div className="fb-login">
                  <div className="fb-login-head">
                    <span className="fb-login-instantly">Log in instantly with Facebook</span>
                  </div>
                  <span className="fb-login-recommended">(Recommended)</span>
                  <button className="fb-login-button"></button>
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
                {this.renderErrors()}
                <form onSubmit={this.handleSubmit} className="session-form-box">
                  <span className="airwave-login-head">Log in to Airwave</span>

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

                  <span className="forgot-password">
                    Forgot your password/email?
                  </span>
                  <input type="submit" value={submitText} className="login-button"/>
                </form>
              </div>
            </section>
          </div>

      </div>
    );
  }
}

export default SessionForm;
