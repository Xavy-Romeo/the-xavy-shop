import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';
import Cart from '../../components/Cart';

const OrderHistory = () => {
    const classes = useStyles();

    return (
        <Container className={classes.orderHistoryPageContainer_OrderHistory} maxWidth='xl'>
            <Typography style={{marginTop: '150px'}}>
                TEST TEST TEST Order History page
            </Typography>
            <Cart />
        </Container>
    );
};

export default OrderHistory;
