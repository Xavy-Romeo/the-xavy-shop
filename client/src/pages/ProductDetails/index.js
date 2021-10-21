import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Input from '@material-ui/core/Input';

import { useStoreContext } from '../../utils/GlobalState';
import { QUERY_ALL_PRODUCTS, QUERY_GET_PRODUCT } from '../../utils/queries';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import useStyles from './styles';


const ProductDetails = () => {
    const classes = useStyles();

    const [state, dispatch] = useStoreContext();
    const { productId } = useParams();
    
    const [currentProduct, setCurrentProduct] = useState({image: '', category: {name: ''}});
    const [similarProduct, setSimilarProduct] = useState('');

    const { loading, data: productData } = useQuery(QUERY_ALL_PRODUCTS);

    const { products } = state;

    useEffect(() => {
        if (products.length) {
            setCurrentProduct(products.find(product => product._id === productId));
        }
        else if (productData) {
            dispatch({
                type: UPDATE_PRODUCTS,
                products: productData.products
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
            <Box style={{marginTop: '200px'}}>
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
                            <Paper style={{padding: '15px 20px'}}>
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
                                    <Grid container style={{marginTop: '20px'}}>
                                        <Typography style={{fontWeight: 'bold', marginRight: '15px', fontFamily: 'serif'}}>
                                            $ {calcTotal(currentProduct.fullPrice, currentProduct.salePercent)}
                                        </Typography>

                                        {currentProduct.salePercent !== 0 &&
                                            <Box style={{display: 'flex'}}>
                                                <Typography style={{color: 'red', marginRight: '15px', fontFamily: 'serif'}}>
                                                    {currentProduct.salePercent}% off
                                                </Typography>
                                                <Typography style={{color: 'grey', textDecoration: 'line-through', textDecorationStyle: 'double', fontFamily: 'serif'}}>
                                                    $ {currentProduct.fullPrice}
                                                </Typography>
                                            </Box>
                                        }   
                                    </Grid>
                                </Box>
                                <Box style={{display: 'flex'}}>
                                    <Typography>
                                        Qty: 
                                    </Typography>
                                    <Input
                                        style={{
                                            paddingLeft: '5px',
                                            marginLeft: '15px', 
                                            border: '1px solid black', 
                                            borderRadius: '4px',
                                            fontFamily: 'serif',
                                            width: '45px'
                                            
                                        }}
                                        disableUnderline
                                        type='number'
                                        value='1'
                                    >
                                    </Input>
                                </Box>
                                <Button className={classes.addBtn_ProductDetails}>
                                    <Typography>
                                        Add to Cart
                                    </Typography>
                                </Button>
                            </Grid>
                        </Grid>          
                    </Grid>
                    <Grid container direction='column' style={{borderTop: '1px solid rgba(0,0,0,.05)', margin: '50px 0 20px 0'}}>
                        <Box style={{margin: '5px 0 15px 0'}}>
                            <Typography className={classes.frequentTitle_ProductDetails} variant='subtitle2'>
                                Frequently bought together
                            </Typography>
                        </Box>
                        <Box>
                            <Grid container alignItems='center'>
                                <img src={`/images/productImages/${currentProduct.image}`} width='200px' alt={currentProduct.name} />
                                <Typography variant='h3' style={{margin: '10px'}}>
                                    +
                                </Typography>
                                <Link 
                                    style={{width: '200px'}} 
                                    href={`/product/${similarProduct._id}`}
                                >
                                    <img src={`/images/productImages/${similarProduct.image}`}  width='100%' height='100%' alt={similarProduct.name}/>
                                </Link>
                                <Box style={{margin: '10px'}}>
                                    <Grid container direction='column'>
                                        <Grid container>
                                            <Typography>
                                                Total Price: 
                                            </Typography>
                                            <Typography style={{margin: '0 10px', fontFamily: 'serif'}}>
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
                    
                </Container>
            }
        </>
    );
};

export default ProductDetails;