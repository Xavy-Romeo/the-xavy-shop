import React, {useEffect} from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import {
    Container,
    Typography,
    Grid, 
    Box,
    Link as MaterialLink
} from '@material-ui/core';

import useStyles from './styles';
import { QUERY_USER } from '../../utils/queries';
import Cart from '../../components/Cart';

const OrderHistory = () => {
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
                        <Box style={{display: 'flex'}}>
                            <Typography variant='h3'>
                                for: 
                            </Typography>
                            <Typography variant='h3' style={{marginLeft: '10px'}}>
                                {user.firstName} ({user.username})
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid container style={{marginTop: '10px'}} direction='column'>
                        {user.orders.map((order, index) => (
                            <Grid item key={index} style={{paddingBottom: '10px', borderBottom: '1px solid rgba(0,0,0,.05)'}}>
                                <Box className={classes.flexBox_OrderHistory} style={{display: 'flex'}}>
                                    <Typography variant='subtitle2' style={{fontWeight: 'bold'}}>
                                        Order Number: 
                                    </Typography>
                                    <Typography variant='body2' className={classes.fontStyles_OrderHistory}>
                                        {order._id} 
                                    </Typography>
                                </Box>
                                <Box className={classes.flexBox_OrderHistory} style={{display: 'flex'}}>
                                    <Typography style={{fontWeight: 'bold'}}>
                                        Order Date: 
                                    </Typography>
                                    <Typography variant='body2' className={classes.fontStyles_OrderHistory}>
                                        {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                                    </Typography>
                                </Box>
                                <Box style={{display: 'flex', marginTop: '10px'}}>
                                    {order.products.map((product, i) => (
                                        <Box key={i} style={{marginRight: '10px', display: 'flex'}}>
                                            <Box style={{marginRight: '10px'}}>
                                                <img src={`/images/productImages/${product.image}`} alt={product.name} width='55px' />
                                            </Box>

                                            <Box>
                                                <Box>
                                                    <Typography variant='body2' style={{fontWeight: 'bold'}}>
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
                                        </Box>
                                    ))}
                                </Box>
                            </Grid>
                        ))}                
                    </Grid>

                </Grid>
            }
            
            <Cart />
        </Container>
    );
};

export default OrderHistory;
