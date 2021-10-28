import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
    Appbar_Header: {
        background: 'rgba(0,0,0.95)',
        height: '100px'
    },
    upperHeader_Header: {
        background: theme.palette.background.default, 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        height: '28px'
    },
    upperHeaderSpan_Header: {
        paddingRight: '5px'
    },
    upperHeaderNumb_Header: {
        marginBottom: '3px'
    },
    toolbarGrid_Header: {
        paddingTop: '4px'
    },
    xrLogo_Header: {
        height: '60px', 
        width: '60px',
        '@media (max-width:599px)': {
            height: '45px',
            width: '45px'
        }, 
    },
    title_Header: {
        fontFamily: 'Special Elite, serif', 
        fontWeight: 'bold', 
        textShadow: '1px 1px 3px rgba(100,100,100,.87)',
        padding: '10px 0 0 20px', 
        opacity: '.87',
        '&:hover': {
            textShadow: '5px 5px 10px rgba(150,150,150,.87)',
            transform: 'scale(1.03)'
        },
        '@media (max-width:599px)': {
            fontSize: '30px'
        }, 
        '@media (max-width:420px)': {
            fontSize: '24px'
        }, 
        '@media (max-width:375px)': {
            fontSize: '22px'
        }, 
    }
}));

export default useStyles;