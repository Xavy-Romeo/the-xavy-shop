import React from 'react'

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

import useStyles from './styles';
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import CancelPresentationRoundedIcon from '@material-ui/icons/CancelPresentationRounded';

const Cart = () => {
    const classes = useStyles();

    return (
        <Box className={classes.cartContainer_Cart}>
            <CancelPresentationRoundedIcon style={{position: 'absolute', right: '2px', top: '2px'}} fontSize='large' />
            <Grid container>
                <Box style={{borderBottom: '1px solid black', width: '100%'}}>
                    <Typography variant='subtitle1' style={{fontWeight: 'bold'}}>
                        Cart
                    </Typography>
                </Box>

                <Grid container>
                    <Grid item>
                        <CartItem item={{name:'Camera', image:'camera.jpg', price:5, purchaseQuantity:3}} />
                    </Grid>
                    <Grid item>                        
                        <CartItem item={{name:'Soap', image:'soap.jpg', price:6, purchaseQuantity:4}} />
                    </Grid>
                </Grid>

                <Grid container justifyContent='center' style={{marginTop: '10px'}}>
                    <Box style={{display: 'flex'}}>
                        <Typography variant='subtitle2' component='span' role='img' aria-label='oh no face'>
                            😨
                        </Typography>
                        <Typography variant='subtitle2'>
                            Your cart is empty!
                        </Typography>
                    </Box>
                    <Box style={{width: '100%', marginTop: '10px'}}>
                        <Link 
                            href='/shop'
                            style={{color: 'white', width: '100%'}}
                            underline='none'
                        >
                            <Button style={{width: '100%'}}>
                                <Typography>
                                    Start Shopping
                                </Typography>
                            </Button>
                        </Link>
                    </Box>
                </Grid>

                {Auth.loggedIn()
                    ?   <Box style={{width: '100%', marginTop: '10px'}}>
                            <Link 
                                href='/checkout'
                                style={{color: 'white', width: '100%'}}
                                underline='none'
                            >
                                <Button style={{width: '100%'}}>
                                    <Typography>
                                        Checkout
                                    </Typography>
                                </Button>
                            </Link>
                        </Box>

                    :   <Box style={{display: 'flex', justifyContent: 'center', width: '100%', marginTop: '10px'}}>
                            <Link 
                                href='/login'
                                variant='body2'
                                underline='none'
                            >
                                Login to checkout
                            </Link>
                        </Box>
                }

            </Grid>
        </Box>
    );
};

export default Cart;