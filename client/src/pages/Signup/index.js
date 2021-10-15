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

                console.log(mutationResponse);
                const token = mutationResponse.data.addUser.token;
                Auth.login(token);
            }
            catch (err) {
                console.error(err)
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
                                    <Box>
                                        Passwords Do Not Match!!! 😞
                                    </Box>
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
                            <Box>
                                Sign Up Failed 😞
                            </Box>
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