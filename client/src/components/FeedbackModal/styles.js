import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
    modalContainer_FeedbackModal: {
        width: '50%',
        maxWidth: '925px',
        background: 'rgba(200,200,200,.9)', 
        padding: '10px',
        borderRadius: '4px',
        '@media (max-width:750px)': {
            width: '95%'
        } 
    },
    flexCenter_FeedbackModal: {
        textAlign: 'center'
    },
    textarea_FeedbackModal: {
        width: '80%',
        borderRadius: '4px',
        margin: '15px 0',
        fontSize: '24px',
        fontFamily: 'serif',
        padding: '10px'
    },
    btn_FeedbackModal: {
        position: 'relative',
        width: '300px'
    },
    sentOverlay_FeebackModal: {
        position: 'absolute', 
        width: '100%',
        height: '100%',
        background: 'green',
        '&:hover': {
            background: 'green'
        }
    }
}));

export default useStyles;