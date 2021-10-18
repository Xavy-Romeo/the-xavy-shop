import React, { useState } from 'react'

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

import useStyles from './styles';
import ProductCart from '../ProductCart';
import Auth from '../../utils/auth';
import CancelPresentationRoundedIcon from '@material-ui/icons/CancelPresentationRounded';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Cart = () => {
    const classes = useStyles();

    const [cartOpen, setCartOpen] = useState(true);

    const toggleCart = () => {
        setCartOpen(!cartOpen);
    };

    if (!cartOpen) {
        return (
            <Box 
                className={classes.cartIcon_Cart}
                onClick={toggleCart}
                component='span'
            >
                <ShoppingCartIcon fontSize='large' />
            </Box>
        );
    }

    return (
        <Box className={classes.cartContainer_Cart}>
            <CancelPresentationRoundedIcon 
                className={classes.closeIcon_Cart}
                fontSize='large' 
                onClick={toggleCart}
            />
            <Grid container>
                <Box className={classes.cartTitleContainer_Cart}>
                    <Typography className={classes.cartTitle_Cart} variant='subtitle1'>
                        Cart
                    </Typography>
                </Box>

                <Grid container>
                    <Grid item>
                        <ProductCart item={{name:'Camera', image:'camera.jpg', price:5.99, salePercent: 0, fullPrice: 10.00, purchaseQuantity:3}} />
                    </Grid>
                    <Grid item>                        
                        <ProductCart item={{name:'Soap', image:'soap.jpg', price:6.49, salePercent: 30, fullPrice: 10.00, purchaseQuantity:4}} />
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
                    ?   <Box className={classes.checkoutBtnContainer_Cart}>
                            <Link 
                                href='/checkout'
                                className={classes.checkoutLink_Cart}
                                underline='none'
                            >
                                <Button className={classes.checkoutBtn_Cart}>
                                    <Typography>
                                        Checkout
                                    </Typography>
                                </Button>
                            </Link>
                        </Box>

                    :   <Box className={classes.loginLinkContainer_Cart}>
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