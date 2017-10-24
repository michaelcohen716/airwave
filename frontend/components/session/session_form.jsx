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

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.loggedIn) {
  //     this.props.history.push('/');
  //   }
  // }

  render(){
    const submitText = this.props.formType === "login" ? "Login" : "Signup";
    return (
    <div className="session-form-container">
        // 
        <form onSubmit={this.handleSubmit} className="session-form-box">
          <label>Username
            <input type="text" value={this.state.username}
                   onChange={this.update('username')}
                   className="login-input" />
          </label>

          <label>Password
            <input type="password" value={this.state.password}
                    onChange={this.update('password')}
                    className="login-input" />
          </label>

          <input type="submit" value={submitText} />
        </form>

      </div>
    );
  }
}

export default SessionForm;
