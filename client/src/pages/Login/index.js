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
import Beach from '../../assets/images/beach.jpg';

const Login = () => {
    const classes = useStyles();
    
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
        <Container maxWidth='xl' style={{marginTop: '130px', position: 'relative'}}>
            <Box>
                <img src={Beach} width='100%' 
                    style={{
                        objectFit: 'cover',
                        height: '80vh',
                        zIndex: '-9999',
                        borderRadius: '4px'
                    }}
                />
            </Box>
            <Grid container justifyContent='center' alignItems='center'
                style={{
                    width: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0
                }}
            >
                <Paper 
                    style={{
                        margin: '20px 0 50px 0',
                        width: '500px',
                        padding: '10px 30px',
                        paddingBottom: '50px',
                        opacity: '90%'
                    }}>
                    <Grid container direction='column'>
                        <Grid container direction='column' alignItems='center'>
                            <Avatar style={{background:'rgb(5,44,133)'}}>
                                <PersonAddIcon fontSize='small' />
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
                        <Box style={{margin: '25px 0 12px 0', display: 'flex', justifyContent: 'center'}}>
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