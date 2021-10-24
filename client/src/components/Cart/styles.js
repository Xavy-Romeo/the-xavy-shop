import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
    cartIcon_Cart: {
        position: 'fixed',
        top: '65px',
        right: '1%',
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        padding: '30px',
        zIndex: '99999',
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.secondary.main,
        '&:hover': {
            transform: 'rotate(-15deg)',
        }
    },
    quantityContainer_Cart: {
        position: 'absolute', 
        top: -27, 
        right: 5,
        borderRadius: '50%',
        border: `1px solid ${theme.palette.primary.contrastText}`,
        background: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        minWidth: '25px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
    },
    quantity_Cart: {
        fontFamily: 'serif'
    },
    cartContainer_Cart: {
        position: 'fixed',
        top: 101,
        right: 0,
        width: '300px',
        minHeight: '200px', 
        background: 'rgb(218,218,218)',
        overflow: 'auto',
        padding: '.5rem',
        boxShadow: '0 0 1rem rgba(0, 0, 0, .5)',
        borderBottomLeftRadius: '.5rem'
    },
    closeIcon_Cart: {
        position: 'absolute', 
        right: '2px', 
        top: '2px',
        cursor: 'pointer',
        '&:hover': {
            transform: 'scale(1.05)',
            color: theme.palette.primary.main 
        }
    },
    cartTitleContainer_Cart: {
        borderBottom: '1px solid black', 
        width: '100%' 
    },
    cartTitle_Cart: {
        fontWeight: 'bold'
    },
    checkoutBtnContainer_Cart: {
        width: '100%', 
        marginTop: '10px'
    },
    checkoutLink_Cart: {
        color: theme.palette.primary.contrastText, 
        width: '100%'
    },
    checkoutBtn_Cart: {
        width: '100%'
    },
    loginLinkContainer_Cart: {
        display: 'flex', 
        justifyContent: 'center', 
        width: '100%', 
        marginTop: '10px'
    },
    loginLink_Cart: {
        '&:hover': {
            color: theme.palette.secondary.main
        }
    }

}));

export default useStyles;