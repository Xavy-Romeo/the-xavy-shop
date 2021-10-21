import React, { useState, useEffect } from 'react'

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';

import useStyles from './styles';

const CartItem = ({ item }) => {
    const classes = useStyles();
    
    const [price, setPrice] = useState('');
    const [fullPrice, setFullPrice] = useState('');

    useEffect(() => {
        // set full price to 2 decimals
        let price = item.fullPrice.toFixed(2);
        setFullPrice(price);

        // calculate total price after sale discount and set to 2 decimals
        let total = (item.fullPrice*(1 - (item.salePercent/100))).toFixed(2);
        setPrice(total);
        
        
    }, [item.fullPrice, item.salePercent]);

    return (
        <Grid container className={classes.productContainer_ProductCart}>
            <Grid item className={classes.imgContainer_ProductCart} xs={3}>
                <img
                    src={`/images/${item.image}`}
                    className={classes.cartItemImage_ProductCart}
                    alt={item.name}
                />
            </Grid>

            <Grid item xs={7}>
                <Grid 
                    container 
                    className={classes.middleContainer_ProductCart}
                    direction='column' 
                    justifyContent='space-between'
                >
                    <Box>
                        <Typography className={classes.productName_ProductCart} variant='body2'>
                            {item.name}
                        </Typography>
                    </Box>
                    <Box className={classes.middleBottomContainer_ProductCart}>
                        <Typography variant='caption'>
                            Qty:
                        </Typography>
                        <Input
                            className={classes.qtyInput_ProductCart}
                            disableUnderline
                            type='number'
                            value={item.purchaseQuantity}
                        />
                        <Typography 
                            className={classes.trash_ProductCart}
                            component='span'
                            role='img'
                            aria-label='trash'
                        >
                            🗑️
                        </Typography>
                    </Box>
                </Grid>
            </Grid>

            <Grid item xs={2}>
                <Grid container direction='column'>
                    <Typography
                        className={classes.price_ProductCart} 
                        variant='body2'
                        component='strong'
                    >
                        ${price}
                    </Typography>
                    
                    {item.salePercent !== 0 && 
                        <Grid container direction='column'>
                            <Typography className={classes.salePercent_ProductCart} variant='caption'>
                                {item.salePercent}%
                            </Typography>
                            <Typography className={classes.fullPrice_ProductCart} variant='caption'>
                                ${fullPrice}
                            </Typography>
                        </Grid>
                    }
                </Grid>
                
            </Grid>
        </Grid>
    );
};

export default CartItem;
