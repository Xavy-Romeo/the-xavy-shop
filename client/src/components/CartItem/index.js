import React from 'react'

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import useStyles from './styles';


const CartItem = ({ item }) => {
    const classes = useStyles();
    
    return (
        <Grid container>
            <Box>
                <img
                    // src={`/images/${item.image}`}
                    src=''
                    alt={item.name}
                />
            </Box>
            <Grid container direction='column'>
                <Box>
                    <Typography>
                        {item.name}, ${item.price}
                    </Typography>
                </Box>
                <Box>
                    <Typography>
                    <span>Qty:</span>
                    </Typography>
                    <TextField
                        type='number'
                        placeholder='1'
                        value={item.purchaseQuantity}
                    />
                    <Typography 
                        component='span'
                        role='img'
                        aria-label='trash'
                    >
                        🗑️
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
};

export default CartItem;
