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
import LockOpenIcon from '@material-ui/icons/LockOpen';

import useStyles from './styles';
import { LOGIN } from '../../utils/mutations';
import Beach from '../../assets/images/beach.jpg';

const Login = () => {
    const classes = useStyles();
    
    // initial state for values
    const initialValues = {
        username: '',
        password: ''
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
                        <form type='submit'>
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
                                    InputProps={{classes: {
                                        root: classes.input_Login,
                                        focused: classes.inputFocused_Login
                                    } }}
                                    InputLabelProps={{ classes: { root: classes.inputLabel_Login } }}
                                />
                                <Button className={classes.loginBtn_Login}>
                                    <Typography>
                                        Sign In
                                    </Typography>
                                </Button>
                            </Grid>
                        </form>
                        <Box className={classes.haveAccountBox_Login}>
                            <Typography variant='body2'>
                                Don't have an account?
                            </Typography>
                        </Box>
                        <Link
                            href='/signup'
                            underline='none'
                        >
                            <Button className={classes.createAccountBtn_Login}>
                                <Typography>
                                    Create your Xavy account
                                </Typography>
                            </Button>
                        </Link>
                    </Grid>
                </Paper>
            </Grid>
        </Container>
    );
};

export default Login;