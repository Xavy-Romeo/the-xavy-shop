import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
    signupPageContainer_Signup: {
        position: 'relative',
        marginTop: '130px' 
    },
    backgroundImg_Signup: {
        objectFit: 'cover',
        height: '80vh',
        width: '100%',
        zIndex: '-9999',
        borderRadius: '4px'
    },
    formPaperContainer_Signup: {
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0
    },
    formPaper_Signup: {
        margin: '20px 0 50px 0',
        width: '500px',
        padding: '10px 30px',
        paddingBottom: '50px',
        opacity: '90%',
        '@media (max-width:650px)': {
            width: '80%'
        }
    },
    avatar_Signup: {
        background: theme.palette.primary.main
    },
    input_SignUp: {
        fontSize: '20px',
        padding: '5px 10px',
        borderRadius: '4px',
        height: '35px',
        '@media (max-width:650px)': {
            fontSize: '18px',
            padding: '3px 10px',
            height: '28px',
        }
    },
    inputFocused_SignUp: {
        background: 'rgba(240,240,240,.9)',
        border: `1px solid ${theme.palette.primary.main}`
    },
    inputLabel_SignUp: {
        fontSize: '15px'
    },
    termsLinksContent_Signup: {
        margin: '20px 0',
        '@media (max-width:650px)': {
            margin: '10px 0'
        }
    },
    termsLinks_Signup: {
        margin: '0 7px'
    },
    createAccountBtn_Signup: {
        width: '100%',
        '&:hover': {
            background: theme.palette.primary.light
        }
    },
    failedContainer_Signup: {
        marginBottom: '-20px'
    },
    failed_Signup: {
        color: theme.palette.secondary.main,
        margin: '5px 0',
        fontWeight: 'bold'
    },
    haveAccountBox_Signup: {
        display: 'flex', 
        justifyContent: 'center',
        margin: '25px 0 12px 0',
        '@media (max-width:650px)': {
            margin: '10px 0'
        } 
    },
    signInBtn_Signup: {
        border: '1px solid black', 
        background: 'none', 
        color: 'black',
        width: '100%',
        transition: '.3s ease',
        '&:hover': {
            background: 'white'
        }
    }
}));

export default useStyles;