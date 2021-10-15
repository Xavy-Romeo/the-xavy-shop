import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
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