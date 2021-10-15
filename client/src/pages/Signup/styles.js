import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
    input_SignUp: {
        fontSize: '20px',
        padding: '5px 10px',
        borderRadius: '4px',
        height: '35px'
    },
    inputFocused_SignUp: {
        background: 'rgba(240,240,240,.9)',
        border: `1px solid ${theme.palette.primary.main}`
    },
    inputLabel_SignUp: {
        fontSize: '15px'
    },
    createAccountBtn_Signup: {
        width: '100%',
        '&:hover': {
            background: theme.palette.primary.light
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