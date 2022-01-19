import { React, Component } from "react";

class  Signin extends Component{
  constructor(props) {
    super(props);
    this.state = {
      SignInEmail: '',
      SignInPassword: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({SignInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({SignInPassword: event.target.value})
  }

  onSubmitSignIn = (e) => {
    e.preventDefault();
    console.log(this.state)
    fetch('http://localhost:5000/signin', {
      method: "post",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        email:this.state.SignInEmail,
        password: this.state.SignInPassword
      })
    })
      .then(res => res.json())
      .then(user => {
        console.log(user)
        if (user[0].id) {
          this.props.loadUser(user[0])
          this.props.onRouteChange("home")
        } else {
          console.log("Error siging in")
        }        
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="relative br3 ba b--black-10 mv4 w-100 w-50-m w-25-l 6 shadow-5 center">
        <main className="pa4 black-80">
          <form className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f4 fw6 ph0 mh0 center">Sign In</legend>
              <div className="mt3">
                <div className="center">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">
                    Email
                  </label>
                </div>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <div className="center">
                  <label className="db fw6 lh-copy f6" htmlFor="password">
                    Password
                  </label>
                </div>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="center">
              <input
                onClick={this.onSubmitSignIn}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign in"
              />
            </div>
            <div className="lh-copy mt3 center">
              <a
                onClick={() => this.props.onRouteChange("register")}
                href="#0"
                className="f6 link dim black db"
              >
                Register
              </a>
            </div>
          </form>
        </main>
      </div>
    );
  }  
};

export default Signin;
