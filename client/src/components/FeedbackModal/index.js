import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import useStyles from './styles';

const FeedbackModal = ({ handleClose }) => {
    const classes = useStyles();

    const [sent, setSent] = useState(false); 

    const handleSend = () => {
        setSent(true);
        setTimeout(() => {
            handleClose();  
        }, 2500);
    };

    return (
        <Grid container className={classes.modalContainer_FeedbackModal} justifyContent='center'>
            <Typography variant='h2' className={classes.flexCenter_FeedbackModal}>
                Send Us Your Feedback
            </Typography>
            <Typography className={classes.flexCenter_FeedbackModal}>
                Your feedback matters! Help The Xavy Shop become better.
            </Typography>
            <textarea className={classes.textarea_FeedbackModal} rows='8'/>
            <Button 
                className={classes.btn_FeedbackModal}
                onClick={handleSend}
            >
                <Typography>
                    Send Feedback
                </Typography>
                {sent &&
                    <Button className={classes.sentOverlay_FeebackModal}>
                        <Typography>
                            Feeback Sent. Thank you.
                        </Typography>
                    </Button>
                }
            </Button>
        </Grid>
    );
};

export default FeedbackModal;