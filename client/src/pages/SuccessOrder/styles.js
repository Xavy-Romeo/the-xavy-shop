import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
    pageContainer_SuccessOrder: {
        margin: '200px 0 100px 0', 
        display: 'flex', 
        justifyContent: 'center',
        '@media (max-width:599px)': {
            margin: '200px 15px 100px 15px',
        },
    },
    logo_SuccessOrder: {
        width: '200px',
        height: '200px',
        '@media (max-width:599px)': {
            width: '150px',
            height: '150px',
        }
    },
    contentBox_SuccessOrder: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: `4px solid ${theme.palette.secondary.main}`,
        borderRadius: '4px',
        background: 'black',
        color: theme.palette.primary.contrastText,
        padding: '30px 50px',
        '@media (max-width:599px)': {
            padding: '30px 10px',
        },
    },
    successText_SuccessOrder: {
        margin: '20px 0 10px 0',
        '@media (max-width:599px)': {
            fontSize: '18px',
        },
        '@media (max-width:330px)': {
            fontSize: '16px',
        },
        '@media (max-width:300px)': {
            fontSize: '14px',
        },
    },
    thankYou_SuccessOrder: {
        marginBottom: '10px',
        '@media (max-width:599px)': {
            fontSize: '16px',
        },
        '@media (max-width:330px)': {
            fontSize: '14px',
        },
        '@media (max-width:300px)': {
            fontSize: '12px',
        },
    },
    redirect_SuccessOrder: {
        '@media (max-width:599px)': {
            fontSize: '12px',
        },
        '@media (max-width:300px)': {
            fontSize: '10px',
        },
    },
    countDownContainer_SuccessOrder: {
        marginTop: '15px', 
        border: '1px solid white',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    countDown_SuccessOrder: {
        fontFamily: 'serif', 
        fontWeight: 'bold'
    }
}));

export default useStyles;