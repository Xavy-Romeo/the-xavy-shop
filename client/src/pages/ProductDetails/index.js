import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import Soccer from '../../assets/catImages/soccer.jpg';

const ProductDetails = () => {
    return (
        <Container maxWidth='xl' style={{marginTop: '120px'}}>
            <Grid container >
                <Grid item xs={9}>
                    <Grid container>
                        <Grid item xs={4}
                            style={{
                                width:'100%',
                                display: 'flex',
                                justifyContent:'center'
                            }}
                        >
                            <img src={Soccer} height='300px' width='200px' />
                        </Grid>
                        <Grid item xs={8}>
                            <Typography variant='subtitle2' style={{fontWeight: 'bold'}}>
                                About this item
                            </Typography>
                            <Typography variant='body2'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                                mollit anim id est laborum.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3} 
                    style={{
                        padding: '0 20px',
                        border: '1px solid black',
                        borderRadius: '5px',
                        boxShadow: '0px 3px 5px -1px rgba(0,0,0,.2), 0px 6px 10px 6px rgba(0,0,0,.14), 0px 1px 18px 0px rgba(0,0,0,.12)',
                    }}
                >
                    <Grid container direction='column'>
                        <Box>
                            <Typography variant='h5'>
                                PRODUCT TITLE
                            </Typography>
                            <Grid container style={{marginTop: '20px'}}>
                                <Typography style={{fontWeight: 'bold', marginRight: '15px'}}>
                                    $ 99.99
                                </Typography>
                                <Typography style={{color: 'red', marginRight: '15px'}}>
                                    30% off
                                </Typography>
                                <Typography style={{color: 'grey', textDecoration: 'line-through', textDecorationStyle: 'double'}}>
                                    $ 130.00
                                </Typography>   
                            </Grid>
                        </Box>
                        <Box>
                            Size dropdown
                        </Box>
                        <Box>
                            Quantity dropdown
                        </Box>
                        <Button
                            style={{
                                color: 'white',
                                background: 'blue',
                                borderRadius: '30px'
                            }}
                        >
                            <Typography>
                                Add to Cart
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>          
            </Grid>
            <Grid container direction='column' style={{borderTop: '1px solid rgba(0,0,0,.05)', margin: '20px 0'}}>
                <Box>
                    <Typography variant='subtitle2' style={{fontWeight: 'bold'}}>
                        Frequently bought together
                    </Typography>
                </Box>
                <Box>
                    <Grid container alignItems='center'>
                        <img src={Soccer} height='200px' width='200px' />
                        <Typography variant='h3' style={{margin: '10px'}}>
                            +
                        </Typography>
                        <img src={Soccer} height='200px' width='200px' />
                        <Box style={{margin: '10px'}}>
                            <Grid container direction='column'>
                                <Grid container>
                                    <Typography>
                                        Total Price: 
                                    </Typography>
                                    <Typography style={{margin: '0 10px'}}>
                                        $ X.XX
                                    </Typography>
                                </Grid>
                                <Button 
                                    style={{
                                        color: 'white',
                                        background: 'blue',
                                        borderRadius: '30px'
                                    }}
                                >
                                    <Typography variant='body2'>
                                        Buy Together
                                    </Typography>
                                </Button>
                            </Grid>
                        </Box>
                    </Grid>
                </Box>
            </Grid>
        </Container>
    );
};

export default ProductDetails;
