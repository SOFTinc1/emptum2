import SignIn from "../../components/sign-in/sign-in";
import {
  SignInContainer,
  LoginTextContainer,
  SignInTittle,
  SignInSpan,
} from "./signin-page.styles";

const SignInPage = () => (
  <SignInContainer>
    <LoginTextContainer>
      <SignInTittle>Login</SignInTittle>
    </LoginTextContainer>
    <SignInSpan>
      Kindly input your login details to gain access to the platform
    </SignInSpan>

    <SignIn />
  </SignInContainer>
);

export default SignInPage;
