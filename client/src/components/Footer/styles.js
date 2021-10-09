import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({ 
    toolbar_Footer: {
        background: 'black',
        color: 'rgba(255,255,255,.87)',
        display: 'flex',
        flexDirection: 'column'
    },
    toTop_Footer: {
        marginTop: '-20px',
        background: 'rgb(255,20,20)',
        borderRadius: '50%',
        height: '50px',
        width: '100px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover': {
            background: 'rgb(255,70,70)',
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
    midFooterDiv_Footer: {
        paddingRight: '20px' 
    },
    subscribeInput_Footer: {
        width: '100%',
        background: 'none',
        border: 'none',
        borderBottom: '1px solid rgba(255,255,255,.87)',
        color: 'rgba(255,255,255,.87)',
        fontFamily: 'Playfair Display, serif',
        padding: '10px',
        marginBottom: '20px'
    },
    moreInfo: {
        padding: '0 20px'
    },
    button_Footer: {
        width: '300px',
        background: 'rgb(5,44,133)',
        color: 'rgba(255,255,255,.87)',
        borderRadius: '30px',
        '&:hover': {
            background: 'rgb(47,96,162)',
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
            background: 'rgb(5,44,133)',
        }
    },
    copyContainer_Footer: {
        height: '100%'
    }
});

export default useStyles;