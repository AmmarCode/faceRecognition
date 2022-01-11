import React from "react";

const Signin = ({ onRouteChange }) => {
  return (
    <div className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l 6 shadow-5 center">
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
              />
            </div>
          </fieldset>
          <div className="center">
            <input
							onClick={() => onRouteChange('home')}
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Sign in"
            />
          </div>
          <div className="lh-copy mt3 center">
            <a onClick={() => onRouteChange('register')} href="#0" className="f6 link dim black db">
              Register
            </a>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Signin;
