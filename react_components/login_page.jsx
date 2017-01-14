import httpUtils from 'http_utils';

class LoginForm extends React.Component {

  constructor() {
    super();
    this.state = {
      email:null,
      password: null
    };

    this.login = this.login.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  login() {
      const paramObj = {email: this.state.email, password: this.state.password};
      alert(httpUtils.post('/auth/login', paramObj));
  }

  handleEmailChange(event) {
     this.setState({'email': event.target.value});
  }

  handlePasswordChange(event) {
      this.setState({'password': event.target.value});
  }


  render() {
    return (
<form method="post">
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" value={this.state.value} onChange={this.handleEmailChange} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" value={this.state.value} onChange={this.handleEmailChange} id="exampleInputPassword1" placeholder="Password">
  </div>

  <button type="submit" class="btn btn-primary" onClick={this.login}>Submit</button>
</form>

);
    }
}

export default LoginForm;
