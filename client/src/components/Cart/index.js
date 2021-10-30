import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom'; 
import { 
    Box,
    Grid,
    Typography,
    Button,
    Link as MaterialLink
} from '@material-ui/core';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';

import { useStoreContext } from '../../utils/GlobalState';
import useStyles from './styles';
import ProductCart from '../ProductCart';
import Auth from '../../utils/auth';
import CancelPresentationRoundedIcon from '@material-ui/icons/CancelPresentationRounded';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import { QUERY_CHECKOUT } from '../../utils/queries';
import idbPromise from '../../utils/indexedDB';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Cart = () => {
    const classes = useStyles();

    const [state, dispatch] = useStoreContext();  
    const { cartOpen, cart } = state;

    const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

    const [subTotal, setSubTotal] = useState(0);
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        if (data) {
            stripePromise.then((res) => {
                res.redirectToCheckout({ sessionId: data.checkout.session })
            })
        }
    }, [data]);

    useEffect(() => {
        const getCart = async () => {
            // grab cart data from IndexedDB
            const cart = await idbPromise('cart', 'get');
            // update global state
            dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
        };

        if (!cart.length) {
            getCart();
        }

    }, [cart.length, dispatch])

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

    const toggleCart = () => {
        dispatch({type: TOGGLE_CART});
    };
    
    const submitCheckout = () => {
        const productIds = [];
    
        state.cart.forEach((item) => {
            productIds.push(item._id);
        });
    
        getCheckout({
            variables: { 
                products: productIds,
            }
        });
    };

    if (!cartOpen) {
        return (
            <Box 
                className={classes.cartIconContainer_Cart}
                onClick={toggleCart}
                component='span'
            >
                <Box className={classes.cartIconBox_Cart}>
                    <ShoppingCartIcon fontSize='large' className={classes.cartIcon_Cart} />

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
                                className={classes.marginTop_Cart}
                                justifyContent='space-between'
                            >
                                <Typography className={classes.bold_Cart}>
                                    Total: 
                                </Typography>
                                <Typography 
                                    className={classes.totalPrice_Cart}
                                    variant='h5'
                                    component='strong'
                                >
                                    ${subTotal}
                                </Typography>
                            </Grid>
                        </Box>
                    :
                        <Grid container className={classes.marginTop_Cart} justifyContent='center'>
                            <Box className={classes.emptyCartContainer_Cart}>
                                <Typography variant='subtitle2' component='span' role='img' aria-label='oh no face'>
                                    😨
                                </Typography>
                                <Typography variant='subtitle2'>
                                    Your cart is empty!
                                </Typography>
                            </Box>
                            <Box className={classes.shopBtnLinkContainer_Cart}>
                                <MaterialLink 
                                    to='/shop'
                                    className={classes.shopBtnLink_Cart}
                                    component={RouterLink}
                                    underline='none'
                                >
                                    <Button className={classes.shopBtn_Cart}>
                                        <Typography>
                                            Start Shopping
                                        </Typography>
                                    </Button>
                                </MaterialLink>
                            </Box>
                        </Grid>
                }

                {cart.length && Auth.loggedIn()
                    ?   <Box className={classes.checkoutBtnContainer_Cart}>
                                <Button 
                                    className={classes.checkoutBtn_Cart}
                                    onClick={submitCheckout}
                                >
                                    <Typography>
                                        Checkout
                                    </Typography>
                                </Button>
                                <Grid container direction='column' alignItems='center'>
                                    <Typography className={classes.demoText_Cart}>
                                        NOTE: DEMO MODE
                                    </Typography>
                                    <Typography className={classes.demoText_Cart}>
                                        Use credit card number 
                                    </Typography>
                                    <Typography className={classes.demoCC_Cart}>
                                        4242 4242 4242 4242
                                    </Typography>
                                </Grid>
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