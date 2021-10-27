import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { 
    Toolbar,
    Box,
    Grid,
    Typography,
    Container,
    Button,
    Modal,
    Link as MaterialLink
} from '@material-ui/core';

import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import LocalHospitalOutlinedIcon from '@material-ui/icons/LocalHospitalOutlined';

import useStyles from './styles';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PAGE } from '../../utils/actions';
import Logo from '../../assets/images/xr-logo.png';
import { socialLogos, moreInfo } from './helpers';
import FeedbackModal from '../FeedbackModal';

const Footer = () => {
    const classes = useStyles();

    const [modalOpen, setModalOpen] = useState(false);
    const [submitSub, setSubmitSub] = useState(false);

    const [, dispatch] = useStoreContext();

    const changePage = async (pageName, type) => {
        let page;

        if (type === 'social') {
            page = await socialLogos.find(page => page.name === pageName);
        }
        else if (type === 'moreInfo') {
            page = await moreInfo.find(page => page.name === pageName);
        }
        else {
            page = { name: pageName, logo: Logo };
        }

        dispatch({
            type: UPDATE_PAGE,
            currentMimicPage: page
        });
    };

    const handleOpen = () => {
        setModalOpen(true);
    };

    const handleClose = () => {
        setModalOpen(false);
    };

    const handleSubmit = e => {
        e.preventDefault();

        const input = document.getElementById('sub-submit');
        input.value = '';

        setSubmitSub(true);

        setTimeout(() => {
            setSubmitSub(false);
        }, 2500);
    };

    // function scroll to top of page
    const toTop = () => {
        window.scrollTo(0,0);
    };

    return (
        <Toolbar className={classes.toolbar_Footer}>
            <Grid container justifyContent='center' className={classes.toTopDiv_Footer}>
                <Box 
                    className={classes.toTop_Footer} 
                    onClick={() => toTop()}
                    color='secondary'
                >
                    <Typography className={classes.toTopSpan_Footer} component='span'>
                        ^
                    </Typography>
                    <Typography variant='caption'>
                        Back to Top
                    </Typography>
                </Box>
            </Grid>
            <Container maxWidth='xl'>
                <Grid 
                    container 
                    className={classes.toolbarMain_Footer}
                    justifyContent='space-evenly'
                >
                    <Grid item className={classes.upperFooter_Footer} xs={5}>
                        <Box className={classes.iconDiv_Footer}>
                            <CheckCircleOutlineOutlinedIcon fontSize='large' className={classes.textMargin_Footer} />
                        </Box>
                        <Typography className={classes.textMargin_Footer} variant='h4'>
                            We guarantee everything we make.
                        </Typography>
                        <Typography className={classes.textMargin_Footer}>
                            We know prioritizing quality and durability is what our community wants.
                        </Typography>
                        <MaterialLink
                            to='/mimic-page'
                            className={classes.topLinks_Footer}
                            component={RouterLink}
                            onClick={() => changePage('Guarantee')}
                            variant='caption'
                            underline='none'
                        >
                            View Guarantee
                        </MaterialLink>
                    </Grid>
                    
                    <Grid item className={classes.upperFooter_Footer} xs={5}>
                        <Box className={classes.iconDiv_Footer}>
                            <LocalHospitalOutlinedIcon fontSize='large' className={classes.textMargin_Footer} />
                        </Box>
                        <Typography className={classes.textMargin_Footer} variant='h4'>
                            We give back for every sale.
                        </Typography>
                        <Typography className={classes.textMargin_Footer}>
                            We've pledged 1% of sales to help children who need medical treatment at Children's Hospital.
                        </Typography>
                        <MaterialLink
                            to='/mimic-page'
                            className={classes.topLinks_Footer}
                            component={RouterLink}
                            onClick={() => changePage('For the Children')}
                            variant='caption'
                            underline='none'
                        >
                            View 1% For the Children
                        </MaterialLink>
                    </Grid>

                    <Grid item className={classes.midFooterDiv_Footer} xs={5}>
                        <Typography className={classes.textMargin_Footer} variant='h4'>
                            Subscribe
                        </Typography>
                        <Typography className={classes.textMargin_Footer}>
                            Sign up for exclusive offers, original stories, charity, events and more.
                        </Typography>
                        <Box>
                            <form onSubmit={handleSubmit}>
                                <input 
                                    className={classes.subscribeInput_Footer}
                                    id='sub-submit'
                                    placeholder='Email Address'
                                    type='email'
                                    required
                                />
                                <Button className={classes.button_Footer} type='submit'>
                                    <Typography variant='body2'>
                                        Sign Me Up
                                    </Typography>
                                    {submitSub &&
                                        <Button className={classes.subscribedButton_Footer}>
                                            <Typography>
                                                You Subscribed ✔️
                                            </Typography>
                                        </Button>
                                    }
                                </Button>
                            </form>
                        </Box>
                    </Grid>

                    <Grid item xs={2} className={classes.moreInfo_Footer}>
                        <Typography className={classes.textMargin_Footer} variant='h4'>   
                            More Info
                        </Typography>
                        <Grid container direction='column'>
                            {moreInfo.map((item, index) => (
                                <MaterialLink
                                    to='/mimic-page'
                                    className={classes.moreInfoLinks_Footer}
                                    component={RouterLink}
                                    onClick={() => changePage(item.name, 'moreInfo')}
                                    underline='none'
                                    variant='body2'
                                    key={index}
                                >
                                    {item.name}
                                </MaterialLink>
                            ))}
                            <MaterialLink
                                to='/policies'
                                className={classes.moreInfoLinks_Footer}
                                component={RouterLink}
                                onClick={() => changePage('Privacy Policy')}
                                underline='none'
                                variant='body2'
                            >
                                Privacy Policy
                            </MaterialLink>
                            <MaterialLink
                                to='/policies'
                                className={classes.moreInfoLinks_Footer}
                                component={RouterLink}
                                onClick={() => changePage('Terms of Use')}
                                underline='none'
                                variant='body2'
                            >
                                Terms of Use
                            </MaterialLink>
                        </Grid>
                    </Grid>

                    <Grid item xs={4}>
                        <Typography className={classes.textMargin_Footer} variant='h4'>
                            Send Us Your Thoughts
                        </Typography>
                        <Typography className={classes.textMargin_Footer}>
                            Let us know what you think! Your feedback is greatly appreciated.
                        </Typography>
                        <Button className={classes.button_Footer} onClick={handleOpen}>
                            <Typography variant='body2'>
                                Give Feedback
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>
                
                <Grid container>
                    <Grid item className={classes.footerBottom_Footer}>
                        <Box className={classes.footerBottomBorder_Footer} />
                    </Grid>
                    <Grid container justifyContent='space-between'>
                        <Grid item>
                            <img 
                                src={Logo} 
                                className={classes.xrLogo_Footer}
                                alt='site logo'
                            />
                        </Grid>
                        <Grid item>
                            <Grid container direction='column' alignItems='center'>
                                <Typography>
                                    Follow Us
                                </Typography>
                                <Grid container justifyContent='center'>
                                    {socialLogos.map((item, index) => (
                                        <MaterialLink
                                            to='/mimic-page'
                                            component={RouterLink}
                                            onClick={() => changePage(item.name, 'social')}
                                            underline='none'
                                        >
                                            <Grid item className={classes.socialIconDiv_Footer} key={index}  >                    
                                                <img src={item.logo} alt={item.name} height='30px' width='30px' />
                                            </Grid>
                                        </MaterialLink>
                                    ))}
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container className={classes.copyContainer_Footer} direction='column' justifyContent='center'>
                                <Typography variant='caption'>
                                    &copy; 2005 - {new Date().getFullYear()} The Xavy Store, Inc.
                                </Typography>
                                <Typography variant='caption'>
                                    All Rights Reserved. Do Not Sell My Data
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <Modal
                open={modalOpen}
                onClose={handleClose}
                className={classes.modal_Footer}
            >
                <FeedbackModal 
                    handleClose={handleClose}
                />
            </Modal>
        </Toolbar>
    );
};

export default Footer;