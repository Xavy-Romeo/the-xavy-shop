import React from 'react'

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import useStyles from './styles';
import CartItem from '../CartItem';
import CancelPresentationRoundedIcon from '@material-ui/icons/CancelPresentationRounded';

const Cart = () => {
    const classes = useStyles();

    return (
        <Box className={classes.cartContainer_Cart}>
            <CancelPresentationRoundedIcon style={{position: 'absolute', right: '2px', top: '2px'}} fontSize='large' />
            <Grid container>
                <Box style={{borderBottom: '1px solid black', width: '100%'}}>
                    <Typography variant='subtitle1' style={{fontWeight: 'bold'}}>
                        Cart
                    </Typography>
                </Box>

                <Grid container>
                    <Grid item>
                        <CartItem />
                    </Grid>
                </Grid>

                <Grid container justifyContent='center' style={{marginTop: '10px'}}>
                    <Box style={{display: 'flex'}}>
                        <Typography variant='subtitle2' component='span' role='img' aria-label='oh no face'>
                            😨
                        </Typography>
                        <Typography variant='subtitle2'>
                            Your cart is empty!
                        </Typography>
                    </Box>
                    <Button style={{width: '100%', marginTop: '10px'}}>
                        <Typography>
                            Start Shopping
                        </Typography>
                    </Button>
                </Grid>

            </Grid>
        </Box>
    );
};

export default Cart;