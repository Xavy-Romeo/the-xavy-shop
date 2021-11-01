import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';
import { ADD_ORDER } from '../../utils/mutations';
import Logo from '../../assets/images/xr-logo.png';
import idbPromise from '../../utils/indexedDB';

const SuccessOrder = () => {
    window.scrollTo(0, 0);
    const classes = useStyles();

    const [countDown, setCountDown] = useState(8);

    const [addOrder] = useMutation(ADD_ORDER);

    useEffect(() => {
        let products = [];
        let quantities = [];

        const saveOrder = async () => {
            // get cart data from IndexedDB
            const cart = await idbPromise('cart', 'get');
            await cart.map(item => { 
                products.push(item._id); 
                quantities.push(item.purchaseQuantity);
            });
            
            // const prices = await cart.map(item => item.price);
            // const quantities = cart.map(item => item.purchaseQuantity);
            // let totalPrice = 0.11;
            // await prices.forEach(price => totalPrice += price);

            console.log('products', products);
            console.log('quantities', quantities);

            if (products.length) {
                // add order to user order history array via ADD_ORDER mutation
                const { data } = await addOrder({ 
                    variables: { 
                        products,
                        // prices,
                        quantities
                        // totalPrice
                    } 
                });
                const productData = data.addOrder.products;

                // remove items from cart
                productData.forEach((item) => {
                    idbPromise('cart', 'delete', item);
                });
            }

            // setTimeout(() => {
            //     window.location.assign('/');
            // }, 8000);
        };

        saveOrder();
    }, [addOrder]);

    setTimeout(() => {
        if (countDown > 0) {
            let count = countDown - 1; 
            setCountDown(count);
        }
    }, 1000);

    return (
        <Box className={classes.pageContainer_SuccessOrder}>
            <Box className={classes.contentBox_SuccessOrder}>
                <img src={Logo} className={classes.logo_SuccessOrder} alt='Logo' />

                <Typography className={classes.successText_SuccessOrder} variant='h3'>
                    🌟 🌟 🌟 SUCCESS! 🌟 🌟 🌟
                </Typography>
                <Typography className={classes.thankYou_SuccessOrder} variant='h4'>
                    Thank you for your purchase!
                </Typography>
                <Typography className={classes.redirect_SuccessOrder} variant='h5'>
                    You will be redirected to homepage
                </Typography>

                <Box className={classes.countDownContainer_SuccessOrder}>
                    <Typography className={classes.countDown_SuccessOrder} variant='h5'>
                        {countDown}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default SuccessOrder;
