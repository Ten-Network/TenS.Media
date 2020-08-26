import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { register } from "../../redux/user/user.actions";

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

  handleSubmit = (event) => {
    event.preventDefault();

    const { password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      const { register } = this.props;

      register(this.state);

      const timeFunction = () => {
        setTimeout(() => {
          this.props.history.push("/");
        }, 3000);
      };
      timeFunction();

      this.setState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
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

const mapDispatchToProps = (dispatch) => ({
  register: (userCredentials) => dispatch(register(userCredentials)),
});

export default withRouter(connect(null, mapDispatchToProps)(Register));
