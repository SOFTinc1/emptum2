import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import "./sign-in.styles.scss";


class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password, } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: ''});
        } catch(error) {
            console.log(error);
        }

    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>i already have an account</h2>
                <p>sign in with your email and password</p>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        value={this.state.email} 
                        type="email" 
                        label="email"
                        handleChange={this.handleChange} 
                        required
                    />

                    <FormInput 
                        name="password" 
                        value={this.state.password} 
                        type="password" 
                        label="password" 
                        handleChange={this.handleChange} 
                        required
                    />

                    <div className="buttons">
                        <CustomButton type="submit" value="Submit Form"> sign in </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> sign in with google </CustomButton>    
                    </div>
                    
                </form>
            </div>
        )
    } 
}


export default SignIn;