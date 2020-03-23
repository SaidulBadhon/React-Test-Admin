// in src/MyLoginPage.js
import React, { useState } from "react";
import { useLogin, useNotify } from "react-admin";

import "./MyLoginPage.css";

import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import { TextField, Button } from "@material-ui/core";

const MyLoginPage = ({ theme }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = useLogin();
  const notify = useNotify();
  const submit = e => {
    e.preventDefault();
    login({ email, password }).catch(() => notify("Invalid email or password"));
  };

  return (
    <div className="LoginPageBackground">
      <div className="container" id="container">
        <div>
          <div className="form-container sing-in-container">
            <form onSubmit={submit}>
              <h1>Sign in</h1>
              <div className="social-container">
                <a href="https://facebook.com/SaidulBadhon" className="social">
                  <FacebookIcon />
                </a>
                <a href="https://facebook.com/SaidulBadhon" className="social">
                  <TwitterIcon />
                </a>
                <a href="https://facebook.com/SaidulBadhon" className="social">
                  <FacebookIcon />
                </a>
              </div>
              <span>or use your account</span>

              <TextField
                className="InputField"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={e => setEmail(e.target.value)}
              />
              <TextField
                className="InputField"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={e => setPassword(e.target.value)}
              />
              <a href="#/dsagd">Forgot your password ?</a>
              <div className="IamaBtton">
                <Button
                  variant="contained"
                  size="large"
                  fullWidth="true"
                  color="secondary"
                  type="submit"
                >
                  Sing In
                </Button>
              </div>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-right">
                <h1>Welcome back!</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*
      <div className="LoginForm">
        <form onSubmit={submit}>
          <input
            name="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            name="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button>hELLO</button>
        </form>
      </div>
      <Notification />
</div>*/}
    </div>
  );
};

export default MyLoginPage;
