import { React, Component } from 'react'

class Register extends Component{
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  onNameChange = (event) => {
    this.setState({name: event.target.value})
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  onSubmitRegister = (e) => {
    e.preventDefault();
    console.log(this.state)
    fetch('http://localhost:5000/register', {
      method: "post",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        id:123,
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(user => {
        console.log(user)
        if (user[0].name) {
          this.props.loadUser(user)
          this.props.onRouteChange('home')
        } else {
          console.log("Error registering")
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
              <legend className="f4 fw6 ph0 mh0 center">Register</legend>
              <div className="mt3">
              <div className="center">
                  <label className="db fw6 lh-copy f6" htmlFor="name">
                    Name
                  </label>
                </div>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.onNameChange}
                />
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
                onClick={this.onSubmitRegister}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Register"
              />
            </div>
            <div className="lh-copy mt3 center">
              <a onClick={() => this.props.onRouteChange('signin')} href="#0" className="f6 link dim black db">
                Have an account? Sign in
              </a>
            </div>
          </form>
        </main>
      </div>
    );
  }
	
}

export default Register
