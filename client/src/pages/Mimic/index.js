import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import {
    Container,
    Grid,
    Box,
    Typography,
    Button,
    Link as MaterialLink
} from '@material-ui/core';

import { useStoreContext } from '../../utils/GlobalState';
import useStyles from './styles';

const MimicPage = () => {
    window.scrollTo(0, 0);
    const classes = useStyles();
    
    const [state, ] = useStoreContext();
    const { currentMimicPage } = state;

    return (
        <Container maxWidth='xl' className={classes.mimicPageContainer_MimicPage}>
            <Grid container alignItems='center' direction='column'>
                <Typography variant='h2'>
                    {currentMimicPage.name}
                </Typography>
                <Typography>
                    (***Mimic Page***)
                </Typography>
                <Box className={classes.logoContainer_MimicPage}>
                    <img src={currentMimicPage.logo} height='250px' width='250px' alt={`${currentMimicPage.name} logo`} />
                </Box>
                <Typography variant='subtitle1'>
                    #TheXavyShop
                </Typography>
            </Grid>
            <Grid container justifyContent='center'>
                <MaterialLink
                    to='/'
                    component={RouterLink}
                    underline='none'
                >
                    <Button className={classes.backHomeBtn_MimicPage}>
                        <Typography>
                            Go to The Xavy Shop
                        </Typography>
                    </Button>
                </MaterialLink>
            </Grid>
        </Container>
    );
};

export default MimicPage;
