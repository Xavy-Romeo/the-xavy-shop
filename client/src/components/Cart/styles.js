import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
    cartIconContainer_Cart: {
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
        zIndex: '9999',
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.secondary.main,
        '&:hover': {
            transform: 'rotate(-15deg)',
        },
        '@media (max-width:1279px)': {
            top: '35px',
            right: '90px'
        },  
        '@media (max-width:599px)': {
            width: '45px',
            height: '45px',
            padding: '15px',
            top: '29px',
            right: '60px'
        },
        '@media (max-width:420px)': {
            width: '35px',
            height: '35px',
            right: '50px',
            top: '34px'
        }, 
    },
    cartIconBox_Cart: {
        position: 'relative', 
        height: '100%', 
        width: '100%', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    cartIcon_Cart: {
        '@media (max-width:420px)': {
            fontSize: '24px'
        }, 
    },
    marginTop_Cart: {
        marginTop: '10px'
    },
    bold_Cart: {
        fontWeight: 'bold'
    },
    quantityContainer_Cart: {
        position: 'absolute', 
        top: -40, 
        right: -12,
        borderRadius: '50%',
        border: `1px solid ${theme.palette.primary.contrastText}`,
        background: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        minWidth: '25px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '@media (max-width:599px)': {
            top: -28,
            right: -7
        }, 
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
    totalPrice_Cart: {
        fontFamily: 'serif', 
        fontWeight: 'bold'
    },
    emptyCartContainer_Cart: {
        display: 'flex'
    },
    shopBtnLinkContainer_Cart: {
        width: '100%', 
        marginTop: '10px'
    },
    checkoutBtnContainer_Cart: {
        width: '100%', 
        marginTop: '10px'
    },
    shopBtnLink_Cart: {
        color: theme.palette.primary.contrastText, 
        width: '100%'
    },
    shopBtn_Cart: {
        width: '100%'
    },
    checkoutLink_Cart: {
        color: theme.palette.primary.contrastText, 
        width: '100%'
    },
    checkoutBtn_Cart: {
        width: '100%'
    },
    demoText_Cart: {
        color: theme.palette.secondary.main
    },
    demoCC_Cart: {
        fontFamily: 'serif',
        color: theme.palette.secondary.main
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