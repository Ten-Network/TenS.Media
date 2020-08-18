import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'; 

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { logIn } from '../../redux/user/user.actions';

import './log-in.styles.scss';

class LogIn extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        const { logIn } = this.props;

        logIn(this.state);   
        
        const timeFunction = () => {
            setTimeout(() => { 
                this.props.history.push('/')
            }, 1500);
        }
        timeFunction();

        this.setState({
            email: '',
            password: '',
        });
    };

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value })
    };

    render() {
        return (
            <div className='log-in'>
                <h2 className='title'>Sign In</h2>
                <span>Sign into your account</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email'
                        label='Email'
                        handleChange={this.handleChange}
                        value={this.state.email}
                        required
                    />
                    <FormInput
                        name='password' 
                        type='password'
                        label='Password'
                        handleChange={this.handleChange}
                        value={this.state.password}
                        minLength='6'
                    />
                    <div className='buttons'>
                        <CustomButton 
                            type='submit'
                        >
                            sign in
                        </CustomButton>
                    </div>
                    <h4 className='option'>
                        Don't have an account? 
                        <Link className='route' to='/signup'>
                            Sign Up
                        </Link>
                    </h4>
                </form>
            </div>
        );
    }
};

const mapDispatchToProps = dispatch => ({
    logIn: userCredentials => dispatch(logIn(userCredentials))
});

export default withRouter(
    connect(
        null,
        mapDispatchToProps
    )(LogIn)
);