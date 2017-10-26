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

    const submitText = this.props.formType === "login" ? "Login" : "Signup";
    return (
    <div className="session-form-container" onClick={e=> e.stopPropagation()}>
        {this.renderErrors()}
          <div className="session-form">
            <section className="session-column">
              <div className="fb-login">
                <div className="fb-login-head">
                  <span>Log in instantly with Facebook</span>
                </div>
                <button className="fb-login-button"></button>
                <ul className="fb-login-attributes">
                  <li>Share what you love with your friends</li>
                  <li>See the videos your friends want to share</li>
                  <li>Improve your recommendations</li>
                </ul>
              </div>
            </section>

            <section className="session-column">
              <form onSubmit={this.handleSubmit} className="session-form-box">
                Log in to Airwave
                <input type="text" value={this.state.username}
                  placeholder="username"
                  onChange={this.update('username')}
                  className="session-box" />

                <input type="password" value={this.state.password}
                  placeholder="password"
                  onChange={this.update('password')}
                  className="session-box" />


                <input type="submit" value={submitText} />
              </form>
            </section>
          </div>

      </div>
    );
  }
}

export default SessionForm;
