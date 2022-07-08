import SignUp from '../../components/sign-up/sign-up';

import { SignUpContainer, SignUpTextContainer, SignUpTittle, SignUpSpan} from './signup-page.styles';



const SignUpPage = () => (
  <SignUpContainer>

    <SignUpTextContainer>
      <SignUpTittle>Create an account</SignUpTittle>
    </SignUpTextContainer>

    <SignUpSpan>Kindly register to gain access to the platform.</SignUpSpan>

    <SignUp />
  </SignUpContainer>
);

export default SignUpPage;