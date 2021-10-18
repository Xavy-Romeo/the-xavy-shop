import React from 'react';

import Container from '@material-ui/core/Container';

import useStyles from './styles';

const Checkout = () => {
    const classes = useStyles();
    
    return (
        <Container maxWidth='xl' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '700px'}}>
            CHECKOUT PAGE
        </Container>
    );
};

export default Checkout;
