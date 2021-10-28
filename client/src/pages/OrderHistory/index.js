import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import {
    Container,
    Typography,
    Grid, 
    Box,
    Button,
    Link as MaterialLink
} from '@material-ui/core';

import useStyles from './styles';
import { QUERY_USER } from '../../utils/queries';
import Cart from '../../components/Cart';

const OrderHistory = () => {
    window.scrollTo(0, 0);
    const classes = useStyles();

    const { loading, data: userData } = useQuery(QUERY_USER);
    let user;

    if (userData) {
        user = userData.user
    }

    if (loading) {
        return (
            <Box>
                Loading...
            </Box>
        );
    }

    return (
        <Container className={classes.orderHistoryPageContainer_OrderHistory} maxWidth='xl'>
            {!loading &&
                <Grid container direction='column'>
                    
                    <Grid container alignItems='center' direction='column'>
                        <Typography variant='h2'>
                            Order History
                        </Typography>
                        <Box className={classes.flexBox_OrderHistory}>
                            <Typography variant='h3'>
                                for: 
                            </Typography>
                            <Typography className={classes.name_OrderHistory} variant='h3'>
                                {user.firstName} ({user.username})
                            </Typography>
                        </Box>
                    </Grid>

                    {user.orders.length > 0
                        ?
                            <Grid container className={classes.ordersContainer_OrderHistory} direction='column'>
                                {user.orders.map((order, index) => (
                                    <Grid item className={classes.orderContainer_OrderHistory} key={index}>
                                        <Box className={`${classes.flexBox_OrderHistory} ${classes.orderNumberContainer}`}>
                                            <Typography variant='subtitle2' className={classes.bold_OrderHistory}>
                                                Order Number: 
                                            </Typography>
                                            <Typography variant='body2' className={classes.fontStyles_OrderHistory}>
                                                {order._id} 
                                            </Typography>
                                        </Box>
                                        <Box className={`${classes.flexBox_OrderHistory} ${classes.orderNumberContainer}`}>
                                            <Typography className={classes.bold_OrderHistory}>
                                                Order Date: 
                                            </Typography>
                                            <Typography variant='body2' className={classes.fontStyles_OrderHistory}>
                                                {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                                            </Typography>
                                        </Box>
                                        <Grid container className={classes.itemMainContainer_OrderHistory}>
                                            {order.products.map((product, i) => (
                                            <Grid item className={classes.itemContainer_OrderHistory} key={i} xs={12} sm={3} lg={2}> 
                                                    <Box className={classes.imageContainer_OrderHistory}>
                                                        <img src={`/images/productImages/${product.image}`} alt={product.name} width='55px' />
                                                    </Box>

                                                    <Box>
                                                        <Box>
                                                            <Typography variant='body2' className={classes.bold_OrderHistory}>
                                                                {product.name}
                                                            </Typography>
                                                        </Box>
                                                        <Box>
                                                            <Box className={classes.flexBox_OrderHistory}>
                                                                <Typography variant='body2'>
                                                                    Quantity: 
                                                                </Typography>
                                                                <Typography variant='body2' className={classes.fontStyles_OrderHistory}>
                                                                    {product.purchaseQuantity}
                                                                </Typography>
                                                            </Box>
                                                            <Box className={classes.flexBox_OrderHistory}>
                                                                <Typography variant='body2'>
                                                                    Price: 
                                                                </Typography>
                                                                <Typography variant='body2' className={classes.fontStyles_OrderHistory}>
                                                                    {product.price}
                                                                </Typography>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </Grid>
                                ))}                
                            </Grid>
                        : 
                            <Grid 
                                container
                                className={classes.noHistoryContainer_OrderHistory} 
                                direction='column' 
                                alignItems='center'
                            >
                                <Typography variant='h5'>
                                    😨 You have no order history!
                                </Typography>
                                <MaterialLink
                                    to='/shop'
                                    component={RouterLink}
                                    className={classes.shopNowBtnLink_OrderHistory}
                                    underline='none'
                                >
                                    <Button className={classes.shopNowBtn_OrderHistory}>
                                        <Typography>
                                            Start Shopping Now
                                        </Typography>
                                    </Button>
                                </MaterialLink>
                            </Grid>
                    }

                </Grid>
            }
            
            <Cart />
        </Container>
    );
};

export default OrderHistory;
