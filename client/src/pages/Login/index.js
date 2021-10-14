import React, { useState } from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import useStyles from './styles';

const Login = () => {
    const classes = useStyles();
    
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
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
        <Container maxWidth='xl' style={{marginTop: '120px'}}>
            <Paper>
                <Grid container direction='column'>
                    <Typography>
                        Sign In
                    </Typography>
                    <form type='submit'>
                        <Grid container>
                            <TextField 
                                label='First Name'
                                name='firstName'
                                value={values.firstName}
                                placeholder='First Name'
                                type='text'
                                required
                                color='primary'
                                autoComplete='off'
                                onChange={handleChange}
                            />
                        </Grid>
                        <Button>
                            Sign In
                        </Button>
                    </form>
                    <Box>
                        <Typography>
                            Don't have an account?
                        </Typography>
                        <Button variant='outlined'>
                            Create Account
                        </Button>
                    </Box>
                </Grid>
            </Paper>
        </Container>
    );
};

export default Login;