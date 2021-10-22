import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link as RouterLink } from 'react-router-dom';
import {
    Container,
    Grid,
    TextField,
    Paper,
    Typography,
    Button,
    Box,
    Link as MaterialLink,
    Avatar 
} from '@material-ui/core';

import LockOpenIcon from '@material-ui/icons/LockOpen';

import useStyles from './styles';
import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';
import Beach from '../../assets/images/beach.jpg';

const Login = () => {
    const classes = useStyles();
    
    // initial state for values
    const initialValues = {
        username: '',
        password: ''
    };

    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [login, { error }] = useMutation(LOGIN);

    // submit Login form handling
    const handleFormSubmit = async event => {
        event.preventDefault();
        
        try {
            // execute Login mutation and pass in variable data from form values
            const mutationResponse = await login({ 
                variables: { ...values } 
            });

            const token = mutationResponse.data.login.token;
            Auth.login(token);
        } 
        catch (err) {
            console.error(err);
        }
    };

    // update state based on form input changes
    const handleChange = event => {
        const { name, value } = event.target;

        setValues({
            ...values,
            [name]: value
        });
    };

    // handle validations on blur
    const onBlurValidation = event => {
        const { name, value } = event.target;

        switch (name){
            case 'username':
                if (value === '') {
                    setErrors({ username: 'This field is required.' });
                }
                setTimeout(() => {
                    setErrors({});
                }, 3000);
                break;
            case 'password':
                if (value === '') {
                    setErrors({ password: 'This field is required.' });
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
        <Container className={classes.loginPageContainer_Login} maxWidth='xl'>
            <Box>
                <img src={Beach} className={classes.backgroundImg_Login} alt='beach background'/>
            </Box>
            <Grid 
                container 
                className={classes.formPaperContainer_Login} 
                justifyContent='center' 
                alignItems='center'
            >
                <Paper className={classes.formPaper_Login}>
                    <Grid container direction='column'>
                        <Grid container direction='column' alignItems='center'>
                            <Avatar className={classes.avatar_Login}>
                                <LockOpenIcon fontSize='small' />
                            </Avatar>
                            <Typography variant='subtitle2'>
                                Sign in to your Xavy account
                            </Typography>
                        </Grid>
                        <form onSubmit={handleFormSubmit}>
                            <Grid container direction='column'>
                                <TextField 
                                    label='Username'
                                    name='username'
                                    value={values.username}
                                    placeholder='Username'
                                    required
                                    color='primary'
                                    autoComplete='off'
                                    onChange={handleChange}
                                    onBlur={onBlurValidation}
                                    error={Boolean(errors.username)}
                                    helperText={(errors.username)}
                                    InputProps={{classes: {
                                        root: classes.input_Login,
                                        focused: classes.inputFocused_Login
                                    } }}
                                    InputLabelProps={{ classes: { root: classes.inputLabel_Login } }}
                                />
                                <TextField 
                                    label='Password'
                                    name='password'
                                    value={values.password}
                                    placeholder='********'
                                    type='password'
                                    required
                                    color='primary'
                                    autoComplete='off'
                                    onChange={handleChange}
                                    onBlur={onBlurValidation}
                                    error={Boolean(errors.password)}
                                    helperText={(errors.password)}
                                    InputProps={{classes: {
                                        root: classes.input_Login,
                                        focused: classes.inputFocused_Login
                                    } }}
                                    InputLabelProps={{ classes: { root: classes.inputLabel_Login } }}
                                />
                                <Button className={classes.loginBtn_Login} type='submit'>
                                    <Typography>
                                        Sign In
                                    </Typography>
                                </Button>
                            </Grid>
                        </form>
                        {error &&
                            <Grid container className={classes.failedContainer_Login} direction='column' alignItems='center'>
                                <Box>
                                    <Typography className={classes.failed_Login} variant='body2'>
                                        Login Failed 😞
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography className={classes.failed_Login} variant='body2'>
                                        Username/Password does not match!
                                    </Typography>
                                </Box>
                            </Grid>
                        }
                        <Box className={classes.haveAccountBox_Login}>
                            <Typography variant='body2'>
                                Don't have an account?
                            </Typography>
                        </Box>
                        <MaterialLink
                            to='/signup'
                            component={RouterLink}
                            underline='none'
                        >
                            <Button className={classes.createAccountBtn_Login}>
                                <Typography>
                                    Create your Xavy account
                                </Typography>
                            </Button>
                        </MaterialLink>
                    </Grid>
                </Paper>
            </Grid>
        </Container>
    );
};

export default Login;