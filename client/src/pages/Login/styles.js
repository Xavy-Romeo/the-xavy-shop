import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
    loginPageContainer_Login: {
        marginTop: '130px', 
        position: 'relative'
    },
    backgroundImg_Login: {
        objectFit: 'cover',
        height: '80vh',
        width: '100%',
        zIndex: '-9999',
        borderRadius: '4px'
    },
    formPaperContainer_Login: {
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0
    },
    formPaper_Login: {
        margin: '20px 0 50px 0',
        width: '500px',
        padding: '10px 30px',
        paddingBottom: '50px',
        opacity: '90%'
    },
    avatar_Login: {
        background:'rgb(5,44,133)'
    },
    input_Login: {
        fontSize: '20px',
        padding: '5px 10px',
        borderRadius: '4px',
        height: '35px'
    },
    inputFocused_Login: {
        background: 'rgba(240,240,240,.9)',
        border: `1px solid ${theme.palette.primary.main}`
    },
    inputLabel_Login: {
        fontSize: '15px'
    },
    loginBtn_Login: {
        width: '100%', 
        marginTop: '20px',
        '&:hover': {
            background: theme.palette.primary.light
        }
    },
    haveAccountBox_Login: {
        display: 'flex', 
        justifyContent: 'center',
        margin: '25px 0 12px 0'
    },
    createAccountBtn_Login: {
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