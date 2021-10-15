import React, { useState } from 'react';

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

    const [values, setValues] = useState(initialValues);

    // update state based on form input changes
    const handleChange = event => {
        const { name, value } = event.target;

        setValues({
            ...values,
            [name]: value
        });
    };
    
    return (
        <Container maxWidth='xl' style={{marginTop: '150px'}}>
            <Grid container justifyContent='center'>
                <Paper 
                    style={{
                        marginBottom: '50px',
                        width: '500px',
                        padding: '30px',
                        paddingBottom: '50px'
                    }}>
                    <Grid container direction='column'>
                        <Grid container direction='column' alignItems='center'>
                            <Avatar style={{background:'blue', padding: '35px', marginBottom: '10px'}}>
                                <PersonAddIcon fontSize='large' />
                            </Avatar>
                            <Typography variant='subtitle1'>
                                Create your Xavy account
                            </Typography>
                        </Grid>
                        <form type='submit'>
                            <Grid container direction='column'>
                                <TextField 
                                    label='First Name'
                                    name='firstName'
                                    value={values.firstName}
                                    placeholder='First Name'
                                    required
                                    color='primary'
                                    autoComplete='off'
                                    onChange={handleChange}
                                    InputProps={{classes: {root: classes.input_SignUp} }}
                                    InputLabelProps={{
                                        classes: {
                                            root: classes.inputLabel_SignUp,
                                            focused: classes.inputLabelFocused_SignUp
                                        }
                                    }}
                                />
                                <TextField 
                                    label='Last Name'
                                    name='lastName'
                                    value={values.lastName}
                                    placeholder='Last Name'
                                    required
                                    color='primary'
                                    autoComplete='off'
                                    onChange={handleChange}
                                    InputProps={{classes: {root: classes.input_SignUp} }}
                                    InputLabelProps={{
                                        classes: {
                                            root: classes.inputLabel_SignUp,
                                            focused: classes.inputLabelFocused_SignUp
                                        }
                                    }}
                                />
                                <TextField 
                                    label='Username'
                                    name='username'
                                    value={values.username}
                                    placeholder='Username'
                                    required
                                    color='primary'
                                    autoComplete='off'
                                    onChange={handleChange}
                                    InputProps={{classes: {root: classes.input_SignUp} }}
                                    InputLabelProps={{
                                        classes: {
                                            root: classes.inputLabel_SignUp,
                                            focused: classes.inputLabelFocused_SignUp
                                        }
                                    }}
                                />
                                <TextField 
                                    label='Email'
                                    name='email'
                                    value={values.email}
                                    placeholder='Email'
                                    type='email'
                                    required
                                    color='primary'
                                    onChange={handleChange}
                                    InputProps={{classes: {root: classes.input_SignUp} }}
                                    InputLabelProps={{
                                        classes: {
                                            root: classes.inputLabel_SignUp,
                                            focused: classes.inputLabelFocused_SignUp
                                        }
                                    }}
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
                                    InputProps={{classes: {root: classes.input_SignUp} }}
                                    InputLabelProps={{
                                        classes: {
                                            root: classes.inputLabel_SignUp,
                                            focused: classes.inputLabelFocused_SignUp
                                        }
                                    }}
                                />
                                <TextField 
                                    label='Confirm Password'
                                    name='confirmPassword'
                                    value={values.confirmPassword}
                                    placeholder='********'
                                    type='password'
                                    required
                                    color='primary'
                                    autoComplete='off'
                                    onChange={handleChange}
                                    InputProps={{classes: {root: classes.input_SignUp} }}
                                    InputLabelProps={{
                                        classes: {
                                            root: classes.inputLabel_SignUp,
                                            focused: classes.inputLabelFocused_SignUp
                                        }
                                    }}
                                />
                                <Box style={{margin: '20px 0'}}>
                                    <Typography  variant='caption' >
                                        By clicking Create Account, you acknowledge you have read and agreed to our
                                        <Link variant='caption'>
                                            Terms of Use
                                        </Link>
                                        and 
                                        <Link variant='caption'>
                                            Privacy Policy
                                        </Link>
                                        .
                                    </Typography>
                                </Box>
                                <Button style={{width: '100%'}}>
                                    <Typography>
                                        Create Account
                                    </Typography>
                                </Button>
                            </Grid>
                        </form>
                        <Box style={{margin: '25px 0 12px 0', display: 'flex', justifyContent: 'center'}}>
                            <Typography variant='body2'>
                                Already have an account?
                            </Typography>
                        </Box>
                        <Button style={{border: '1px solid black', background: 'none', color: 'black'}}>
                            <Typography>
                                Sign In
                            </Typography>
                        </Button>
                        
                    </Grid>
                </Paper>
            </Grid>
        </Container>
    );
};

export default SignUp;