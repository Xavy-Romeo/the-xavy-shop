import React, { useState, useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom'; 
import { 
    Box,
    Grid,
    Typography,
    Button,
    Link as MaterialLink
} from '@material-ui/core';

import { useStoreContext } from '../../utils/GlobalState';
import useStyles from './styles';
import ProductCart from '../ProductCart';
import Auth from '../../utils/auth';
import CancelPresentationRoundedIcon from '@material-ui/icons/CancelPresentationRounded';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { TOGGLE_CART} from '../../utils/actions';

const Cart = () => {
    const classes = useStyles();

    const [state, dispatch] = useStoreContext();  
    const { cartOpen, cart } = state;

    const [subTotal, setSubTotal] = useState(0);
    const [quantity, setQuantity] = useState(0);

    const toggleCart = () => {
        dispatch({type: TOGGLE_CART});
    };

    useEffect(() => {
        const getTotals = async () => {
            let sum = 0;
            let quantity = 0;

            await cart.forEach(item => {
                sum += (item.price * item.purchaseQuantity);
                quantity += item.purchaseQuantity;
            });

            setQuantity(quantity);
            setSubTotal(sum.toFixed(2));
        };

        getTotals();
    }, [cart]);

    if (!cartOpen) {
        return (
            <Box 
                className={classes.cartIcon_Cart}
                onClick={toggleCart}
                component='span'
            >
                <Box style={{position: 'relative'}}>
                    <ShoppingCartIcon fontSize='large' />

                    {quantity > 0 &&
                    <Box className={classes.quantityContainer_Cart}>
                        <Typography className={classes.quantity_Cart} variant='body2'>
                            {quantity}
                        </Typography>
                    </Box>
                    }
                </Box>
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

                {cart.length 
                    ?
                        <Box>
                            <Grid container>
                                {cart.map((item, index) => (
                                    <ProductCart
                                        item={item}
                                        key={index}
                                    />
                                ))}
                            </Grid>
                            <Grid 
                                container
                                style={{marginTop: '10px'}}
                                justifyContent='space-between'
                            >
                                <Typography style={{fontWeight: 'bold'}}>
                                    Subtotal: 
                                </Typography>
                                <Typography 
                                    style={{fontFamily: 'serif', fontWeight: 'bold'}}
                                    variant='h5'
                                    component='strong'
                                >
                                    ${subTotal}
                                </Typography>
                            </Grid>
                        </Box>
                    :
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
                                <MaterialLink 
                                    to='/shop'
                                    style={{color: 'white', width: '100%'}}
                                    component={RouterLink}
                                    underline='none'
                                >
                                    <Button style={{width: '100%'}}>
                                        <Typography>
                                            Start Shopping
                                        </Typography>
                                    </Button>
                                </MaterialLink>
                            </Box>
                        </Grid>
                }

                {Auth.loggedIn()
                    ?   <Box className={classes.checkoutBtnContainer_Cart}>
                            <MaterialLink 
                                to='/checkout'
                                className={classes.checkoutLink_Cart}
                                component={RouterLink}
                                underline='none'
                            >
                                <Button className={classes.checkoutBtn_Cart}>
                                    <Typography>
                                        Checkout
                                    </Typography>
                                </Button>
                            </MaterialLink>
                        </Box>

                    :   <Box className={classes.loginLinkContainer_Cart}>
                            {cart.length > 0 &&
                                <MaterialLink 
                                    to='/login'
                                    className={classes.loginLink_Cart}
                                    variant='body2'
                                    component={RouterLink}
                                    underline='none'
                                >
                                    Login to checkout
                                </MaterialLink>
                            }
                        </Box>
                }

            </Grid>
        </Box>
    );
};

export default Cart;