import React from 'react';
import { Link as RouterLink} from 'react-router-dom';
import { useQuery } from '@apollo/client';
import {
    Container,
    Grid,
    Box,
    Typography,
    Paper,
    Link as MaterialLink,
    Button
} from '@material-ui/core';

import useStyles from './styles';
import { QUERY_USER } from '../../utils/queries';

const Account = () => {
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
        <Container className={classes.accountPageContainer_Account} maxWidth='xl'>
            {!loading &&
                <Box>
                    <Grid container direction='column' alignItems='center'>
                        <Typography variant = 'h3' className={classes.hiName_Account}>
                            Hi, {user.firstName}
                        </Typography>
                        <Typography variant='body2'>
                            Thanks for being a The Xavy Shop customer! 🙏
                        </Typography>
                    </Grid>
                    <Grid container className={classes.contentContainer_Account} justifyContent='center'>
                        <Paper className={classes.personalInfoPaper_Account}>
                            <Grid container direction='column'>
                                <Typography className={classes.paperTitle_Account} variant='subtitle1'>
                                    Personal Info
                                </Typography>
                                <Box className={classes.flexBox_Account}>
                                    <Typography className={classes.itemTitle_Account}>
                                        First Name: 
                                    </Typography>
                                    <Typography>
                                        {user.firstName}
                                    </Typography>
                                </Box>
                                <Box className={classes.flexBox_Account}>
                                    <Typography className={classes.itemTitle_Account}>
                                        Last Name: 
                                    </Typography>
                                    <Typography>
                                        {user.lastName}
                                    </Typography>
                                </Box>
                                <Box className={classes.flexBox_Account}>
                                    <Typography className={classes.itemTitle_Account}>
                                        Email: 
                                    </Typography>
                                    <Typography>
                                        {user.email}
                                    </Typography>
                                </Box>
                                <Box className={classes.flexBox_Account}>
                                    <Typography className={classes.itemTitle_Account}>
                                        Username: 
                                    </Typography>
                                    <Typography>
                                        {user.username}
                                    </Typography>
                                </Box>

                            </Grid>
                        </Paper>
                        <Paper className={classes.historyPaper_Account}>
                            <Typography className={classes.paperTitle_Account} variant='subtitle1'>
                                Order History
                            </Typography>
                            <MaterialLink
                                to='/order-history'
                                component={RouterLink}
                                underline='none'
                            >
                                <Button className={classes.viewHistoryBtn_Account}>
                                    <Typography>
                                        View Order History
                                    </Typography>
                                </Button>
                            </MaterialLink>
                        </Paper>
                    </Grid>
                </Box>
            }
            <Box className={classes.returnHomeBtnContainer_Account}>
                <MaterialLink
                    to='/'
                    component={RouterLink}
                    underline='none'
                >
                    <Button className={classes.returnHomeBtn_Account}>
                        <Typography>
                            Return to Home
                        </Typography>
                    </Button>
                </MaterialLink>
            </Box>
        </Container>
    );
};

export default Account;