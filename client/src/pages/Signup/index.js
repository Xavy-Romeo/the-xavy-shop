import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import useStyles from './styles';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import Beach from '../../assets/images/beach.jpg';

const SignUp = () => {
    const classes = useStyles();
    
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
    };

    const [formValues, setFormValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [addUser, { error }] = useMutation(ADD_USER);

    const [passwordsMatch, setPasswordsMatch] = useState(true);

    // submit Sign Up form handling
    const handleFormSubmit = async event => {
        event.preventDefault();

        if (formValues.password === formValues.confirmPassword) {
            try {
                // execute addUser mutation and pass in variable data from form values
                const mutationResponse = await addUser({
                    variables: { ...formValues }
                });

                const token = mutationResponse.data.addUser.token;
                Auth.login(token);
            }
            catch (err) {
                console.error(err);
                setErrors({duplicate: 'Username or Email already Exists!'})
            }
        }
        else {
            setPasswordsMatch(false);

            setTimeout(() => {
                setPasswordsMatch(true);
            }, 3000);
        }
    };

    // update state based on form input changes
    const handleChange = event => {
        const { name, value } = event.target;

        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    // handle validations on blur
    const onBlurValidation = event => {
        const { name, value } = event.target;
        let regex = '';

        switch (name){
            case 'firstName':
                regex = new RegExp(/^[a-zA-Z]+$/).test(value);
                if (value === '') {
                    setErrors({ firstName: 'This field is required.' });
                }
                if (!regex) {
                    setErrors({ firstName: 'Please only enter letters.' });
                }
                setTimeout(() => {
                    setErrors({});
                }, 3000);
                break;
            case 'lastName':
                regex = new RegExp(/^[a-zA-Z]+$/).test(value);
                if (value === '') {
                    setErrors({ lastName: 'This field is required.' });
                }
                if (!regex) {
                    setErrors({ lastName: 'Please only enter letters.' });
                }
                setTimeout(() => {
                    setErrors({});
                }, 3000);
                break;
            case 'username':
                if (value === '') {
                    setErrors({ username: 'This field is required.' });
                    
                    setTimeout(() => {
                        setErrors({});
                    }, 3000);
                }
                break;

            case 'email': 
                regex = new RegExp(/^\S+@\S+\.\S+$/).test(value);
                if (value === '') {
                    setErrors({ email: 'This field is required.' });
                }
                if (!regex) {
                    setErrors({ email: 'Please enter a proper email format.' });
                }
                setTimeout(() => {
                    setErrors({});
                }, 3000);
                break;
            default: 
                break;
        }
    };
    
    return (
        <Container className={classes.signupPageContainer_Signup} maxWidth='xl'>
            <Box>
                <img src={Beach} className={classes.backgroundImg_Signup} alt='beach background'/>
            </Box>
            <Grid 
                container 
                className={classes.formPaperContainer_Signup} 
                justifyContent='center' 
                alignItems='center'
            >
                <Paper className={classes.formPaper_Signup}>
                    <Grid container direction='column'>
                        <Grid container direction='column' alignItems='center'>
                            <Avatar className={classes.avatar_Signup}>
                                <PersonAddIcon fontSize='small' />
                            </Avatar>
                            <Typography variant='subtitle2'>
                                Create your Xavy account
                            </Typography>
                        </Grid>
                        <form onSubmit={handleFormSubmit}>
                            <Grid container direction='column'>
                                <TextField 
                                    label='First Name'
                                    name='firstName'
                                    value={formValues.firstName}
                                    placeholder='First Name'
                                    required
                                    color='primary'
                                    autoComplete='off'
                                    onChange={handleChange}
                                    onBlur={onBlurValidation}
                                    error={Boolean(errors.firstName)}
                                    helperText={(errors.firstName)}
                                    InputProps={{classes: {
                                        root: classes.input_SignUp,
                                        focused: classes.inputFocused_SignUp
                                    } }}
                                    InputLabelProps={{ classes: { root: classes.inputLabel_SignUp } }}
                                />
                                <TextField 
                                    label='Last Name'
                                    name='lastName'
                                    value={formValues.lastName}
                                    placeholder='Last Name'
                                    required
                                    color='primary'
                                    autoComplete='off'
                                    onChange={handleChange}
                                    onBlur={onBlurValidation}
                                    error={Boolean(errors.lastName)}
                                    helperText={(errors.lastName)}
                                    InputProps={{classes: {
                                        root: classes.input_SignUp,
                                        focused: classes.inputFocused_SignUp
                                    } }}
                                    InputLabelProps={{ classes: { root: classes.inputLabel_SignUp } }}
                                />
                                <TextField 
                                    label='Username'
                                    name='username'
                                    value={formValues.username}
                                    placeholder='Username'
                                    required
                                    color='primary'
                                    autoComplete='off'
                                    onChange={handleChange}
                                    onBlur={onBlurValidation}
                                    error={Boolean(errors.username)}
                                    helperText={(errors.username)}
                                    InputProps={{classes: {
                                        root: classes.input_SignUp,
                                        focused: classes.inputFocused_SignUp
                                    } }}
                                    InputLabelProps={{ classes: { root: classes.inputLabel_SignUp } }}
                                />
                                <TextField 
                                    label='Email'
                                    name='email'
                                    value={formValues.email}
                                    placeholder='Email'
                                    type='email'
                                    required
                                    color='primary'
                                    onChange={handleChange}
                                    onBlur={onBlurValidation}
                                    error={Boolean(errors.email)}
                                    helperText={(errors.email)}
                                    InputProps={{classes: {
                                        root: classes.input_SignUp,
                                        focused: classes.inputFocused_SignUp
                                    } }}
                                    InputLabelProps={{ classes: { root: classes.inputLabel_SignUp } }}
                                />
                                <TextField 
                                    label='Password'
                                    name='password'
                                    value={formValues.password}
                                    placeholder='********'
                                    type='password'
                                    required
                                    color='primary'
                                    autoComplete='off'
                                    onChange={handleChange}
                                    InputProps={{classes: {
                                        root: classes.input_SignUp,
                                        focused: classes.inputFocused_SignUp
                                    } }}
                                    InputLabelProps={{ classes: { root: classes.inputLabel_SignUp } }}
                                />
                                <TextField 
                                    label='Confirm Password'
                                    name='confirmPassword'
                                    value={formValues.confirmPassword}
                                    placeholder='********'
                                    type='password'
                                    required
                                    color='primary'
                                    autoComplete='off'
                                    onChange={handleChange}
                                    InputProps={{classes: {
                                        root: classes.input_SignUp,
                                        focused: classes.inputFocused_SignUp
                                    } }}
                                    InputLabelProps={{ classes: { root: classes.inputLabel_SignUp } }}
                                />
                                {!passwordsMatch && 
                                    <Grid container justifyContent='center'>
                                        <Box>
                                            <Typography className={classes.failed_Signup} variant='body2'>
                                                Passwords Do Not Match!!! 😞
                                            </Typography>
                                        </Box>
                                    </Grid>
                                }
                                <Box className={classes.termsLinksContent_Signup}>
                                    <Typography  variant='caption' >
                                        By clicking Create Account, you acknowledge you have read and agreed to our
                                        <Link className={classes.termsLinks_Signup} variant='caption'>
                                            Terms of Use
                                        </Link>
                                        and 
                                        <Link className={classes.termsLinks_Signup} variant='caption'>
                                            Privacy Policy
                                        </Link>
                                        .
                                    </Typography>
                                </Box>
                                <Button className={classes.createAccountBtn_Signup} type='submit'>
                                    <Typography>
                                        Create Account
                                    </Typography>
                                </Button>
                            </Grid>
                        </form>
                        {error && 
                            <Grid container direction='column' alignItems='center' className={classes.failedContainer_Signup}>
                                <Box>
                                    <Typography className={classes.failed_Signup} variant='body2'>
                                        Sign Up Failed 😞
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography className={classes.failed_Signup} variant='body2'>
                                        {errors.duplicate}
                                    </Typography>
                                </Box>
                            </Grid>
                        }
                        <Box className={classes.haveAccountBox_Signup}>
                            <Typography variant='body2'>
                                Already have an account?
                            </Typography>
                        </Box>
                        <Link
                            href='/login'
                            underline='none'
                        >
                            <Button className={classes.signInBtn_Signup}>
                                <Typography>
                                    Sign In
                                </Typography>
                            </Button>
                        </Link>
                    </Grid>
                </Paper>
            </Grid>
        </Container>
    );
};

export default SignUp;