import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
    Appbar_Header: {
        background: 'rgba(0,0,0.95)',
        height: '100px',
        '@media (max-width:599px)': {
            height: '80px'
        }
    },
    upperHeader_Header: {
        background: theme.palette.background.default, 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        height: '28px'
    },
    upperHeaderContent_Header: {
        '@media (max-width:335px)': {
            fontSize: '12px'
        } 
    },
    upperHeaderSpan_Header: {
        paddingRight: '5px'
    },
    upperHeaderNumb_Header: {
        fontFamily: 'serif',
    },
    toolbarGrid_Header: {
        height: '72px',
    },
    xrLogo_Header: {
        height: '60px', 
        width: '60px',
        '@media (max-width:599px)': {
            height: '45px',
            width: '45px'
        },
        '@media (max-width:420px)': {
            height: '35px',
            width: '35px'
        }, 
    },
    title_Header: {
        fontFamily: 'Special Elite, serif', 
        fontWeight: 'bold', 
        textShadow: '1px 1px 3px rgba(100,100,100,.87)',
        padding: '12px 0 0 20px',
        opacity: '.87',
        '&:hover': {
            textShadow: '5px 5px 10px rgba(150,150,150,.87)',
            transform: 'scale(1.03)'
        },
        '@media (max-width:960px)': {
            paddingTop: '8px'
        }, 
        '@media (max-width:599px)': {
            fontSize: '30px',
            paddingTop: '6px'
        }, 
        '@media (max-width:420px)': {
            fontSize: '28px',
            paddingTop: '3px'
        }, 
        '@media (max-width:375px)': {
            paddingLeft: '10px',
            fontSize: '24px'
        },
        '@media (max-width:335px)': {
            fontSize: '20px',
            paddingTop: '0'
        },
        '@media (max-width:305px)': {
            fontSize: '18px'
        },  
    }
}));

export default useStyles;