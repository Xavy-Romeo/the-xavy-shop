import React, { useState, useEffect } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import {
    Grid,
    Typography,
    Button,
    Container,
    Box,
    Paper,
    Link as MaterialLink,
    Input 
} from '@material-ui/core';

import { useStoreContext } from '../../utils/GlobalState';
import { QUERY_ALL_PRODUCTS, QUERY_GET_PRODUCT } from '../../utils/queries';
import { ADD_TO_CART, UPDATE_PRODUCTS, UPDATE_CART_QUANTITY } from '../../utils/actions';
import useStyles from './styles';
import idbPromise from '../../utils/indexedDB';
import Cart from '../../components/Cart';

const ProductDetails = () => {
    const classes = useStyles();

    const [state, dispatch] = useStoreContext();
    const { productId } = useParams();
    
    const [currentProduct, setCurrentProduct] = useState({image: '', category: {name: ''}});
    const [similarProduct, setSimilarProduct] = useState('');

    const { loading, data: productData } = useQuery(QUERY_ALL_PRODUCTS);

    const { products, cart } = state;

    useEffect(() => {
        // data exist in global state
        if (products.length) {
            setCurrentProduct(products.find(product => product._id === productId));
        }
        // retrieve from server
        else if (productData) {
            dispatch({
                type: UPDATE_PRODUCTS,
                products: productData.products
            });

            // store date in indexedDB
            productData.products.forEach((product) => {
                idbPromise('products', 'put', product);
            });
        }
        // get cache from idb
        else if (!loading) {
            idbPromise('products', 'get').then((indexedProducts) => {
                dispatch({
                    type: UPDATE_PRODUCTS,
                    products: indexedProducts
                });
            });
        }

        if (currentProduct.category.name === '') {
            return;
        }
        else {
            let similarPdt = products.filter(product=> product.category.name === currentProduct.category.name);
            
            if (similarPdt[0]._id === currentProduct._id) {
                setSimilarProduct(similarPdt[1]);
            }
            else {
                setSimilarProduct(similarPdt[0]);
            }
        }
       
    }, [productData, loading, dispatch, productId, currentProduct, products]);

    const addToCart = () => {
        // check to see if item is already in cart
        const itemInCart = cart.find((cartItem) => cartItem._id === currentProduct._id);

        if (itemInCart) {
            dispatch({
                type: UPDATE_CART_QUANTITY,
                _id: currentProduct._id,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
            });
        }
        else {
            dispatch({
                type: ADD_TO_CART,
                product: { ...currentProduct, purchaseQuantity: 1}
            });
        }
    };

    const add = (x, y) => {
        return (x + y).toFixed(2);
    };

    // calculate total price after sale discount and set to 2 decimals
    const calcTotal = (fullPrice, salePercent) => {
        let total = (fullPrice*(1 - (salePercent/100))).toFixed(2);
        return total;
    };

    if (loading) {
        return(
            <Box className={classes.loadingContainer_ProductDetails}>
                <Typography variant='h1'>
                    LOADING...
                </Typography>
            </Box>
        );
    }

    return (
        <>
            {currentProduct && 
                <Container maxWidth='xl' className={classes.detailsContainer_ProductDetails}>
                    
                    <Grid container>
                        <Grid item xs={9}>
                            <Paper className={classes.aboutPaper_ProductDetails}>
                                <Grid container>
                                    <Grid 
                                        item  
                                        className={classes.productImage_ProductDetails} 
                                        xs={3}
                                    >
                                        <img 
                                            src={`/images/productImages/${currentProduct.image}`} 
                                            width='100%' 
                                            alt={currentProduct.name} 
                                        />
                                    </Grid>
                                    <Grid item className={classes.aboutItemContainer_ProductDetails} xs={9} >
                                        <Typography variant='subtitle2' className={classes.aboutTitle_ProductDetails}>
                                            About this item
                                        </Typography>
                                        <Typography variant='body2'>
                                            {currentProduct.description}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item className={classes.addContainer_ProductDetails} xs={3}>
                            <Grid container direction='column'>
                                <Box>
                                    <Typography variant='h5'>
                                        {currentProduct.name}
                                    </Typography>
                                    <Grid container className={classes.pricesContainer_ProductDetails}>
                                        <Typography className={classes.price_ProductDetails}>
                                            $ {calcTotal(currentProduct.fullPrice, currentProduct.salePercent)}
                                        </Typography>

                                        {currentProduct.salePercent !== 0 &&
                                            <Box className={classes.discountContainer_ProductDetails}>
                                                <Typography className={classes.salePercent_ProductDetails}>
                                                    {currentProduct.salePercent}% off
                                                </Typography>
                                                <Typography className={classes.fullPrice_ProductDetails}>
                                                    $ {currentProduct.fullPrice}
                                                </Typography>
                                            </Box>
                                        }   
                                    </Grid>
                                </Box>
                                <Box className={classes.quantityContainer_ProductDetails}>
                                    <Typography>
                                        Qty: 
                                    </Typography>
                                    <Input
                                        className={classes.quantityInput_ProductDetails}
                                        disableUnderline
                                        type='number'
                                        value='1'
                                    >
                                    </Input>
                                </Box>
                                <Button 
                                    className={classes.addBtn_ProductDetails}
                                    onClick={addToCart}
                                >
                                    <Typography>
                                        Add to Cart
                                    </Typography>
                                </Button>
                            </Grid>
                        </Grid>          
                    </Grid>
                    <Grid container className={classes.boughtTogetherContainer_ProductDetails} direction='column'>
                        <Box className={classes.boughtTogetherTitleContainer_ProductDetails}>
                            <Typography className={classes.boughtTogetherTitle_ProductDetails} variant='subtitle2'>
                                Frequently bought together
                            </Typography>
                        </Box>
                        <Box>
                            <Grid container alignItems='center'>
                                <img src={`/images/productImages/${currentProduct.image}`} width='200px' alt={currentProduct.name} />
                                <Typography variant='h3' className={classes.boughtTogetherPlusSign_ProductDetails}>
                                    +
                                </Typography>
                                <MaterialLink 
                                    to={`/product/${similarProduct._id}`}
                                    className={classes.similarLink_ProductDetails}
                                    component={RouterLink}
                                    underline='none'
                                >
                                    <img 
                                        src={`/images/productImages/${similarProduct.image}`}  
                                        width='100%' 
                                        height='100%' 
                                        alt={similarProduct.name}
                                    />
                                </MaterialLink>
                                <Box className={classes.totalPriceContainer_ProductDetails}>
                                    <Grid container direction='column'>
                                        <Grid container>
                                            <Typography>
                                                Total Price: 
                                            </Typography>
                                            <Typography className={classes.totalPrice_ProductDetails}>
                                                $ {add(similarProduct.fullPrice, currentProduct.fullPrice)}
                                            </Typography>
                                        </Grid>
                                        <Button className={classes.buyTogetherBtn_ProductDetails}>
                                            <Typography variant='body2'>
                                                Buy Together
                                            </Typography>
                                        </Button>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Box>
                    </Grid>
                    
                    <Cart />
                    
                </Container>
            }
        </>
    );
};

export default ProductDetails;