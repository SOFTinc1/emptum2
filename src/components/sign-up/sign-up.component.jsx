import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.styles.scss";

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;
        if( password !== confirmPassword ) {
            alert("password dont match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            this.setState({ displayName: '', email: '', password: '', confirmPassword: '' });
        } catch(error) {
            console.error(error);
        }
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }


    render () {
        const { displayName, email, password, confirmPassword } = this.state;
        return (

            <div className="sign-up">
                <h1 className="title">i do not have a account</h1>
                <p>sign up with your e-mail and password</p>

                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="displayName" 
                        value={displayName} 
                        type="text" 
                        label="Display Name"
                        onChange={this.handleChange} 
                        required
                    />

                        <FormInput 
                        name="email" 
                        value={email} 
                        type="emai;l" 
                        label="Email"
                        onChange={this.handleChange} 
                        required
                    />

                        <FormInput 
                        name="password" 
                        value={password} 
                        type="password" 
                        label="Password"
                        onChange={this.handleChange} 
                        required
                    />

                    <FormInput 
                        name="confirmPassword" 
                        value={confirmPassword} 
                        type="password" 
                        label="Confirm  Password"
                        onChange={this.handleChange} 
                        required
                    />

                
                    <CustomButton type="submit" value="Submit Form"> sign up </CustomButton>

                </form>
            </div>
        )
    }
}


export default SignUp;