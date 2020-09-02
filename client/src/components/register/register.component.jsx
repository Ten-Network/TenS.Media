import React from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./register.styles.scss";

class Register extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    await event.preventDefault();

    const { name, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) alert("Passwords do not match");
    else {
      const newUser = {
        name: name,
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

        await config.post("/register", body);

        await this.props.history.push("/");

        await this.setState({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      } catch (error) {
        alert(error.response.data);
      }
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="register">
        <h2 className="title">Sign Up</h2>
        <span>Create your account</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="name"
            type="text"
            label="Name"
            handleChange={this.handleChange}
            value={this.state.name}
            required
          />
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
          <FormInput
            name="confirmPassword"
            type="password"
            label="Confirm Password"
            handleChange={this.handleChange}
            value={this.state.confirmPassword}
            minLength="6"
          />
          <CustomButton type="submit">sign up</CustomButton>
          <h4 className="option">
            Already have an account?
            <Link className="route" to="/signin">
              Sign In
            </Link>
          </h4>
        </form>
      </div>
    );
  }
}

export default withRouter(Register);
