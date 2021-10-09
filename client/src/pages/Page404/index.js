import React from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Logo from '../../assets/images/xr-logo.png';

const Page404 = () => {
    return (
        <Grid container direction='column' justifyContent='center' alignItems='center' 
            style={{minHeight: '800px'}}
        >
            <Typography variant='h2' style={{marginBottom: '20px'}}>
                Error: 404
            </Typography>
            <img src={Logo} height='300px' width= '300px' alt='logo' />
            <Typography variant='h3' style={{marginTop: '20px'}}>
                Uh-oh...
            </Typography>
            <Typography variant='h5' style={{margin: '20px 0'}}>
                Page Not Found 😔
            </Typography>
            <Button style={{background: 'black', color: 'white', borderRadius: '30px', width: '300px'}}>
                <Typography>
                    Return to Home
                </Typography>
            </Button>  
        </Grid>
            
    );
};

export default Page404;
