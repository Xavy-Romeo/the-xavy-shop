import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
    toolbar_Footer: {
        background: 'black',
        color: theme.palette.primary.contrastText,
        display: 'flex',
        flexDirection: 'column'
    },
    toTop_Footer: {
        marginTop: '-20px',
        background: theme.palette.secondary.main,
        borderRadius: '50%',
        height: '50px',
        width: '100px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        scrollBehavior: 'smooth',
        '&:hover': {
            background: theme.palette.secondary.light,
            color: 'black',
            cursor: 'pointer'
        }
    },
    toTopSpan_Footer: {
        fontSize: '40px',
        margin: '-25px 0'
    },
    toolbarMain_Footer: {
        height: '100%'
    },
    upperFooter_Footer: {
        margin: '20px 20px 70px 20px',
        width: '80%',

    },
    iconDiv_Footer: {
        display: 'flex',
        justifyContent: 'center'
    },
    textMargin_Footer: {
        marginBottom: '15px'
    },
    topLinks_Footer: {
        color: theme.palette.primary.contrastText,
        marginBottom: '15px',
        '&:hover': {
            color: theme.palette.primary.light
        }
    },
    midFooterDiv_Footer: {
        paddingRight: '20px' 
    },
    subscribeInput_Footer: {
        width: '100%',
        background: 'none',
        border: 'none',
        borderBottom: `1px solid ${theme.palette.primary.contrastText}`,
        color: theme.palette.primary.contrastText,
        fontFamily: 'Playfair Display, serif',
        padding: '10px',
        marginBottom: '20px'
    },
    moreInfo_Footer: {
        padding: '0 20px'
    },
    moreInfoLinks_Footer: {
        color: theme.palette.primary.contrastText,
        '&:hover': {
            color: theme.palette.primary.light
        }
    },
    button_Footer: {
        position: 'relative',
        width: '300px',
        '&:hover': {
            background: theme.palette.primary.light,
        }
    },
    subscribedButton_Footer: {
        position: 'absolute', 
        width: '100%', 
        height: '100%',
        background: 'green',
        '&:hover': {
            background: 'green'
        }
    },
    footerBottom_Footer: {
        margin: '70px 0 5px 0', 
        width: '100%', 
        display: 'flex', 
        justifyContent: 'center'
    },
    footerBottomBorder_Footer: {
        width:'100%', 
        borderTop: '2px solid rgba(255,255,255,.05)'
    },
    xrLogo_Footer: {
        height: '60px',
        width: '60px'
    },
    socialIconDiv_Footer: { 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 5px',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: '.1s ease-in',
        '&:hover': {
            borderRadius: '4px',
            background: theme.palette.primary.main,
        }
    },
    copyContainer_Footer: {
        height: '100%'
    },
    modal_Footer: {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        zIndex: '99999' 
    }
}));

export default useStyles;