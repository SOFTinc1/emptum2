import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import {
  SignupContainer,
  ShowIcon,
  HideIcon,
  ButtonsBarContainer,
  PasswordExtra,
  SignUpRedirect,
  Span
} from "./sign-up.styles";

class SignUp extends React.Component {
  state = { displayName: "", email: "", password: "" };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password } = this.state;

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      createUserProfileDocument(user, { displayName });
    } catch (error) {
      console.error(error);
    }

    this.setState({
      displayName: "",
      email: "",
      password: "",
    });
  };

  render() {
    const { displayName, email, password } = this.state;

    return (
      <SignupContainer>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email Address"
            required
          />
          <FormInput
            type={this.state.showPassword ? "text" : "password"}
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />

          <div
            onClick={() =>
              this.setState({ showPassword: !this.state.showPassword })
            }
          >
            {this.state.showPassword ? <ShowIcon /> : <HideIcon />}
          </div>

          <PasswordExtra>
            <SignUpRedirect>
              already got an account? goto <Span to="/signin">sign in</Span>
            </SignUpRedirect>
          </PasswordExtra>

          <ButtonsBarContainer>
            <CustomButton type="submit">Sign Up</CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignupContainer>
    );
  }
}

export default SignUp;
