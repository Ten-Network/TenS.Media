import React from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./log-in.styles.scss";

class LogIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    await event.preventDefault();

    const { email, password } = this.state;

    const newUser = {
      username: email,
      email: email,
      password: password,
    };

    try {
      const config = axios.create({
        baseURL: "/",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const body = JSON.stringify(newUser);

      await config.post("/login", body);

      await this.props.history.push("/");
    } catch (error) {
      alert(error.response.data);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="log-in">
        <h2 className="title">Sign In</h2>
        <span>Sign into your account</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="Email"
            handleChange={this.handleChange}
            value={this.state.email}
            required
          />
          <FormInput
            name="password"
            type="password"
            label="Password"
            handleChange={this.handleChange}
            value={this.state.password}
            minLength="6"
          />
          <div className="buttons">
            <CustomButton type="submit">sign in</CustomButton>
          </div>
          <h4 className="option">
            Don't have an account?
            <Link className="route" to="/signup">
              Sign Up
            </Link>
          </h4>
        </form>
      </div>
    );
  }
}

export default withRouter(LogIn);
